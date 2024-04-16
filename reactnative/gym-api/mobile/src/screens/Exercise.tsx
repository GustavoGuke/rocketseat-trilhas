import { YStack, Text, XStack, Heading, Image, ScrollView } from "tamagui";
import { MaterialIcons } from "@expo/vector-icons"
import { useNavigation, useRoute } from "@react-navigation/native";

import img from '@assets/background.png'
import BodySvg from "@assets/body.svg"
import SeriesSvg from "@assets/series.svg"
import RepetitionsSvg from "@assets/repetitions.svg"

import { Button } from "@components/Button";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";
import { ExeciseDTO } from "@dtos/ExeciseDTO";
import { useEffect, useState } from "react";
import { Loading } from "@components/Loading";


type RouteProps = {
    exerciseId: string
}
export function Exercise() {
    const [exercise, setExercise] = useState<ExeciseDTO>({} as ExeciseDTO)
    const [isLoading, setIsLoading] = useState(true)
    const route = useRoute()
    const { exerciseId } = route.params as RouteProps
    const navigation = useNavigation()

    async function fetchExerciseDetails() {
        try {
            setIsLoading(true)
            const response = await api.get(`/exercises/${exerciseId}`)
            setExercise(response.data)
        } catch (error) {
            const isAppError = error instanceof AppError
            const title = isAppError ? error.message : 'Não foi possível carregar os exercicios. Tente novamente mais tarde.'
            alert(title)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchExerciseDetails()
    }, [exerciseId])
    return (
        <YStack flex={1}>
            <YStack
                paddingTop={70}
                paddingHorizontal={15}

                bg={'$gray500'}
            >
                <MaterialIcons
                    name="arrow-back"
                    size={36}
                    color="green"
                    onPress={() => navigation.goBack()}
                />

                <XStack
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    marginVertical={15}
                >
                    <Heading
                        color={'$white'}
                        fontSize={'$7'}
                        flexShrink={1}
                    >{exercise.name}</Heading>

                    <XStack>
                        <BodySvg />
                        <Text
                            marginLeft={5}
                            color={'$gray200'}
                            fontSize={'$2'}
                            numberOfLines={1}
                            textTransform="capitalize"
                        >{exercise.group}</Text>
                    </XStack>
                </XStack>
            </YStack>
            {
                isLoading ? <Loading /> :
                    <ScrollView>
                        <YStack padding={20}>
                            <YStack
                                mb={3}
                                overflow="hidden"
                                borderRadius={20}
                            >
                                <Image
                                    source={{ uri: `${api.defaults.baseURL}/exercise/demo/${exercise.demo}` }}
                                    w={"100%"}
                                    h={350}
                                    borderRadius={20}
                                    marginRight={8}
                                    resizeMode="cover"
                                    mb={20}
                                />
                            </YStack>
                            <YStack
                                borderRadius={8}
                                backgroundColor={"$gray500"}
                                padding={20}>
                                <XStack alignItems="center" justifyContent="space-between">
                                    <XStack>
                                        <SeriesSvg />
                                        <Text color={"$gray200"} marginLeft={5}>{exercise.series} Seção</Text>
                                    </XStack>
                                    <XStack>
                                        <RepetitionsSvg />
                                        <Text color={"$gray200"} marginLeft={5}>{exercise.repetitions} Repetição</Text>
                                    </XStack>

                                </XStack>
                                <Button title="Adicionar repetições" />
                            </YStack>
                        </YStack>
                    </ScrollView>
            }
        </YStack>
    );
}