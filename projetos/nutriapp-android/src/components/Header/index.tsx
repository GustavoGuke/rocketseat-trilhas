import Avatar from "@components/Avatar";
import { Container, ContainerTitle, Title } from "./style";
import auth from '@react-native-firebase/auth';

import backgroundImage from '../../assets/img/prato-comidaIA.png';
import { TouchableOpacity, Text } from "react-native";

export function Header(){
    const user = auth().currentUser;
    console.log(user)
    function handleSignOut() {
        auth()
            .signOut()
            .catch(error => console.log(error));
    }
    return (
        <Container >
            <ContainerTitle>
                <Avatar size={30} imageUri={backgroundImage} />
                <Text>{user?.displayName}</Text>
                
            </ContainerTitle>
            
            <TouchableOpacity onPress={handleSignOut}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </Container >
    )
}