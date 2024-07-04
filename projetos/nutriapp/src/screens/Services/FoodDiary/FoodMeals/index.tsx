import { CardPercent } from "@components/CardPercent";
import { ScreenDefault } from "@components/ScreenDefault";
import { ContenteDefault } from "@components/ContenteDefault";
import { Title } from "@components/Title";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function FoodMeals() {
    const navigation = useNavigation<AppNavigatorRoutesProps>()
    return (
        <ScreenDefault>
            <CardPercent
                size={40}
                icon="arrow-back"
                title="90%"
                subtitle="das refeições dentro da dieta"
                onPress={() => navigation.navigate("FoodDiary")}

            />
            <ContenteDefault>
                <Title
                    padding="5"
                    weight="bold"
                    text="Estatísticas gerais" />
            </ContenteDefault>
        </ScreenDefault>

    )
}