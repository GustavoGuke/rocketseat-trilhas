//import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, TouchableOpacity, View, ScrollView, FlatList, Alert } from 'react-native';
import { styles } from './style';

import { Participant } from '../components/Participant';
import { useState } from 'react';

export default function Home() {
    const [participants, setParticipants] = useState<string[]>([''])
    const [participantsName, setParticipantsName] = useState('')
    function handleParticipantAdd(){
        if(participants.includes(participantsName)){
           return Alert.alert("Nome duplicados", "Não podem haver duplicidades nos partipants")
        }
        if(participantsName === ""){
            return Alert.alert("Nome vazio")
        }
        setParticipants(prevState => [...prevState, participantsName])
        setParticipantsName('')
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: 'sim',
                onPress:() => setParticipants((deleteName) => (
                    deleteName.filter(nameDel => nameDel != name)
                ))
            },
            {
                text: 'não',
                style: 'cancel',

            }
        ])
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.evento}>Nome do evento</Text>
            <Text style={{
                color: '#6b6b6b',
                fontSize: 16
            }}
            >termino do curso ReactNative</Text>

             <View style={styles.form}>  
                <TextInput 
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor={'#6b6b6b'}
                    onChangeText={text => setParticipantsName(text)}
                    value={participantsName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>
                        +
                    </Text>
                </TouchableOpacity>
        
            </View> 

            <FlatList 
                data={participants}
                keyExtractor = {item => item}
                renderItem = {( {item} ) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.buttonText}>
                        Ninguém marcou presença no evento
                    </Text>
                )}
            />

            {/* <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participants.map(participant => (
                        <Participant 
                        key={participant}
                        name={participant}
                        onRemove={handleParticipantRemove}/>
                    ))
                }
            </ScrollView> */}
        </View>
    );
}