import { useNavigation } from '@react-navigation/native'
import { AuthNavigationRoutesProps } from '@routes/auth.routes'

import { XStack, Image, Heading, Text, View, ScrollView } from 'tamagui'

import LogoSvg from '@assets/logo.svg'
import BackgroundImg from '@assets/background.png'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { api } from '@services/api'

import { Alert } from 'react-native'
import { AppError } from '@utils/AppError'

type FormDataTypeProps = {
    name: string
    email: string
    password: string
    password_confirm: string
}

const schema = yup
    .object({
        name: yup.string().required('nome é obrigatorio'),
        email: yup.string().required('Informe o email').email('E-mail inválido'),
        password: yup.string().required('Informe a senha').min(6, 'A senha deve ter pelo menos 6 caracteres'),
        password_confirm: yup.string().required('Confirme a senha').oneOf([yup.ref('password')], 'A senha não batem')
    })

export function SignUp() {
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataTypeProps>({
        resolver: yupResolver(schema)
    })
    const navigation = useNavigation<AuthNavigationRoutesProps>()


    async function handleSignUp({ name, email, password }: FormDataTypeProps) {

        try {
            const response = await api.post('/users', { name, email, password })
            console.log(response.data)
        } catch (error) {
            const isAppError = error instanceof AppError
            const title = isAppError ? error.message : "Não foi possivel criar a conta"

            Alert.alert('Erro', title)

            // if(axios.isAxiosError(error)) {
            //     Alert.alert('Erro', error.response?.data.message)
            // }
        }


        // fetch('http://192.168.18.7:3333/users', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         name,
        //         email,
        //         password
        //     })
        // })
        //     .then((response) => response.json())
        //     .then((json) => console.log(json))
        //     .catch((error) => console.error(error))

    }

    return (
        <ScrollView

            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
        >
            <XStack flex={1} bg={'$gray600'} px={40}>
                <Image
                    source={BackgroundImg}
                    defaultSource={BackgroundImg}
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
                        Crie sua conta
                    </Heading>

                    <Controller
                        control={control}
                        name='name'
                        render={({ field: { onChange, value } }) => (
                            <Input
                                fontFamily={'$body'}
                                placeholder='Nome'
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />

                    <Text color={"$red500"}>
                        {errors.name?.message}
                    </Text>

                    <Controller
                        control={control}
                        name='email'
                        render={({ field: { onChange, value } }) => (
                            <Input
                                fontFamily={'$body'}
                                placeholder='E-mail'
                                keyboardType='email-address'
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />

                    <Text color={"$red500"}>
                        {errors.email?.message}
                    </Text>

                    <Controller
                        control={control}
                        name='password'
                        render={({ field: { onChange, value } }) => (
                            <Input
                                fontFamily={'$body'}
                                placeholder='Senha'
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                            />

                        )}
                    />

                    <Text color={"$red500"}>
                        {errors.password?.message}
                    </Text>
                    <Controller
                        control={control}
                        name='password_confirm'
                        render={({ field: { onChange, value } }) => (
                            <Input
                                fontFamily={'$body'}
                                placeholder='Confirme sua senha'
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                                onSubmitEditing={handleSubmit(handleSignUp)}
                                returnKeyType='send'
                            />
                        )}
                    />
                    <Text color={"$red500"}>
                        {errors.password_confirm?.message}
                    </Text>

                    <Button
                        title='Criar e Acessar'
                        onPress={handleSubmit(handleSignUp)}

                    />

                    <Button
                        mt={44}
                        title='Voltar para o login'
                        variant='outlined'
                        onPress={() => navigation.goBack()}
                    />
                </View>
            </XStack>
        </ScrollView>
    )
}