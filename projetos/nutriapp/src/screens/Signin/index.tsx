import { StatusBar, Text } from "react-native";
import { Container, Content, ImageContainer, Title, TitleHeading } from "./style";

import { Input } from "@components/Input";
import { Button } from "@components/Button";



const backgroundImg = { uri: '../../assets/img/logo-teste.png' }

export function Signin() {
    return (
        <Container>

            <ImageContainer resizeMode="contain" source={require('../../assets/img/logo-teste.png')} />
                <Content>
                    <Title>Acesse sua Conta</Title>
                    <Input placeholder="E-mail" keyboardType="email-address" />
                    <Input placeholder="Senha" secureTextEntry />
                    <Button title="ACESSAR" />
                    <TitleHeading>Ainda não tem acesso?</TitleHeading>
                    <Button title="CRIAR CONTA" type="SECONDARY"/>
                </Content>
        </Container>
    )
}