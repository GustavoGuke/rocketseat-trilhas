import { Alert, FlatList } from "react-native";
import { Container, Content, ContentForm, HeaderList, TextHeader } from "./style";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Button } from "../../components/Button";

import { useState } from "react";
import { Task } from "../../components/Task";
import * as Crypto from 'expo-crypto';
import { ListEmpty } from "../../components/ListEmpty";

type TaskProps = {
    id: string
    task: string
    checked: boolean
}

export default function Home() {
    const [inputNewTask, setInputNewTask] = useState('')
    const [tasks, setTasks] = useState<TaskProps[]>([])

    function handleTaskAdd() {
        if (inputNewTask === "") {
            return Alert.alert("tarefa Vazia")
        }

        const newTaskWithId = {
            id: Crypto.randomUUID(),
            task: inputNewTask,
            checked: false,
        }
        setTasks(prevState => [...prevState, newTaskWithId])
       setInputNewTask('')
    }

    function handleRemove(item: TaskProps) {  
        Alert.alert("Tarefa", `Remover tarefa: ${item.task}?`, [
            {
                text: 'sim',
                onPress: () => setTasks((check) => (
                   check.filter(taskDel => taskDel.id != item.id)
                ))
            },
            {
                text: 'não',
                style: 'cancel',
            }
        ])
    }
    function handleCheckedTask(item: TaskProps) {
        const checkTask = tasks.find(check => check.id === item.id) 
        
        Alert.alert("Tarefa", `marcar como feito ${item.task}?`, [
            {
                text: 'sim',
                onPress: () => setTasks((check) => (
                    check.map( taskId => {
                        if(checkTask){
                            checkTask.checked = true
                        }
                        return taskId
                    })
                ))
            },
            {
                text: 'não',
                style: 'cancel',

            }
        ])
       
    }

    return (
        <Container>
            <Header />
            <Content>
                <ContentForm>
                    <Input
                        placeholder="digite sua tarefa"
                        value={inputNewTask}
                        onChangeText={setInputNewTask}
                    />
                    <Button
                        title="+"
                        onPress={handleTaskAdd}
                    />
                </ContentForm>
                { 
                    !tasks.length == 0 &&
                    <HeaderList>
                        <TextHeader
                            $headerText
                        >
                            Criadas  {tasks.length}
                        </TextHeader>
                        <TextHeader>
                            Finalizadas  {
                                tasks.reduce((acumulador, valueTask) => acumulador + valueTask.checked, 0)
                            }
                        </TextHeader>
                    </HeaderList>
                }
                <FlatList
                    data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Task
                        onRemove={() => handleRemove(item)}
                        onChecked={() => handleCheckedTask(item)}
                        key={item.id}
                        task={item.task}
                        checked={item.checked}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <ListEmpty message="Nenhuma Tarefa criada"/>
                        
                    )}
                    contentContainerStyle={[
                        { paddingBottom: 100, }
                        
                    ]}
                    
                />
            </Content>
        </Container>
    )
}