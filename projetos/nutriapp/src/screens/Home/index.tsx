import { Text } from "react-native";
import { Container, Content } from "./style";
import { Header } from "@components/Header";
import { Title } from "@components/Title";
import { useTheme } from "styled-components/native";
import { CardServices } from "@components/CardServices";


export function Home(){
    const {COLORS} = useTheme()
    return (
        <Container>
           <Header />
           <Content>
            <Title text="Serviços" color={COLORS.ORANGE_500} size={24}/>
            <CardServices />
           </Content>
        </Container>
    )
}