import { Image } from "react-native";
import { Container } from "./style";

import Logo from "../../assets/Logo.png" 

export default function Header() {
    return (
        <Container>
            <Image source={Logo} />
        </Container>
    )
}