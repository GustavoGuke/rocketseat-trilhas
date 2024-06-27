import { Text } from "react-native";
import { Container, Content } from "./style";
import { Header } from "@components/Header";

export function Home(){
    return (
        <Container>
           <Header />
           <Content></Content>
        </Container>
    )
}