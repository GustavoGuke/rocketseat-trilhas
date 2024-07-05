import { Container } from "./style";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
    minHeight?: number
    maxHeight?: number
    bgColor?: string
    color?: string
    border?:number
    margin?:number
    
}

export function Input({ 
    minHeight, 
    maxHeight, 
    bgColor, 
    color,
    border,
    margin, ...rest }: Props) {
    const { COLORS } = useTheme()
    return (
        <Container
            margin={margin}
            border={border}
            minHeight={minHeight}
            maxHeight={maxHeight}
            bgColor={bgColor}
            color={color}
            placeholderTextColor={COLORS.GRAY_400} {...rest} />
    )
}