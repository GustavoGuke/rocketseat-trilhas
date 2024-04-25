import { HistoryCard } from "@components/HistoryCard";
import { Loading } from "@components/Loading";
import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryGroup } from "@dtos/HistoryGroup";
import { useFocusEffect } from "@react-navigation/native";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import { useCallback, useState } from "react";
import { SectionList } from "react-native";
import { YStack, Text, Heading, } from "tamagui";

export function History() {
    const [isLoading, setIsLoading] = useState(true)
    const [exercises, setExercises] = useState<HistoryGroup[]>([])

    async function fetchHistory() {
        try {
            setIsLoading(true)
            const response = await api.get('/history')
            setExercises(response.data)
        } catch (error) {
            const isAppError = error instanceof AppError
            const title = isAppError ? error.message : 'Não foi possível registrar o exercício. Tente novamente mais tarde.'
            alert(title)
        } finally {
            setIsLoading(false)
        }
    }
    console.log(isLoading)
    useFocusEffect(useCallback(() => {
        fetchHistory()
    }, []))
    return (
        <YStack flex={1} >
            <ScreenHeader title="Histórco de exercícios" />
            <YStack flex={1} padding={20}>
                {
                    isLoading ? <Loading /> :
                        <SectionList
                            sections={exercises}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => (
                                <HistoryCard data={item} />
                            )}
                            ListEmptyComponent={() => (
                                <Text
                                    color={'$gray200'}
                                    textAlign="center"
                                >
                                    Nenhum exercício encontrado</Text>
                            )}
                            renderSectionHeader={({ section }) => (
                                <Heading
                                    color={"$gray200"}
                                    fontSize={'$6'}
                                    marginTop={25}
                                    marginBottom={10}
                                >
                                    {section.title}
                                </Heading>
                            )}

                        />
                }
            </YStack>
        </YStack>
    );
}