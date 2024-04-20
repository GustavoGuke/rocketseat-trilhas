import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { View, useTheme } from 'tamagui';

import { useAuth } from '@hooks/useAuth';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { Loading } from '@components/Loading';



export function Routes() {
    const { colors } = useTheme()
    const theme = DefaultTheme
    theme.colors.background = colors?.gray[600];

    const {user, loadingStorageUse} = useAuth()
    
    if(loadingStorageUse){
       return <Loading />
    }
    //console.log("Usuario logado => ",user)

    return (
        <View flex={1} bg={'$gray600'}>
            <NavigationContainer theme={theme}>
                {user.id ? <AppRoutes /> : <AuthRoutes />}
            </NavigationContainer>
        </View>
    );
}