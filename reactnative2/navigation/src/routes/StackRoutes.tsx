import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Home } from "@/app/Home";
import { Product } from "@/app/Product";

export type RootStackParamList = {
    Home: undefined;
    Product: undefined | { id: string };
}
// tipando rotas
export type StackRoutesProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;
const Stack = createNativeStackNavigator<RootStackParamList>();
export function StackRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
    );
}