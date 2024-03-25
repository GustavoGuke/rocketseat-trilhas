import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Groups from '@screens/Groups'
import { Players } from '@screens/Players'
import { NewGroup } from '@screens/NewGroup'

const Stack = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Groups' component={Groups} />
            <Stack.Screen name='NewGroup' component={NewGroup} />
            <Stack.Screen name='Players' component={Players} />
        </Stack.Navigator>
    )
}