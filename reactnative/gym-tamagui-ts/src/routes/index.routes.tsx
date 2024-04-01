import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { View } from 'tamagui';

export function Routes() {
    return (
        <View flex={1} bg={'$gray600'}>
            <NavigationContainer>
                <AuthRoutes />
            </NavigationContainer>
        </View>
    );
}