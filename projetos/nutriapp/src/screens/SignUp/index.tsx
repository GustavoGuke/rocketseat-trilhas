import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Container, Content,TitleHeading } from "./style";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { TextLinearGradient } from "@components/TextLinearGradient";

import { AuthNavigationRoutesProps } from "@routes/auth.routes";

export function SignUp() {
    const navigation = useNavigation<AuthNavigationRoutesProps>()
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>

            <Container>
                <Content>
                    <TextLinearGradient />
                </Content>
                <Content>
                    <TitleHeading>Crie sua conta</TitleHeading>
                    <Input placeholder="Nome" />
                    <Input placeholder="E-mail" keyboardType="email-address" />
                    <Input placeholder="Senha" secureTextEntry />
                    <Input placeholder="Confirme a senha" secureTextEntry />
                    <Button title="CRIAR E ACESSAR" />
                    <Button 
                    onPress={() => navigation.goBack()}
                    title="VOLTAR PARA O LOGIN" 
                    type="SECONDARY" />
                </Content>
            </Container>
        </ScrollView>
    )
}