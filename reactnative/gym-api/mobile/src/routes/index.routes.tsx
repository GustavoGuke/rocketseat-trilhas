import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { View, useTheme } from 'tamagui';

import { useAuth } from '@hooks/useAuth';

import { AuthRoutes } from './auth.routes';



export function Routes() {
    const { colors } = useTheme()
    const theme = DefaultTheme
    theme.colors.background = colors?.gray[600];

    const {user} = useAuth()
    
    console.log(user)

    return (
        <View flex={1} bg={'$gray600'}>
            <NavigationContainer theme={theme}>
                <AuthRoutes />
            </NavigationContainer>
        </View>
    );
}