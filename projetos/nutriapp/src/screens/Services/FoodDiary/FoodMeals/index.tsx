import { ContenteDefault } from "@components/ContenteDefault";
import { Title } from "@components/Title";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import HighLight from "@components/Higthlight";
import { useTheme } from "styled-components/native";
import { Container, ContainerSafe } from "./styles";

import { HeaderIcon } from "@components/HeaderIcon";

export function FoodMeals() {
    const { COLORS } = useTheme()
    const navigation = useNavigation<AppNavigatorRoutesProps>()
    return (
        <ContainerSafe bgColor={COLORS.RED_LIGHT}>        
            <HeaderIcon
                sizeText={40}
                color="SECONDARY"
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

                <HighLight
                    bgColor={COLORS.GRAY_98}
                    title="22"
                    subtitle="melhor sequncia" />

                <HighLight
                    bgColor={COLORS.GRAY_98}
                    title="22"
                    subtitle="melhor sequncia" />
                <Container>
                    <HighLight
                        bgColor={COLORS.GREEN_100}
                        title="22"
                        subtitle="melhor sequncia" />

                    <HighLight
                        bgColor={COLORS.RED_LIGHT}
                        title="22"
                        subtitle="melhor sequncia" />
                </Container>
            </ContenteDefault>
        </ContainerSafe>

    )
}