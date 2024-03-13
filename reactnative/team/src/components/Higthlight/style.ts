import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    margin: 32px 0;
`

export const Title = styled.Text`
    text-align: center;

    font-size: ${(props: { theme: { FONT_SIZE: { XL: any; }; }; }) => props.theme.FONT_SIZE.XL}px;
    font-family: ${(props: { theme: { FONT_FAMILY: { BOLD: any; }; }; }) => props.theme.FONT_FAMILY.BOLD};
    color: ${(props: { theme: { COLORS: { WHITE: any; }; }; }) => props.theme.COLORS.WHITE}
`

export const Subtitle = styled.Text`
    text-align: center;

    font-size: ${(props: { theme: { FONT_SIZE: { MD: any; }; }; }) => props.theme.FONT_SIZE.MD}px;
    font-family: ${(props: { theme: { FONT_FAMILY: {REGULAR: any; }; }; }) => props.theme.FONT_FAMILY.REGULAR};
    color: ${(props: { theme: { COLORS: { GRAY_300: any; }; }; }) => props.theme.COLORS.GRAY_300}
`