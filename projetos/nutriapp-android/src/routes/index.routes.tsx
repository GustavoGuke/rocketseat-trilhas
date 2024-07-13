import {NavigationContainer} from '@react-navigation/native'

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from './app.routes';

import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';

export function Routes(){
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(response => {
            setUser(response);
        });
        return subscriber;
    }, [])
    return (
        <NavigationContainer>
           { user ? <AppRoutes/> : <AuthRoutes />}
        </NavigationContainer>
    )
}