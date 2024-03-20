import Header from "@components/Header";
import HighLight from "@components/Higthlight";
import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Form, HeaderList } from "./style";
import Input from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";

export function Players() {
    const [team, setTeam] = useState('Time A')
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

            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B', 'Time C']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                            title={item} />
                    )}
                    horizontal
                />
            </HeaderList>

        </Container>
    )
}