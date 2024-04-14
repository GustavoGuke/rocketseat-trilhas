import AsyncStorage from "@react-native-async-storage/async-storage";

import { UserDTO } from "@dtos/UserDTO";
import { AUTH_TOKEN_STORAGE } from "./storageConfig";


export async function storageAuthTokenSave(token: string) {
    try {
        await AsyncStorage.setItem(AUTH_TOKEN_STORAGE, token);
    } catch (error) {
        console.log(error); 
    }
}

export async function storageAuthTokenGet() {
    try {
        const storage = await AsyncStorage.getItem(AUTH_TOKEN_STORAGE);
        return storage;
    } catch (error) {
        console.log(error);
    }
}


export async function storageAuthTokenRemove() {
    try {
        await AsyncStorage.removeItem(AUTH_TOKEN_STORAGE);
    } catch (error) {
        console.log(error);
    }
}