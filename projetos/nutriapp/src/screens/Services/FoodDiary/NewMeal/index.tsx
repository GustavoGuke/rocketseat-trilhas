import { useTheme } from "styled-components/native"
import { ScreenDefault } from "@components/ScreenDefault"
import { useNavigation } from "@react-navigation/native"
import { AppNavigatorRoutesProps } from "@routes/app.routes"
import { ContenteDefault } from "@components/ContenteDefault"
import { HeaderIcon } from "@components/HeaderIcon"
import { Title } from "@components/Title"
import { Input } from "@components/Input"
import { Xstack, ButtonMeal, Text, Icon } from "./style"
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react"
import { Button } from "@components/Button"




export function NewMeal() {

    const { FONT_SIZE } = useTheme()
    const { COLORS } = useTheme()
    const navigation = useNavigation<AppNavigatorRoutesProps>()


    return (
        <ScreenDefault bgColor={COLORS.GREEN_200}>

            <HeaderIcon
                icon="arrow-back"
                size={40}
                bgColor={COLORS.GREEN_200}
                title="Nova Refeição"
                sizeText={FONT_SIZE.XL}
                onPress={() => navigation.navigate("FoodDiary")}
            />
            <ContenteDefault>
                <Title
                    color={COLORS.GRAY_300}
                    size={FONT_SIZE.SM}
                    text="Nome"
                    align="end" />
                <Input
                    margin={1}
                    bgColor={COLORS.WHITE}
                    border={1} color={COLORS.GRAY_400} />

                <Title
                    color={COLORS.GRAY_300}
                    size={FONT_SIZE.SM}
                    text="Descrição"
                    align="end" />
                <Input
                    autoComplete="additional-name"
                    textAlignVertical="top"
                    textAlign="left"
                    disableFullscreenUI
                    multiline
                    maxHeight={100}
                    margin={1}
                    bgColor={COLORS.WHITE}
                    border={1} color={COLORS.GRAY_400} />

                <Title
                    color={COLORS.GRAY_300}
                    size={FONT_SIZE.SM}
                    text="Data"
                    align="end" />
                <Xstack>
                    <Input
                        placeholder="05/07/2024"
                        margin={1}
                        bgColor={COLORS.WHITE}
                        border={1} color={COLORS.GRAY_400} />
                    <Input
                        placeholder="15:10"
                        margin={1}
                        bgColor={COLORS.WHITE}
                        border={1} color={COLORS.GRAY_400} />
                </Xstack>
                <Title
                    text="Está dentro da Dieta"
                    align="end"
                    color={COLORS.GRAY_300}
                    size={FONT_SIZE.SM}
                />
                <Xstack>
                    <ButtonMeal
                        bgColor={COLORS.GREEN_100}>
                        <MaterialIcons name="circle" size={16} color={COLORS.GREEN_700} />
                        <Text>Sim</Text>
                    </ButtonMeal>

                    <ButtonMeal
                        bgColor={COLORS.RED_MID}>
                        <MaterialIcons name="circle" size={16} color={COLORS.RED_DARK} />
                        <Text>Não</Text>
                    </ButtonMeal>
                </Xstack>
                <Button title="Cadastrar Refeição" bgColor={COLORS.GREEN_700} margin={50}/>
            </ContenteDefault>
        </ScreenDefault>
    )
}