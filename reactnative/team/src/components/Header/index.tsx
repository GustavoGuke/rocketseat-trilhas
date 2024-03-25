import { useNavigation } from "@react-navigation/native";
import { BackButton, BackIcon, Container, Logo } from "./style";
import logoImg from '@assets/logo.png';


type Props = {
    showBackButton?: boolean
}

export default function Header({ showBackButton = false }: Props) {
    const navigation = useNavigation()
    return (
        <Container>
            {
               showBackButton &&
                <BackButton
                onPress={() => navigation.navigate("Groups")}
                >
                    <BackIcon />
                </BackButton>
            }

            <Logo source={logoImg} />
        </Container>
    );
}