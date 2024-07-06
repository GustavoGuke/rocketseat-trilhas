import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from "styled-components/native"

import { useNavigation } from "@react-navigation/native"
import { AppNavigatorRoutesProps } from "@routes/app.routes"

import { ScreenDefault } from "@components/ScreenDefault"
import { ContenteDefault } from "@components/ContenteDefault"
import { HeaderIcon } from "@components/HeaderIcon"
import { Button } from "@components/Button"

import { Xstack, ButtonMeal, Text } from "./style"
import HighLight from '@components/Higthlight';

export function MealDetails() {
    const { FONT_SIZE } = useTheme()
    const { COLORS } = useTheme()
    const navigation = useNavigation<AppNavigatorRoutesProps>()


    return (
        <ScreenDefault bgColor={COLORS.GREEN_200}>

            <HeaderIcon
                icon="arrow-back"
                size={40}
                bgColor={COLORS.GREEN_200}
                title="Refeição"
                sizeText={FONT_SIZE.XL}
                onPress={() => navigation.navigate("FoodDiary")}
            />
            <ContenteDefault>
               <HighLight title='Almoço' subtitle='arroz, feijao e ovo' align='end'/>
               <HighLight title='Data e hora' subtitle='arroz, feijao e ovo' align='end'/>
               <Xstack>
                    <MaterialIcons name="circle" size={14} color="green" />
                    <Text>dentro da dieta</Text>
               </Xstack>
               <ButtonMeal>
                   <MaterialIcons name="edit" size={24} color="green" />
                   <Text>Editar refeição</Text>
               </ButtonMeal>
                <ButtonMeal bgColor={COLORS.RED_MID}>
                    <MaterialIcons name="delete" size={24} color="red" />
                    <Text>Editar refeição</Text>
                </ButtonMeal>
               
            </ContenteDefault>
        </ScreenDefault>
    )
}