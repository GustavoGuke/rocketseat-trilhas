import { XStack, YStack, Image, Heading, Text, View, ScrollView } from 'tamagui'

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
export function Signin() {
    return (
        <ScrollView

            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <XStack flex={1} bg={'$gray600'} px={16}>
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
                        fontFamily={'$body'}
                        placeholder='E-mail'
                        keyboardType='email-address'
                    />
                    <Input
                        fontFamily={'$body'}
                        placeholder='Senha'
                        secureTextEntry
                    />
                    <Button title='Acessar' />
                    <Text
                        mt={50}
                        color={'$gray200'}
                        fontSize={14}
                        fontFamily={'$body'}
                    >
                        Ainda não tem acesso?
                    </Text>
                    <Button title='Criar conta' variant='outlined' />
                </View>
            </XStack>
        </ScrollView>
    )
}