import { ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { ButtonSignIn, Text, Title, Xstack, Ystack } from "./style";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { AuthNavigationRoutesProps } from "@routes/auth.routes";
import { useTheme } from 'styled-components/native';
import { ScreenDefault } from '@components/ScreenDefault';
import { ContenteDefault } from '@components/ContenteDefault';


export function Signin() {
    const { COLORS } = useTheme()
    const navigation = useNavigation<AuthNavigationRoutesProps>()
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
                        borderColor={COLORS.GREEN_700} />

                    <Input
                        placeholder='Senha'
                        border={1}
                        bgColor={COLORS.GREEN_100}
                        borderColor={COLORS.GREEN_700} />

                    <Xstack alignin='flex-end'>
                        <ButtonSignIn bgColor={COLORS.GREEN_100} >
                            <Text color={COLORS.ORANGE_500} >Esqueci a senha</Text>
                        </ButtonSignIn>
                    </Xstack>
                    <Button title='Acessar' bgColor={COLORS.GREEN_700} />

                    <Xstack >
                        <Text weigth='regular' color={COLORS.GRAY_700} >Não tem uma conta?</Text>
                        <ButtonSignIn bgColor={COLORS.GREEN_100} onPress={()=> navigation.navigate("signUp")}>
                            <Text color={COLORS.ORANGE_500} >Criar conta</Text>
                        </ButtonSignIn>
                    </Xstack>
                </ContenteDefault>
            </ScreenDefault>
        </ScrollView>
    )
}