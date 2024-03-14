import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { RootStackParamList } from "../types/rotas";


const Stack = createNativeStackNavigator<RootStackParamList>()

const AppRouter:React.FC = () => {

    return (

        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Login" component={Login}/>
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppRouter