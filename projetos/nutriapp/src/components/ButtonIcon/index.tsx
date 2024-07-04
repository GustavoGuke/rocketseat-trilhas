import {  TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Icon, Text } from "./style";
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from "styled-components";

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    //icon: string
    type?: ButtonTypeStyleProps
    title?:string
    hour?:string
    size?: number,
    align?: string
    weight?: string
    bgColor?: string
    onPress?:() => void
}

export function ButtonIcon({ icon, type = 'PRIMARY',hour, title, bgColor, weight, size, onPress, ...rest }: Props) {
    const {COLORS}= useTheme()
    return (
        <Container bgColor={bgColor} {...rest} onPress={onPress}>

            <Text weight={weight} size={size}>{hour} | {title}</Text>
            <MaterialIcons
                color={type === 'PRIMARY' ? COLORS.GREEN_600 : COLORS.RED_MID}
                name={icon}
                type={type} 
                size={24}
                />
                
        </Container>
    )
}