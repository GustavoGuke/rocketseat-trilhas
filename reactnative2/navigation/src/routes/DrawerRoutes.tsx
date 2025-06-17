import { createDrawerNavigator, DrawerScreenProps } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { Home } from "@/app/Home";
import { Product } from "@/app/Product"

export type DrawerParamList = {
    Home: undefined;
    Product: undefined | { id: string };
}
// tipando rotas
export type BottomTabsRoutesProps<T extends keyof DrawerParamList> = DrawerScreenProps<DrawerParamList, T>;
const Drawer = createDrawerNavigator<DrawerParamList>();
export function DrawerRoutes() {
    return (
        <Drawer.Navigator
            screenOptions={{ 
                headerShown: false, 
                drawerActiveBackgroundColor: '#2c46B1',
                drawerInactiveBackgroundColor: '#444444',
                }}>
            <Drawer.Screen
                name="Home"
                component={Home} 
                options={{
                    drawerLabel: 'Início',
                    drawerIcon: ({ color }) => (
                        <MaterialIcons name="home" size={24} color={color} />
                    )

                }}
            />

            <Drawer.Screen
                name="Product"
                component={Product} 
                options={{
                    drawerLabel: 'Produto',
                    drawerIcon: ({ color }) => (
                        <MaterialIcons name="add-circle" size={24} color={color} />
                    )
                }}
            />
        </Drawer.Navigator>
    );
}