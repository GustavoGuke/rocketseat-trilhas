import { Text } from "react-native";
import { Container, Content, ContentForm } from "./style";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Button } from "../../components/Button";


export default function Home() {
    return (
        <Container>
            <Header />
            <Content>
                <ContentForm>
                    <Input placeholder="digite sua tarefa" />
                    <Button title="+" />
                </ContentForm>

                <Text style={{ color: 'white' }}>
                    teste
                </Text>
            </Content>
        </Container>
    )
}