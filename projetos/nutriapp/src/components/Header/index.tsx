import Avatar from "@components/Avatar";
import { Container, ContainerTitle, Title } from "./style";
import { ScreenDefault } from "@components/ScreenDefault";

import backgroundImage from '../../assets/img/prato-comidaIA.png';

export function Header(){
    return (
        <Container >
            <ContainerTitle>
                <Title>Relace</Title>
                <Title>Nutri</Title>
            </ContainerTitle>
            <Avatar size={50}  imageUri={backgroundImage}/>
        </Container >
    )
}