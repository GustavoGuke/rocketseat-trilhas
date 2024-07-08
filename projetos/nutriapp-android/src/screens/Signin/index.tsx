import {  ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Container, Content, ImageContainer, TitleHeading } from "./style";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { AuthNavigationRoutesProps } from "@routes/auth.routes";

export function Signin() {
    const navigation = useNavigation<AuthNavigationRoutesProps>()
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <Container>
                <Content>
                    <ImageContainer resizeMode="contain" source={require('../../assets/img/logo-teste.png')} />
                </Content>
                <Content>

                    <TitleHeading>acessar conta</TitleHeading>
                    <Input placeholder="E-mail" keyboardType="email-address" />
                    <Input placeholder="Senha" secureTextEntry />
                    <Button title="ACESSAR" />
                    <Button
                        onPress={() => navigation.navigate("signUp")}
                        title="CRIAR CONTA" 
                        type="SECONDARY" />
                </Content>
            </Container>
        </ScrollView>
    )
}