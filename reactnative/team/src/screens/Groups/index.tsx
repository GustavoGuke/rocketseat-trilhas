import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useState, useCallback } from 'react';


import { Container } from './styles';

import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import Header from '@components/Header';
import HighLight from '@components/Higthlight';
import GroupCard from '@components/GroupCard';
import { groupGetAll } from '@storage/group/groupGetAll';


export default function Groups() {
    const [groups, setGroups] = useState<string[]>([])

    const navigation = useNavigation()


    function handleNewGroup() {
        navigation.navigate('NewGroup')
    }

    async function fetchGroups() {
        try {
            const data = await groupGetAll()
            setGroups(data)
        } catch (error) {
            console.log(error)
        }
    }

    function handleOpenGroup(group: string) {
        navigation.navigate('Players', { group })
    }

    useFocusEffect(useCallback(() => {
        fetchGroups()
    },[]))
    return (
        <Container>
            <Header showBackButton={false}/>
            <HighLight
                title='Turmas'
                subtitle='Jogue com sua Turma vamos'     
            />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard
                        title={item} 
                        onPress={() => handleOpenGroup(item)}/>
                )}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message='Que tal cadastrar a primeira turma?'
                    />
                )}
            />

            <Button 
                title='Criar nova turma'
                onPress={handleNewGroup}
            />

            
        </Container>
    );
}

