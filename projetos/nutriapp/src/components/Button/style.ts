import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import theme from "@theme/index";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
    flex: 1;
    min-height: 56px;
    max-height: 56px;

    background-color: ${({ theme, type, }: any) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.ORANGE_600};
    margin-top:20px;
    border-radius: 6px;
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