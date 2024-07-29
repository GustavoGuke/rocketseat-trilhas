import { useNavigation } from "@react-navigation/native";
import { CarStatus } from "../../components/Card";
import { HomeHeader } from "../../components/HomeHeader";
import { Container, Content } from "./styles";

export function Home() {
    const navigate = useNavigation();
    function handleRegisterMoviment() {
        navigate.navigate("Departure")
    }

    return (
        <Container>
            <HomeHeader />
            <Content>
                <CarStatus licensePlate="ABC-1234" onPress={handleRegisterMoviment}/>
            </Content>
        </Container>
    );
}