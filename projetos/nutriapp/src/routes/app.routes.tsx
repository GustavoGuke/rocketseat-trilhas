import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { FontAwesome6 } from '@expo/vector-icons';


import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";
import { useTheme } from "styled-components/native";
import { Colors } from "react-native/Libraries/NewAppScreen";

type AppRoutes = {
    Home: undefined;
    Profile: undefined;
}


export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;
const Tabs = createBottomTabNavigator<AppRoutes>();


export function AppRoutes() {
    const { COLORS } = useTheme()
    const iconSize = 32;
    return (
        <Tabs.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#084d38', //greenclaro
            tabBarInactiveTintColor: '#efeff7', //gray200
            tabBarStyle: {
                backgroundColor: '#f09a54', // gray500
                borderTopWidth: 0,
                height: 80,
            },
        }}>
            <Tabs.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={iconSize} />
                    )
                }} />
            <Tabs.Screen
                name="Profile"
                component={Profile}
                options={{ tabBarIcon: ({color, size }) => <MaterialIcons name="person" size={iconSize} color={color} /> }} />
        </Tabs.Navigator>
    )
}