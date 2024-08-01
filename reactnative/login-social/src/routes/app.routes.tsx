import {createNativeStackNavigator}  from "@react-navigation/native-stack"

import { Home } from "../screens/Home"
import { Departure } from "../screens/Departure"
import { Arrival } from "../screens/Arrival"

const Stack = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Departure" component={Departure}/>
            <Stack.Screen name="Arrival" component={Arrival}/>
        </Stack.Navigator>
    )
}
