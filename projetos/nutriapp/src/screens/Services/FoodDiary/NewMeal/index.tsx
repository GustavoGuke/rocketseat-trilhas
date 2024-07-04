import { CardPercent } from "@components/CardPercent"
import { ScreenDefault } from "@components/ScreenDefault"
import { useNavigation } from "@react-navigation/native"
import { AppNavigatorRoutesProps } from "@routes/app.routes"
import { useTheme } from "styled-components/native"
import { StatusBar } from "react-native";
import { ContenteDefault } from "@components/ContenteDefault"


export function NewMeal(){
    const { COLORS } = useTheme()
    const navigation = useNavigation<AppNavigatorRoutesProps>()
    return (
        <ScreenDefault >
              <StatusBar barStyle="dark-content" backgroundColor={COLORS.RED_LIGHT} translucent />
            <CardPercent
                bgColor="SECONDARY"
                color="SECONDARY"
                size={40}
                icon="arrow-back"
                subtitle="das refeições dentro da dieta"
                onPress={() => navigation.navigate("FoodDiary")}

            />
            <ContenteDefault>
                
            </ContenteDefault>
        </ScreenDefault>
    )
}