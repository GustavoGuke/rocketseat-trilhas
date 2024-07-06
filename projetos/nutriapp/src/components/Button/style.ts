import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import theme from "@theme/index";


type Props = {
    bgColor?: string
    margin?: number
}

export const Container = styled(TouchableOpacity) <Props>`
    flex: 1;
    min-height: 46px;
    max-height: 46px;
    padding: 8px;
    background-color: ${({ theme, bgColor }: any) => bgColor || "transparent"};
    border-radius: 6px;
    border-color:${theme.COLORS.GREEN_700};;
    margin-top:${({margin}) => (margin || 20)}px;
    justify-content: center;
    align-items: center;

`

export const Title = styled.Text`
    ${({ theme }: any) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.WHITE};
    `}
    
`

export const LoadIndicator = styled.ActivityIndicator
    .attrs(() => ({
        color: theme.COLORS.WHITE
    }))``;