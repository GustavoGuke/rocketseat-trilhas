import {  TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Icon, Text } from "./style";
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from "styled-components";

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    //icon: string
    type?: ButtonTypeStyleProps
    title?:string

    size?: number,
    align?: string
    weight?: string
    bgColor?: string
}

export function ButtonIcon({ icon, type = 'PRIMARY', title, bgColor, weight, size, ...rest }: Props) {
    const {COLORS}= useTheme()
    return (
        <Container bgColor={bgColor} {...rest}>
            <MaterialIcons
                color={type === 'PRIMARY' ? COLORS.GREEN_700 : COLORS.RED_DARK}
                name={icon}
                type={type} 
                size={24}
                />
                <Text weight={weight} size={size}>{title}</Text>
                
        </Container>
    )
}