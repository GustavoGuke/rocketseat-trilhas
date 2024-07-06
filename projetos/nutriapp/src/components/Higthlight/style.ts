import styled from "styled-components/native";

type Props = {
    bgColor?: string
}

type PropsText = {
    align?: string
}

export const Container = styled.View<Props>`
    flex:1;
    min-height: 90px;
    max-height: 90px;
    margin: 5px 0;
    padding:16px;
    border-radius:20px;
    background-color:${({theme, bgColor}) => bgColor || theme.COLORS.WHITE};
`
export const Title = styled.Text<PropsText>`
    text-align: ${(props) => props.align || "center"}; 
    font-size: ${(props) => props.theme.FONT_SIZE.XL}px;
    font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
    color: ${(props) => props.theme.COLORS.GRAY_600};
`
export const Subtitle = styled.Text<PropsText>`
    text-align: ${(props) => props.align || "center"}; 
    font-size: ${(props) => props.theme.FONT_SIZE.MD}px;
    font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
    color: ${(props) => props.theme.COLORS.GRAY_300}
`