import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {  DefaultTheme } from '@react-navigation/native';

import HomeSvg from '@assets/home.svg';
import HistorySvg from '@assets/history.svg';
import ProfileSvg from '@assets/profile.svg';

import { Home } from "@screens/Home";
import { Exercise } from "@screens/Exercise";
import { History } from "@screens/History";
import { Profile } from "@screens/Profile";

import { useTheme } from "tamagui";
import { Platform } from "react-native";

type AppRoutes = {
    Home: undefined;
    History: undefined;
    Profile: undefined;
    Exercise: {exerciseId: string};
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;
const Tabs = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    const cor = useTheme();
    const iconSize = 25;
    
    return (
        <Tabs.Navigator screenOptions={{ 
            headerShown: false, 
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#00B37E', //greenclaro
            tabBarInactiveTintColor: '#C4C4CC', //gray200
            tabBarStyle: { 
                backgroundColor: '#29292E', // gray500
                borderTopWidth: 0,
                height: Platform.OS == 'android' ? 'auto' : 100, 
                paddingBottom: 40, 
                paddingTop: 25, },
            }}>
            <Tabs.Screen
                name="Home"
                component={Home}
                options={{ tabBarIcon: ({ color }) => <HomeSvg fill={color} width={iconSize} height={iconSize} /> }} />
            <Tabs.Screen
                name="History"
                component={History}
                options={{ tabBarIcon: ({ color }) => <HistorySvg fill={color} width={iconSize} height={iconSize} /> }} />
            <Tabs.Screen
                name="Profile"
                component={Profile}
                options={{ tabBarIcon: ({ color }) => <ProfileSvg fill={color} width={iconSize} height={iconSize} /> }} />
            <Tabs.Screen
                name="Exercise"
                component={Exercise} 
                options={ { tabBarButton: () => null } }
                />
        </Tabs.Navigator>
    );
}