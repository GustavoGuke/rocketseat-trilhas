import { TouchableOpacity } from "react-native";
import { useUser, useApp } from "@realm/react";
import { Container, Greeting, Message, Name, Picture } from "./styles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export function HomeHeader() {
    const user = useUser()
    const app = useApp()
    const insets = useSafeAreaInsets()
    const paddingTop = insets.top + 16
    async function handleLogout() {
        try {
            await app?.removeUser(user)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Container style={{ paddingTop }}>
            <Picture source={{ uri: user?.profile?.pictureUrl} } />
            <Greeting>
                <Message>Ola, </Message>
                <Name>{user?.profile?.name}</Name>
            </Greeting>
            <TouchableOpacity onPress={handleLogout}>
                <MaterialIcons name="power-settings-new" size={34} color="white" />
            </TouchableOpacity>
        </Container>
    );
}