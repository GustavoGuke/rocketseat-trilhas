import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./StackRoutes";
import { BottomTabsRoutes } from "./BottomTabsRoutes";

export function Routes() {
    return (
        <NavigationContainer>
            <BottomTabsRoutes />
        </NavigationContainer>
    );
}