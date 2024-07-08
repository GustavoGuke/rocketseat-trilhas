import Avatar from "@components/Avatar";
import { ButtonIcon } from "@components/ButtonIcon";
import { ContenteDefault } from "@components/ContenteDefault";
import { HeaderIcon } from "@components/HeaderIcon";
import { ScreenDefault } from "@components/ScreenDefault";
import { Title } from "@components/Title";
import {  TouchableOpacity } from "react-native";
import { Button, Xstack, Text, } from "./style";
import { MaterialIcons } from "@expo/vector-icons";

export function Profile() {
    return (
        <ScreenDefault>
            <HeaderIcon title="Perfil" />
            <ContenteDefault >
                <Xstack>
                    <Avatar size={100} />
                    <Button bgColor="white">
                        <MaterialIcons name="camera-alt" size={24} color="black" />
                        <Text >Alterar foto</Text>
                    </Button>
                </Xstack>


                <Button>
                    <MaterialIcons name="person-pin" size={24} color="black"/>
                    <Text>Dados Pessoais</Text>
                </Button>

                <Button>
                    <MaterialIcons name="manage-accounts" size={24} color="black" />
                    <Text>Dados de acesso</Text>
                </Button>

                <Button>
                    <MaterialIcons name="wallet-membership" size={24} color="black" />
                    <Text>Assinatura</Text>
                </Button>
            </ContenteDefault>
        </ScreenDefault>
    )
}