import { Header } from "@components/Header";
import { Container, Content } from "./styles";
import { CardPercent } from "@components/CardPercent";

export function FoodDiary(){
    return (
        <Container>
            <Header />
            <Content>

            <CardPercent title="90%" subtitle="das refeições dentro da dieta"/>
            </Content>
        </Container>
    )
}