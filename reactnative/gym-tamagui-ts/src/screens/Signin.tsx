import { XStack, YStack, Image, Heading, Text, View } from 'tamagui'

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'
import { Input } from '@components/Input'
export function Signin() {
    return (
        <XStack flex={1} bg={'$gray600'}>
            <Image
                source={BackgroundImg}
                alt='Pessoas treinando'
                resizeMode='contain'
                position='absolute'
            />
            <View
                flex={1}
                alignItems='center'
                mt={96}
            >
                <LogoSvg />
                <Text color={'$gray100'} fontSize={14} fontFamily={'$heading'}>
                    Treine sua mente e seu corpo
                </Text>

                <Heading mt={96} color={'$gray100'} fontSize={24} fontFamily={'$heading'}>
                    Acesse sua conta
                </Heading>
                <Input
                    placeholder='E-mail'
                    keyboardType='email-address'
                />
                <Input
                    placeholder='Senha'
                    secureTextEntry
                />
            </View>
        </XStack>
    )
}