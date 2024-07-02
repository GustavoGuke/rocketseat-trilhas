import { Header } from "@components/Header";
import { Container, Content, Text } from "./styles";
import { CardPercent } from "@components/CardPercent";

export function FoodDiary() {
    return (
        <Container>
            <Header />
            <Content>
                <CardPercent title="90%" subtitle="das refeições dentro da dieta" />
                <Text align="flex-end" size={40}>Refeições</Text>
            </Content>
        </Container>
    )
}