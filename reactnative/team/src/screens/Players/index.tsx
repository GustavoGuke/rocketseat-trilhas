import Header from "@components/Header";
import HighLight from "@components/Higthlight";
import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Form, HeaderList, NumbersOfPlayers } from "./style";
import Input from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList, Alert, Keyboard } from "react-native";
import { useState, useEffect } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppError } from "@utils/error/appError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playerGetByGroup } from "@storage/player/playerGetByGroup";
import { playerGetByGroupAndTeam } from "@storage/player/playerGetByGroupAndteam";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { playerRemoveByGroup } from "@storage/player/playerRemoveByGroup";
import { Button } from "@components/Button";
import { groupRemoveByName } from "@storage/group/groupRemoveByName";
import Loading from "@components/Loading";


type RouteParams = {
    group: string
}
export function Players() {
    const [isLoading, setIsLoading] = useState(true)
    const [newPlayerName, setNewPlayerName] = useState('')
    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
    const routes = useRoute()
    const navigation = useNavigation()

    const { group } = routes.params as RouteParams

    async function handleAddPlayer() {
        if (newPlayerName.trim().length === 0) {
            return Alert.alert('Nova pessoa', 'informe o nome da pessoa para adicionar')
        }
        const newPlayer = {
            name: newPlayerName,
            team
        }

        try {

            await playerAddByGroup(newPlayer, group)
            setNewPlayerName('')
            Keyboard.dismiss()
            fetchPlayers()


        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Nova pessoa', error.message)
            } else {
                Alert.alert('Nova pessoa', 'Não foi possível adicionar')
                console.log(error)
            }
        }

    }

    async function fetchPlayers() {
        try {
            setIsLoading(true)
            const playersByTeam = await playerGetByGroupAndTeam(group, team)
            setPlayers(playersByTeam)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    async function handleRemovePlayer(playerName: string) {
        try {
            await playerRemoveByGroup(playerName, group)
            fetchPlayers()
        } catch (error) {
            console.log(error)
        }
    }

    async function groupRemove() {
        try {
          //console.log('passei aqui1')
          await groupRemoveByName(group);
          navigation.navigate("Groups");
        } catch (error) {
          console.log(error);
          Alert.alert("Remover grupo", "Não foi possível remover o grupo.");
        }
      }

    async function handleGroupRemove() {
        Alert.alert("Remover", "Deseja remover o grupo?", [
            { text: "Não", style: "cancel" },
            { text: "Sim", onPress: () => groupRemove() },
          ]);
    }

    useEffect(() => {
        fetchPlayers()

    }, [team])
    return (
        <Container >
            <Header showBackButton />

            <HighLight
                title={group}
                subtitle="adicione a galera e separe os times"
            />
            <Form>
                <Input
                    value={newPlayerName}
                    placeholder="Nome"
                    onChangeText={setNewPlayerName}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType="done"
                />
                <ButtonIcon
                    icon="add"
                    onPress={handleAddPlayer}
                />
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
                <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
            </HeaderList>

            {
                isLoading ? <Loading />:
                <FlatList
                data={players}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item.name}
                        onRemove={() => handleRemovePlayer(item.name)}
                    />
                )}
                ListEmptyComponent={() => (
                    <ListEmpty
                        message="Não ha jogadores"
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[
                    { paddingBottom: 100 },
                    players.length === 0 && { flex: 1 }
                ]}
            />
            }

            <Button 
                title="Remover Turma"
                type="SECONDARY"
                onPress={handleGroupRemove}
            />

        </Container>
    )
}