import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { TouchableOpacity } from "react-native";
import { YStack, Text, ScrollView, XStack, Heading, View } from "tamagui";

import userNeverPhoto from "@assets/userPhotoDefault.png"
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";

import * as FileSystem from 'expo-file-system';
export function Profile() {
    const [photoUser, setPhotoUser] = useState(userNeverPhoto);

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

                if (photoInfo.exists && (photoInfo.size / 1024 / 1024)> 5) {
                    return alert("Essa imagem e muito grande. Escolha uma de ate 5MB")
                }
                setPhotoUser(photoSelected.assets[0].uri)
            }
        } catch (error) {
            console.log(error)
        }
       
        //await ImagePicker.launchCameraAsync()
    }

    return (
        <YStack flex={1} >
            <ScreenHeader title="Perfil" />
            <ScrollView>
                <YStack alignItems="center" justifyContent="center" marginTop={20}>
                    <UserPhoto
                        size={140}
                        src={photoUser}
                    />

                    <TouchableOpacity onPress={handleSelectImage}>
                        <Text
                            marginBottom={20}
                            marginTop={10}
                            color="$greenClaro"
                            fontSize={"$6"}
                            fontWeight={"bold"}
                        >
                            Editar perfil
                        </Text>
                    </TouchableOpacity>

                    <View width={"100%"} padding={20}>
                        <Input
                            bg={"$gray400"}
                            placeholder="Nome"
                        />
                        <Input
                            bg={"$gray500"}
                            placeholder="Email"
                            disabled
                        />
                    </View>
                </YStack>

                <YStack padding={20}>
                    <Heading
                        color={"$gray200"}
                        fontSize={"$5"}
                        marginBottom={-20}
                    >Alterar senha</Heading>

                    <Input
                        bg={"$gray400"}
                        placeholder="Senha atual"
                        secureTextEntry
                    />
                    <Input
                        bg={"$gray400"}
                        placeholder="Senha"
                        secureTextEntry
                    />
                    <Input
                        bg={"$gray400"}
                        placeholder="Confirmar senha"
                        secureTextEntry
                    />
                    <Button title="Atualizar" marginTop={20}/>
                </YStack>

            </ScrollView>
        </YStack>
    );
}