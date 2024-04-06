import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { TouchableOpacity } from "react-native";
import { YStack, Text, ScrollView, XStack, Heading, View } from "tamagui";

export function Profile() {
    return (
        <YStack flex={1} >
            <ScreenHeader title="Perfil" />
            <ScrollView>
                <YStack alignItems="center" justifyContent="center" marginTop={20}>
                    <UserPhoto
                        size={140}
                        src="https://github.com/GustavoGuke.png"
                    />

                    <TouchableOpacity>
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