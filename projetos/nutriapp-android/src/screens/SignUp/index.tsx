import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Content, TitleHeading } from "./style";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { TextLinearGradient } from "@components/TextLinearGradient";

import { AuthNavigationRoutesProps } from "@routes/auth.routes";


import auth from '@react-native-firebase/auth';
import { useState } from "react";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { Home } from "@screens/Home";

export function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<AppNavigatorRoutesProps>()


    function handleSignUp() {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => navigation.navigate('Home'))
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

            <Container>
                <Content>
                    <TextLinearGradient />
                </Content>
                <Content>
                    <TitleHeading>Crie sua conta</TitleHeading>
                    <Input placeholder="Nome" />
                    <Input placeholder="E-mail" 
                    value={email} onChangeText={setEmail} keyboardType="email-address" />
                    <Input placeholder="Senha" 
                    value={password} onChangeText={setPassword}
                    secureTextEntry />
                    <Input placeholder="Confirme a senha" secureTextEntry />
                    <Button title="CRIAR E ACESSAR" bgColor="green" onPress={handleSignUp}/>
                    <Button
                        onPress={() => navigation.goBack()}
                        title="VOLTAR PARA O LOGIN"
                        bgColor="green" />
                </Content>
            </Container>
        </ScrollView>
    )
}