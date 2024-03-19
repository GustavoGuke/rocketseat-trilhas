import Header from "@components/Header";
import HighLight from "@components/Higthlight";
import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Form } from "./style";
import Input from "@components/Input";

export function Players() {
    return (
        <Container >
            <Header showBackButton />

            <HighLight
                title="Nome da Turma"
                subtitle="adicionea galera e separe os times"
            />
            <Form>
                <Input placeholder="Nome" />
                <ButtonIcon icon="home" />
            </Form>
        </Container>
    )
}