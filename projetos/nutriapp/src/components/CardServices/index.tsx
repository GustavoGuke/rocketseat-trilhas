import { TouchableOpacity, TouchableOpacityProps, Text, ImageBackground } from "react-native";
import { Contente, Image, TitleServices, Ystack } from "./style";
import { MaterialIcons } from "@expo/vector-icons"


type Props = TouchableOpacityProps & {}
export function CardServices({ ...rest }: Props) {
    return (
        <TouchableOpacity {...rest}>
            <Contente>
                <Ystack>
                    <TitleServices>Diario alimentar</TitleServices>
                    <MaterialIcons
                        name='restaurant'
                        size={55}
                        color={"orange"}

                    />
                </Ystack>
               
                <MaterialIcons
                    name='chevron-right'
                    size={55}
                    color={"orange"}

                />
                {/* <Image
                    resizeMode="cover"
                    source={require('../../assets/img/prato-comidaIA-removebg-sem-pano.png')}
                /> */}
            </Contente>
        </TouchableOpacity>
    )
}