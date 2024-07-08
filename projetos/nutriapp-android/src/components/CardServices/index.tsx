import { TouchableOpacity, TouchableOpacityProps, ImageSourcePropType} from "react-native";
import { Contente, Image, TitleServices, Ystack } from "./style";
import { MaterialIcons } from "@expo/vector-icons"


type Props = TouchableOpacityProps & {
    title: string,
    imgBackground?: ImageSourcePropType,

}
export function CardServices({ title, imgBackground, ...rest }: Props) {
    return (
        <TouchableOpacity {...rest} style={{ marginBottom: 5 }}>
            <Contente>
                {imgBackground ?
                    <Image
                        borderRadius={20}
                        resizeMode="cover"
                        source={imgBackground}
                        
                    >
                        <Ystack>
                            {/* <MaterialIcons
                        name='restaurant'
                        size={55}
                        color={"white"}
                        
                        /> */}
                            <TitleServices >{title}</TitleServices>
                            <MaterialIcons
                                name='chevron-right'
                                size={55}
                                color={"orange"}

                            />
                        </Ystack>
                    </Image> :

                    <Ystack>
                        {/* <MaterialIcons
                        name='restaurant'
                        size={55}
                        color={"white"}
                        
                        /> */}
                        <TitleServices >{title}</TitleServices>
                        <MaterialIcons
                            name='chevron-right'
                            size={55}
                            color={"orange"}

                        />
                    </Ystack>
                }
            </Contente>
        </TouchableOpacity>
    )
}