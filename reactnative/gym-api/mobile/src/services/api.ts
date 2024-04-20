import { storageAuthTokenGet, storageAuthTokenSave } from "@storage/storageAuthTokens";
import { AppError } from "@utils/AppError";
import axios, { AxiosInstance, AxiosError } from "axios";

type SignOut = () => void

type PromiseType = {
    onSucess: (token: string) => void
    onFailure: (error: AxiosError) => void
}

type APIInstaceProps = AxiosInstance & {
    registerInterceptorTokenManager: (signOut: SignOut) => () => void
}


const api = axios.create({
    baseURL: 'http://192.168.18.7:3333'
}) as APIInstaceProps

let faildQueue: Array<PromiseType> = []
let isRefreshing = false

api.registerInterceptorTokenManager = signOut => {
    const interceptorsTokenManager = api.interceptors.response.use(response => response, async (error) => {

        if (error?.response?.status === 401) {
            if (error.response.data?.message === 'token.expired' || error.response.data?.message === 'token.invalid') {
                const token = await storageAuthTokenGet()

                if (!token?.refresh_token) {
                    signOut()
                    return Promise.reject(error)
                }

                const originalRequestConfig = error.config
                //console.log("ORIGINAL REQUEST CONFIG => ", originalRequestConfig)

                if (isRefreshing) {
                    return new Promise((resolve, reject) => {
                        faildQueue.push({
                            onSucess: (token: string) => {
                                originalRequestConfig.headers = { Authorization: `Bearer ${token}` }
                                resolve(api(originalRequestConfig))
                            },
                            onFailure: (error: AxiosError) => {
                                reject(error)
                            }
                        })
                    })
                }

                isRefreshing = true

                return new Promise(async (resolve, reject) => {
                    try {
                        const { data } = await api.post('/sessions/refresh-token', {refresh_token: token.refresh_token})
                        await storageAuthTokenSave({token: data.token, refresh_token: data.refresh_token})

                        originalRequestConfig.headers = { Authorization: `Bearer ${data.token}` }
                        api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`

                        faildQueue.forEach(request => {
                            request.onSucess(data.token)
                        })
                        console.log("TOKEN REFRESHED")
                    } catch (error: any) {
                        faildQueue.forEach(request => {
                            request.onFailure(error)
                        })

                        signOut()
                        reject(error)
                    } finally {
                        isRefreshing = false
                        faildQueue = []
                    }
                })

            }
            signOut()
        }


        if (error.response && error.response.data) {
            return Promise.reject(new AppError(error.response.data.message))
        } else {
            return Promise.reject(new AppError(error))
        }
    })

    return () => {
        api.interceptors.response.eject(interceptorsTokenManager)
    }
}



// api.interceptors.response.use((response) => {
//     console.log("INTERCEPTOR RESPONSE => ", response)
//     return response
// }, (error) => {
//     console.log("INTERCEPTOR RESPONSE ERROR => ", error)
//     return Promise.reject(error)
// }
// )

export { api }