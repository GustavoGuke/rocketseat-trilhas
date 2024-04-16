import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Image, YStack, XStack, Heading, Text } from 'tamagui'
import { MaterialIcons } from "@expo/vector-icons"
import { ExeciseDTO } from '@dtos/ExeciseDTO'

type Props = TouchableOpacityProps & {
    exercise: ExeciseDTO
}
import { api } from '@services/api'

export function ExerciseCard({exercise,...rest}: Props){
    return (
        <TouchableOpacity {...rest}>
            <XStack backgroundColor={"$gray500"} alignItems='center' padding={2} paddingRight={4} borderRadius={4} marginBottom={20}>
                <Image 
                    source={{uri: `${api.defaults.baseURL}/exercise/thumb/${exercise.thumb}`}}
                    w={76}
                    height={76}
                    borderRadius={8}
                    marginRight={8}
                    resizeMode='cover'
                />

                <YStack flex={1}>
                    <Heading color={"$gray200"} fontSize={'$7'}>{exercise.name}</Heading>
                    <Text color={"$gray200"} fontSize={'$3'} numberOfLines={2}>{exercise.series} series x {exercise.repetitions} repetições</Text>
                </YStack>

                <MaterialIcons
                    name='chevron-right'
                    size={25}
                    color={"white"}

                />
            </XStack>
        </TouchableOpacity>
    )
}