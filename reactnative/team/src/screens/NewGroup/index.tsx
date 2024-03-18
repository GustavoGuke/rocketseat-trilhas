import Header from "@components/Header";
import { Container, Content, Icon } from "./style";
import HighLight from "@components/Higthlight";
import { Button } from "@components/Button";

export function NewGroup() {
    return (
        <Container >
            <Header showBackButton={true} />
            <Content>
                <Icon />
                <HighLight
                    title='Nova turma'
                    subtitle='crie uma turma para adicionar as pessoas' />
                <Button title='Criar' />
            </Content>
        </Container>
    )
}