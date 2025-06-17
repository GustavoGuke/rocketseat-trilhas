import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./StackRoutes";
import { BottomTabsRoutes } from "./BottomTabsRoutes";
import { DrawerRoutes } from "./DrawerRoutes";

export function Routes() {
    return (
        <NavigationContainer>
            <DrawerRoutes />
        </NavigationContainer>
    );
}