import { Container, Title, Slogam } from './styles';
import backgroudImage from '../../assets/background.png'
import { Button } from '../../components/Button';
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { WEB_CLIENT_ID } from '@env';
import { useState } from 'react';
import { Alert } from 'react-native';
import { Realm , useApp} from '@realm/react';


GoogleSignin.configure({
    scopes: ['email', 'profile'],
    webClientId: WEB_CLIENT_ID,

})
export function Signin() {
    const [isAuthentic, setIsAuthentic] = useState(false)
    const app = useApp();

    async function handleGoogleSignin(){
        
        try {
            setIsAuthentic(true)
            const {idToken} = await GoogleSignin.signIn()
            if(idToken) { 
                const credentials = Realm.Credentials.jwt(idToken)
                const user = await app.logIn(credentials)
                console.log(user)
            }else {
                Alert.alert("Login", "Não foi possível entrar")
                setIsAuthentic(false)
            }

        } catch (error) {
            console.log(error)
            Alert.alert("Login", "Não foi possível entrar")
            setIsAuthentic(false)
        }
    }
    return (
        <Container source={backgroudImage}>
            <Title>Ignite Fleet</Title>
            <Slogam>Gestão de uso de veículos</Slogam>

            <Button
                title="Entrar"
                isLoading={isAuthentic}
                onPress={handleGoogleSignin} />
        </Container>
    );
}