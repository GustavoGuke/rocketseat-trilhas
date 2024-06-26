import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import { YStack, Text, ScrollView, Heading, View } from "tamagui";

import userNeverPhoto from "@assets/userPhotoDefault.png"
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

import * as FileSystem from 'expo-file-system';
import { useAuth } from "@hooks/useAuth";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";

type FormDataTypeProps = {
    name: string;
    email: string;
    old_password: string;
    password: string;
    password_confirm: string;
}
const profileSchema = yup.object({
    name: yup.string().required('Nome obrigatorio'),
    password: yup
        .string()
        .min(6, 'No minimo 6 digitos')
        .nullable()
        .transform((value) => (!!value ? value : null)),
    password_confirm: yup
        .string()
        .nullable()
        .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais')
        .transform((value) => (!!value ? value : null))
        .when('password', {
            is: (Field: any) => Field,
            then: (schema) => schema.nullable().required('Confirme a senha').transform((value) => (!!value ? value : null)),
        })

})
export function Profile() {
    const [isUpdating, setIsUpdating] = useState(false)

    const { user,updateUserProfile } = useAuth()
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataTypeProps>({
        defaultValues: {
            name: user.name,
            email: user.email
        },
        resolver: yupResolver(profileSchema)
    });

    async function handleSelectImage() {
        try {
            const photoSelected = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1
            })

            if (photoSelected.canceled) {
                return;
            }
            if (photoSelected.assets[0].uri) {
                const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri)

                if (photoInfo.exists && (photoInfo.size / 1024 / 1024) > 5) {
                    return alert("Essa imagem e muito grande. Escolha uma de ate 5MB")
                }

                const fileExtension = photoSelected.assets[0].uri.split('.').pop();

                const photoFile = {
                    name: `${user.name}.${fileExtension}`.toLowerCase(),
                    uri: photoSelected.assets[0].uri,
                    type: `${photoSelected.assets[0].type}/${fileExtension}`
                } as any
                const userPhotoUploadForm = new FormData();
                userPhotoUploadForm.append('avatar', photoFile)

                const { data } = await api.patch('/users/avatar', userPhotoUploadForm, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                alert('Foto atualizada com sucesso')

                const userUpdatedPhoto = user
                userUpdatedPhoto.avatar = data.avatar
                updateUserProfile(userUpdatedPhoto)
                
            }
        } catch (error) {
            const isAppError = error instanceof AppError
            const title = isAppError ? error.message : 'Não foi possível atualizar a foto de perfil. Tente novamente mais tarde.'
            alert(title)
            console.log(error)
        }

        //await ImagePicker.launchCameraAsync()
    }

    async function handleProfileUpdate(data: FormDataTypeProps) {
        console.log(data)
        try {
            const userUpdated = user
            userUpdated.name = data.name
            setIsUpdating(true)
            await api.put('/users', data)
            await updateUserProfile(userUpdated)
            alert('Perfil atualizado com sucesso')
            
        } catch (error) {
            const isAppError = error instanceof AppError
            const title = isAppError ? error.message : 'Não foi possível atualizar o perfil. Tente novamente mais tarde.'
            alert(title)
            console.log(error)
        } finally {
            setIsUpdating(false)
        }
    }

    return (
        <YStack flex={1} >
            <ScreenHeader title="Perfil" />
            <ScrollView>
                <YStack alignItems="center" justifyContent="center" marginTop={15}>
                    <UserPhoto
                        size={140}
                        src={user.avatar ? `${api.defaults.baseURL}/avatar/${user.avatar}` : userNeverPhoto}
                    />

                    <TouchableOpacity onPress={handleSelectImage}>
                        <Text
                            marginTop={10}
                            color="$greenClaro"
                            fontSize={"$6"}
                            fontWeight={"bold"}
                        >
                            Editar perfil
                        </Text>
                    </TouchableOpacity>

                    <View width={"100%"} padding={30}>

                        <Controller
                            control={control}
                            name="name"
                            render={({ field: { value, onChange } }) => (
                                <Input
                                    
                                    bg={"$gray400"}
                                    placeholder="Nome"
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                        />
                        <Text color={"$red500"}>
                            {errors.name?.message}
                        </Text>

                        <Controller
                            control={control}
                            name="email"
                            render={({ field: { value, onChange } }) => (
                                <Input
                                    bg={"$gray500"}
                                    placeholder="email"
                                    disabled
                                    value={value}
                                    onChangeText={onChange}
                                />
                            )}
                        />
                    </View>
                </YStack>

                <YStack padding={30} gap={5}>
                    <Heading
                        color={"$gray200"}
                        fontSize={"$5"}
                        marginBottom={-20}
                    >Alterar senha</Heading>

                    <Controller
                        control={control}
                        name="old_password"
                        render={({ field: { onChange } }) => (
                            <Input
                                bg={"$gray400"}
                                placeholder="Senha atual"
                                secureTextEntry
                                onChangeText={onChange}
                            />
                        )}
                    />


                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange } }) => (
                            <Input
                                bg={"$gray400"}
                                placeholder="Senha"
                                secureTextEntry
                                onChangeText={onChange}
                            />
                        )}
                    />

                    <Text color={"$red500"}>
                        {errors.password?.message}
                    </Text>

                    <Controller
                        control={control}
                        name="password_confirm"
                        render={({ field: { onChange } }) => (
                            <Input
                                bg={"$gray400"}
                                placeholder="Confirmar senha"
                                secureTextEntry
                                onChangeText={onChange}
                            />
                        )}
                    />

                    <Text color={"$red500"}>
                        {errors.password_confirm?.message}
                    </Text>

                    <Button
                        title="Atualizar"
                        marginTop={30}
                        onPress={handleSubmit(handleProfileUpdate)}
                    />
                </YStack>

            </ScrollView>
        </YStack>
    );
}