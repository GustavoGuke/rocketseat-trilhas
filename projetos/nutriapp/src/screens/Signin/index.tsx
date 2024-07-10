import { ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { ImageContainer, Text, Title, Xstack, Ystack } from "./style";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import { AuthNavigationRoutesProps } from "@routes/auth.routes";
import { useTheme } from 'styled-components/native';
import { ScreenDefault } from '@components/ScreenDefault';
import { ContenteDefault } from '@components/ContenteDefault';
import { TextLinearGradient } from '@components/TextLinearGradient';
import HighLight from '@components/Higthlight';


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




                    <Xstack>
                        <TouchableOpacity>
                            <Text>Esqueci a senha</Text>
                        </TouchableOpacity>
                    </Xstack>
                    <Button title='Acessar' bgColor={COLORS.GREEN_700} />

                </ContenteDefault>
            </ScreenDefault>
        </ScrollView>
    )
}