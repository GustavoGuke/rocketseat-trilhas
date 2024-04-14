import { UserDTO } from '@dtos/UserDTO'
import { ReactNode, createContext, useEffect, useState } from 'react'

import { api } from '@services/api';
import { storageUserSave, storageUserGet, storageUserRemove } from '@storage/storageUser';
export type AuthContextDataProps = {
    user: UserDTO;
    signin: (email: string, password: string) => Promise<void>
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

    async function signin(email: string, password: string) {

        try {
            const { data } = await api.post('/sessions', { email, password })

            if (data.user) {
                setUser(data.user)
                await storageUserSave(data.user)
            }

        } catch (error) {
            throw error
        }
    }

    async function signOut(){

        try {
            setLoadingStorageUse(true)
            setUser({} as UserDTO)  
            await storageUserRemove()

        } catch (error) {   
            throw error
        } finally {
            setLoadingStorageUse(false)
        }

    }

    async function loadUserStorageData() {

        try {
            const userLogged = await storageUserGet()
            if (userLogged) {
                setUser(userLogged)
                setLoadingStorageUse(false)
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

    return (
        <AuthContext.Provider value={{ user, signin, loadingStorageUse, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}