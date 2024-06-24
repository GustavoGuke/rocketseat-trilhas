import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import theme from "@theme/index";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
    flex: 1;
    min-height: 46px;
    max-height: 46px;

    background-color: ${({ theme, type, }: any) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : "transparent"};
    border-radius: 6px;
    border-width:  ${({ type }: any) => type === 'SECONDARY' ? "1px" : "0"};
    border-color:${theme.COLORS.GREEN_700};;
    margin-top:20px;
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