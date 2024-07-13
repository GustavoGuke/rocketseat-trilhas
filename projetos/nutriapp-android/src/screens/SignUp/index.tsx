import { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { TextLinearGradient } from "@components/TextLinearGradient";

import auth from '@react-native-firebase/auth';
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { ScreenDefault } from "@components/ScreenDefault";
import { ContenteDefault } from "@components/ContenteDefault";
import { useTheme } from "styled-components";



export function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { COLORS } = useTheme()
    const navigation = useNavigation<AppNavigatorRoutesProps>()


    function handleSignUp() {
        if (email === '' || password === '') {
            return Alert.alert('Erro', 'Email e senha devem ser informados');
        }
        auth()
            .createUserWithEmailAndPassword(email.trim(), password.trim())
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
          
                <ScreenDefault>
                    <ContenteDefault bgColor={COLORS.GREEN_100}>
                        <Input
                            placeholder='Nome'
                            border={1}
                            bgColor={COLORS.GREEN_100}
                            borderColor={COLORS.GREEN_700} />

                        <Input
                            placeholder='Email'
                            border={1}
                            bgColor={COLORS.GREEN_100}
                            borderColor={COLORS.GREEN_700} 
                            onChangeText={setEmail}
                            value={email}/>
                        <Input
                            placeholder='Senha'
                            border={1}
                            bgColor={COLORS.GREEN_100}
                            borderColor={COLORS.GREEN_700} 
                            onChangeText={setPassword}
                            value={password}/>
                        <Input
                            placeholder='Confirme a Senha'
                            border={1}
                            bgColor={COLORS.GREEN_100}
                            borderColor={COLORS.GREEN_700} />
                        <Button title="Acessar" bgColor="green"
                            onPress={handleSignUp} />
                        <Button
                            bgColor={COLORS.ORANGE_300}
                            onPress={() => navigation.goBack()}
                            title="Voltar para o login"
                        />
                    </ContenteDefault>
                </ScreenDefault>
        </ScrollView>
    )
}