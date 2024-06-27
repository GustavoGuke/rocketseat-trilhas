import Avatar from "@components/Avatar";
import { Container, ContainerTitle, Title } from "./style";

export function Header(){
    return (
        <Container>
            <ContainerTitle>
                <Title>Relace</Title>
                <Title>Nutri</Title>
            </ContainerTitle>
            <Avatar size={50} initials="RN"/>
        </Container>
    )
}