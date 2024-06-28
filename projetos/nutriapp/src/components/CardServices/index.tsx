import { TouchableOpacity, TouchableOpacityProps, Text, ImageBackground } from "react-native";
import { Contente, Image, TitleServices, Ystack } from "./style";
import { MaterialIcons } from "@expo/vector-icons"


type Props = TouchableOpacityProps & {}
export function CardServices({ ...rest }: Props) {
    return (
        <TouchableOpacity {...rest} style={{marginBottom:5}}>
            <Contente>
                <Image
                    resizeMode="cover"
                    source={require('../../assets/img/bg-diario-alimentar.png')}
                >
                    <Ystack>
                        {/* <MaterialIcons
                        name='restaurant'
                        size={55}
                        color={"white"}
                        
                        /> */}
                        <TitleServices>Diario alimentar</TitleServices>
                        <MaterialIcons
                            name='chevron-right'
                            size={55}
                            color={"orange"}

                        />
                    </Ystack>
                </Image>
            </Contente>
        </TouchableOpacity>
    )
}