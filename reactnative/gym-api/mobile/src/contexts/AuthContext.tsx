import { UserDTO } from '@dtos/UserDTO'
import { ReactNode, createContext, useEffect, useState } from 'react'

import { api } from '@services/api';
import { storageUserSave, storageUserGet, storageUserRemove } from '@storage/storageUser';
import { storageAuthTokenSave, storageAuthTokenGet, storageAuthTokenRemove } from '@storage/storageAuthTokens';
export type AuthContextDataProps = {
    user: UserDTO;
    signin: (email: string, password: string) => Promise<void>
    updateUserProfile: (userUpdated: UserDTO) => Promise<void>
    signOut: () => Promise<void>
    loadingStorageUse: boolean
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps)


type AuthContextProps = {
    children: ReactNode;
}

export function AuthContextProvider({ children }: AuthContextProps) {
    const [user, setUser] = useState<UserDTO>({} as UserDTO)
    const [loadingStorageUse, setLoadingStorageUse] = useState(true)


    async function userAndTokeUpdate(userData: UserDTO, token: string) {
        try {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setUser(userData)
        } catch (error) {
            throw error
        } 
    }

    async function storageUserAndTokenSave(userData: UserDTO, token: string, refresh_token: string) {
        try {
            setLoadingStorageUse(true)
            await storageUserSave(userData) 
            await storageAuthTokenSave({token, refresh_token})

        } catch (error) {
            throw error
        } finally {
            setLoadingStorageUse(false)
        }
    }

    async function signin(email: string, password: string) {
        
        try {
<<<<<<< HEAD
            const { data } = await api.post('/sessions', { email, password })
            if (data.user && data.token) {
                setLoadingStorageUse(true)
                await storageUserAndTokenSave(data.user, data.token)
=======
            const { data,  } = await api.post('/sessions', { email, password })
            console.log(data)
            if (data.user && data.token && data?.refresh_token) {
                
                await storageUserAndTokenSave(data.user, data.token, data.refresh_token)
>>>>>>> 4f7d802f3f15158daefabf3f6b25a6d352cb1115
                userAndTokeUpdate(data.user, data.token)
            }

        } catch (error) {
            throw error
        }finally {
            setLoadingStorageUse(false)
        }
    }

    async function signOut() {

        try {
            setLoadingStorageUse(true)
            setUser({} as UserDTO)
            await storageUserRemove()
            await storageAuthTokenRemove()

        } catch (error) {
            throw error
        } finally {
            setLoadingStorageUse(false)
        }

    }

    async function updateUserProfile(userUpdated: UserDTO) {
        try {
            setUser(userUpdated)
            await storageUserSave(userUpdated)
        } catch (error) {
            throw error
        }
    }

    async function loadUserStorageData() {

        try {
            setLoadingStorageUse(true)
            const userLogged = await storageUserGet()
            const token = await storageAuthTokenGet()

            if (token &&userLogged) {
                userAndTokeUpdate(userLogged, token.token)
            }
        } catch (error) {
            throw error
        } finally {
            setLoadingStorageUse(false)
        }
    }

    useEffect(() => {
        loadUserStorageData()
    }, [])

    useEffect(() => {
        const subscribe = api.registerInterceptorTokenManager(signOut)

        return () => {
            subscribe()
        }
    }, [signOut])

    return (
        <AuthContext.Provider value={{ user, signin, loadingStorageUse, signOut, updateUserProfile }}>
            {children}
        </AuthContext.Provider>
    )
}