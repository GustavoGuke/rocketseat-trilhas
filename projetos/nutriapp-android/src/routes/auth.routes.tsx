import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SignUp } from "@screens/SignUp";
import { Signin } from "@screens/Signin";


type AuthRoutesProps = {
    signIn: undefined;
    signUp: undefined;
}

export type AuthNavigationRoutesProps = NativeStackNavigationProp<AuthRoutesProps>;
const Stack = createNativeStackNavigator<AuthRoutesProps>();

export function AuthRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="signIn"
                component={Signin}
            />
            <Stack.Screen
                name="signUp"
                component={SignUp}
            />
        </Stack.Navigator>
    )
}