import { View, TouchableOpacityProps } from "react-native";
import {  Container, Subtitle, Title } from "./style"
import { MaterialIcons } from "@expo/vector-icons"
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {
    title?: string;
    subtitle?: string;
    icon?: keyof typeof MaterialIcons.glyphMap
    size?: number
    color?: string
    bgColor?: string
    sizeText?:number
}

export function HeaderIcon({ title, subtitle, icon, size, sizeText, color = "PRIMARY", bgColor = "PRIMARY", ...rest }: Props) {
    const { COLORS } = useTheme()
    return (
        <Container bgColor={bgColor} {...rest}>

            <MaterialIcons
                name={icon}
                size={size}
                color={color === "PRIMARY" ? COLORS.GREEN_500 : COLORS.RED_MID} />
            <View style={{ flex: 1 }}>
                <Title sizeText={sizeText}>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </View>
        </Container>
    )
}
