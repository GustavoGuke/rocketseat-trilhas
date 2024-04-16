import { useCallback, useEffect, useState } from 'react'
import { FlatList } from 'react-native';
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { YStack, Text, XStack, Heading } from "tamagui";
import { ExerciseCard } from '@components/ExerciseCard';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { ExeciseDTO } from '@dtos/ExeciseDTO';
import { api } from '@services/api';
import { AppError } from '@utils/AppError';
import { Loading } from '@components/Loading';
export function Home() {
    const [isLoading, setIsLoading] = useState(true)
    const [groups, setGroups] = useState<string[]>([])
    const [exercise, setExercise] = useState<ExeciseDTO[]>([])
    const [selected, setSelected] = useState("antebraço")

    const navigation = useNavigation<AppNavigatorRoutesProps>()
    function handleOpenExerciseDetails(id: string) {
        navigation.navigate('Exercise', { exerciseId: id })
    }

    async function fetchExerciseByGroup() {
       try {
           const response = await api.get('/groups')
           setGroups(response.data)
       } catch (error) {
            const isAppError = error instanceof AppError
            const title = isAppError ? error.message : 'Não foi possível carregar os grupos. Tente novamente mais tarde.'
            alert(title)
       }
    }


    async function fetchExerciseByGroupAndExercise() {
        try {
            setIsLoading(true)
            const response = await api.get(`/exercises/bygroup/${selected}`)
            setExercise(response.data)
        } catch (error) {
            const isAppError = error instanceof AppError
            const title = isAppError ? error.message : 'Não foi possível carregar os exercicios. Tente novamente mais tarde.'
            alert(title)
        }finally {
            setIsLoading(false)
        }
    }


    useEffect(() => {
        fetchExerciseByGroup()
    }, [])

    useFocusEffect(useCallback(() => {
        fetchExerciseByGroupAndExercise()
    }, [selected]))

    return (
        <YStack flex={1} >
            <HomeHeader />
            <YStack>
                <FlatList
                    data={groups}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Group
                            name={item}
                            isActive={selected === item}
                            onPress={() => setSelected(item)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 8, marginVertical: 15, maxHeight: 45 }}

                />

            </YStack>

            {
                isLoading ? <Loading /> :
                <YStack flex={1} paddingHorizontal={15} marginVertical={15} >
                <XStack alignItems='center' justifyContent='space-between'>
                    <Heading color={"$gray200"} fontSize={'$6'}>Exercicios</Heading>
                    <Text color={"$gray200"} fontSize={'$5'}>{exercise.length}</Text>
                </XStack>


                <FlatList
                    data={exercise}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ExerciseCard 
                            onPress={() => handleOpenExerciseDetails(item.id)} exercise={item} />
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 25 }}
                />

            </YStack>}
        </YStack>
    );
}