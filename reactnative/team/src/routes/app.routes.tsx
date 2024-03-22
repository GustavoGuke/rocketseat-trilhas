import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Groups from '@screens/Groups'

const Stack = createNativeStackNavigator()

export function AppRoutes(){
    return (
        <Stack.Navigator>
            <Stack.Screen name='Groups' component={Groups} />
        </Stack.Navigator>
    )
}