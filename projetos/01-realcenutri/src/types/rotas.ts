import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type RootStackParamList = {
    Home: undefined
    Login: {
        email: string,
        password: string
    }
}

export type RootScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>