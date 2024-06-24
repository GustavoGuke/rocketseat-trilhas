import { StatusBar, Text } from "react-native";
import { Container, Content, ImageContainer, Title, TitleHeading } from "./style";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { TextLinearGradient } from "@components/TextLinearGradient";

import { View, ScrollView } from 'react-native'

const backgroundImg = { uri: '../../assets/img/logo-teste.png' }

export function Signin() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>

            <Container>
                <Content>
                    <TextLinearGradient />
                    <ImageContainer resizeMode="contain" source={require('../../assets/img/logo-teste.png')} />
                </Content>
                <Content>

                    <TitleHeading>acessar conta</TitleHeading>
                    <Input placeholder="E-mail" keyboardType="email-address" />
                    <Input placeholder="Senha" secureTextEntry />
                    <Button title="ACESSAR" />
                    <Button title="CRIAR CONTA" type="SECONDARY" />
                </Content>
            </Container>
        </ScrollView>
    )
}