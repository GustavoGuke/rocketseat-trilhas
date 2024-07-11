import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from 'styled-components/native';

import { Container, Content, TitleHeading } from "./style";

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { TextLinearGradient } from "@components/TextLinearGradient";

import { AuthNavigationRoutesProps } from "@routes/auth.routes";
import { ScreenDefault } from "@components/ScreenDefault";
import { ContenteDefault } from "@components/ContenteDefault";

export function SignUp() {
    const { COLORS } = useTheme()
    const navigation = useNavigation<AuthNavigationRoutesProps>()
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
                        borderColor={COLORS.GREEN_700} />
                    <Input
                        placeholder='Senha'
                        border={1}
                        bgColor={COLORS.GREEN_100}
                        borderColor={COLORS.GREEN_700} />
                    <Input
                        placeholder='Confirme a Senha'
                        border={1}
                        bgColor={COLORS.GREEN_100}
                        borderColor={COLORS.GREEN_700} />
                    <Button title="Acessar" bgColor="green"
                        onPress={() => { }} />
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