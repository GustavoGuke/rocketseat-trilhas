import { Text } from "react-native";
import { Container } from "./style";
import Header from "../../components/Header";

export default function Home(){
    return(
        <Container>
            <Header />
            <Text style={{color: 'white'}}>
                teste
            </Text>
        </Container>
    )
}