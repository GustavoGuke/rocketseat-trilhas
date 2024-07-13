import { Alert, ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
import { ButtonSignIn, Text, Title, Xstack, Ystack } from "./style";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { AuthNavigationRoutesProps } from "@routes/auth.routes";
import { useTheme } from 'styled-components/native';
import { ScreenDefault } from '@components/ScreenDefault';
import { ContenteDefault } from '@components/ContenteDefault';
import { useState } from 'react';


export function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { COLORS } = useTheme()
    const navigation = useNavigation<AuthNavigationRoutesProps>()

    function handleSignIn() {
        console.log(email, password)
        if (email === '' || password === '') {
            return Alert.alert('Erro', 'Email e senha devem ser informados');
        }
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => console.log('Usuário logado'))
            .catch(error => {
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
            })

    }

    function handleForgotPassword() {
        if (email === '') {
            return Alert.alert('Erro', 'Email deve ser informado');
        }
        auth()
            .sendPasswordResetEmail(email)
            .then(() => Alert.alert('Email enviado! Verifique sua caixa de entrada'))
            .catch(error => {
                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }
            })
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <ScreenDefault>
                <Ystack>
                    <Title >Realce</Title>
                    <Title>Nutri</Title>
                </Ystack>
                <ContenteDefault bgColor={COLORS.GREEN_100}>
                    <Input
                        placeholder='Email'
                        border={1}
                        bgColor={COLORS.GREEN_100}
                        borderColor={COLORS.GREEN_700}
                        onChangeText={setEmail}
                        value={email}
                    />

                    <Input
                        placeholder='Senha'
                        border={1}
                        bgColor={COLORS.GREEN_100}
                        borderColor={COLORS.GREEN_700} 
                        onChangeText={setPassword}
                        value={password}
                        />

                    <Xstack alignin='flex-end'>
                        <ButtonSignIn bgColor={COLORS.GREEN_100} 
                        onPress={handleForgotPassword}>
                            <Text color={COLORS.ORANGE_500} >Esqueci a senha</Text>
                        </ButtonSignIn>
                    </Xstack>
                    <Button title='Acessar' bgColor={COLORS.GREEN_700} onPress={handleSignIn} borderRadius={20}/>

                    <Xstack >
                        <Text weigth='regular' color={COLORS.GRAY_700} >Não tem uma conta?</Text>
                        <ButtonSignIn bgColor={COLORS.GREEN_100} onPress={() => navigation.navigate("signUp")}>
                            <Text color={COLORS.ORANGE_500} >Criar conta</Text>
                        </ButtonSignIn>
                    </Xstack>
                </ContenteDefault>
            </ScreenDefault>
        </ScrollView>
    )
}