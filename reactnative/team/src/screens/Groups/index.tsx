import { FlatList } from 'react-native';
import { Container } from './styles';
import Header from '@components/Header';
import HighLight from '@components/Higthlight';
import GroupCard from '@components/GroupCard';
import { useState } from 'react';
import { ListEmpty } from '@components/ListEmpty';


export default function Groups() {

    const [groups, setGroups] = useState<string[]>([])

    return (
        <Container>
            <Header />
            <HighLight
                title='Turmas'
                subtitle='Jogue com sua Turma vamos'     
            />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard
                        title={item} />
                )}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message='Que tal cadastrar a primeira turma?'
                    />
                )}
            />
        </Container>
    );
}

