import { useState } from "react";
import { Alert } from "react-native";
import Header from "@components/Header";
import { Container, Content, Icon } from "./style";
import HighLight from "@components/Higthlight";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";
import Input from "@components/Input";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/error/appError";

export function NewGroup() {
    const [groupName, setGroupName] = useState('')
    const navigation = useNavigation()

    async function handleNewPlayer() {
        try {

            if (groupName.trim().length === 0) {
                return Alert.alert('Nova Turma', 'informe o nome da turma')
            }

            await groupCreate(groupName.trim())
            navigation.navigate('Players', { group: groupName })
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert( 'Nova Turma', error.message)
            } else {
                Alert.alert('Nova Turma', 'Não foi possível criar a turma')
                console.log(error)
            }
        }
    }
    return (
        <Container >
            <Header showBackButton={true} />
            <Content>
                <Icon />
                <HighLight
                    title='Nova turma'
                    subtitle='crie uma turma para adicionar as pessoas' />
                <Input 
                    placeholder='Nome da turma'
                    onChangeText={setGroupName}
                />
                <Button
                    style={{ marginTop: 20 }}
                    onPress={handleNewPlayer}
                    title='Criar' />
            </Content>
        </Container>
    )
}