import { UserPhoto } from '@components/UserPhoto'
import { YStack, XStack, Text, Heading, Button, } from 'tamagui'
import { MaterialIcons } from "@expo/vector-icons"

import userSemPhoto from "@assets/userPhotoDefault.png"

const imagem = 'https://github.com/GustavoGuke.png'

export function HomeHeader() {
    return (

        <XStack bg="$gray500" pt={96} pb={20} px={30} alignItems='center' >
            <UserPhoto size={70} src={imagem ? imagem : userSemPhoto} />
            <YStack flex={1} >
                <Text fontSize={'$2'} color="white">Olá,</Text>
                <Heading fontSize={'$4'} color="white">Gustavo</Heading>
            </YStack>
            <Button
                bg="$gray500"
                min-height={56}
                max-height={56}
                pressStyle={{ borderWidth: 0, variant: "outlined" }}
            >
                <MaterialIcons
                    name='logout'
                    size={25}
                    color={"white"}

                />
            </Button>

        </XStack>
    )
}