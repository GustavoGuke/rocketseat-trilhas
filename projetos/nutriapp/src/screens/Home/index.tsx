import { Text } from "react-native";
import { Container, Content } from "./style";
import { Header } from "@components/Header";
import { Title } from "@components/Title";
import { useTheme } from "styled-components/native";
import { CardServices } from "@components/CardServices";

import backgroundImg  from "../../assets/img/bg-diario-alimentar.png"

export function Home(){
    const {COLORS} = useTheme()
    return (
        <Container>
           <Header />
           <Content>
            <Title text="Serviços" color={COLORS.ORANGE_500} size={24}/>
            <CardServices title="Diário Alimentar" imgBackground={backgroundImg}/>
            
           </Content>
        </Container>
    )
}