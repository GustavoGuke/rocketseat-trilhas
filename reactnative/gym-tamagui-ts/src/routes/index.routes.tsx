import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { View, useTheme } from 'tamagui';

export function Routes() {
    const { colors } = useTheme()
    const theme = DefaultTheme
    theme.colors.background = colors?.gray[600];
    return (
        <View flex={1} bg={'$gray600'}>
            <NavigationContainer theme={theme}>
                <AppRoutes />
            </NavigationContainer>
        </View>
    );
}