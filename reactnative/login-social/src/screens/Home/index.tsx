import { CarStatus } from "../../components/Card";
import { HomeHeader } from "../../components/HomeHeader";
import { Container } from "./styles";

export function Home() {
    return (
        <Container>
            <HomeHeader />
            <CarStatus />
        </Container>
    );
}