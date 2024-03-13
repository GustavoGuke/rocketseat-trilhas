import { FlatList } from 'react-native';
import { Container } from './styles';
import Header from '@components/Header';
import HighLight from '@components/Higthlight';
import GroupCard from '@components/GroupCard';
import { useState } from 'react';


export default function Groups() {

    const [groups, setGroups] = useState<string[]>(['Ignite', 'teste'])

    return (
        <Container>
            <Header />
            <HighLight
                title='Turmas'
                subtitle='Jogue com sua Turma vamos' />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard
                        title={item} />
                )}
            />
        </Container>
    );
}

