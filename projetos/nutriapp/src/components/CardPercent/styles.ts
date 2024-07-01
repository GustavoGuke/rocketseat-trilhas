import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    margin: 32px 0;
    background-color:${(props) => props.theme.COLORS.ESMERALDA_300};
    padding:20px;
    border-radius:6px;
`

export const Title = styled.Text`
    text-align: center;

    font-size: ${(props) => props.theme.FONT_SIZE.XL}px;
    font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
    color: ${(props) => props.theme.COLORS.GRAY_700};
`

export const Subtitle = styled.Text`
    text-align: center;
    font-size: ${(props) => props.theme.FONT_SIZE.MD}px;
    font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
    color: ${(props) => props.theme.COLORS.GRAY_500};
`