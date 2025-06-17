import { createBottomTabNavigator, BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Home } from "@/app/Home";
import { Product } from "@/app/Product"

export type RootTabParamList = {
    Home: undefined;
    Product: undefined | { id: string };
}
// tipando rotas
export type BottomTabsRoutesProps<T extends keyof RootTabParamList> = BottomTabScreenProps<RootTabParamList, T>;
const Tab = createBottomTabNavigator<RootTabParamList>();
export function BottomTabsRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{ 
                tabBarLabelPosition: 'beside-icon',
                headerShown: false, 
                tabBarActiveTintColor: '#2c46B1',
                tabBarInactiveTintColor: '#444444',
                tabBarStyle: {
                    marginBlock: 10,
                    alignContent: 'center'
                }
                }}>
            <Tab.Screen
                name="Home"
                component={Home} 
                options={{
                    tabBarLabel: 'Início',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="home" size={24} color={color} />
                    )

                }}
            />

            <Tab.Screen
                name="Product"
                component={Product} 
                options={{
                    tabBarLabel: 'Produto',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="add-circle" size={24} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}