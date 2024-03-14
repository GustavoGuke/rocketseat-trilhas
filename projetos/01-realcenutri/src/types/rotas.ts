import type { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type RootStackParamList = {
    Home: undefined
    Login: undefined
}

export type RootScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>