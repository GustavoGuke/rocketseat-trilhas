import { UserPhoto } from '@components/UserPhoto'
import { YStack, XStack, Text, Heading, Button, } from 'tamagui'
import { MaterialIcons } from "@expo/vector-icons"

import userSemPhoto from "@assets/userPhotoDefault.png"
import { useAuth } from '@hooks/useAuth'

const imagem = ''

export function HomeHeader() {
    const {user, signOut} = useAuth()
    return (

        <XStack bg="$gray500" pt={96} pb={20} px={30} alignItems='center' >
            <UserPhoto size={70} src={user.avatar ? user.avatar : userSemPhoto} />
            <YStack flex={1} >
                <Text fontSize={'$2'} color="white">Olá,</Text>
                <Heading fontSize={'$4'} color="white" fontFamily={"$heading"}>{user.name}</Heading>
            </YStack>
            <Button
                bg="$gray500"
                min-height={56}
                max-height={56}
                pressStyle={{ borderWidth: 0, variant: "outlined" }}
                onPress={() => {signOut()}}
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