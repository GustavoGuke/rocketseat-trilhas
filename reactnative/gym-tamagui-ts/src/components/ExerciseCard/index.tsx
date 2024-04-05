import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Image, YStack, XStack, Heading, Text } from 'tamagui'
import { MaterialIcons } from "@expo/vector-icons"
import img from '@assets/background.png'

type Props = TouchableOpacityProps & {
    exercise: string
}

export function ExerciseCard({exercise,...rest}: Props){
    return (
        <TouchableOpacity {...rest}>
            <XStack backgroundColor={"$gray500"} alignItems='center' padding={2} paddingRight={4} borderRadius={4} marginBottom={20}>
                <Image 
                    source={img}
                    w={76}
                    height={76}
                    borderRadius={8}
                    marginRight={8}
                />

                <YStack flex={1}>
                    <Heading color={"$gray200"} fontSize={'$7'}>{exercise}</Heading>
                    <Text color={"$gray200"} fontSize={'$3'} numberOfLines={2}>3 Séries x 17 repetições</Text>
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