import styled from "styled-components/native";

export type PropsTitle = {
    color?: string,
    size?: number
}


export const Container = styled.Text<PropsTitle>`
    color: ${({ theme, color }) => color || theme.COLORS.GRAY_700};
    font-size: ${({theme, size}) => size || theme.FONT_SIZE.LG}px;
    font-family:${(props) => props.theme.FONT_FAMILY.BOLD};
    text-align: center;
    padding-top:22px;
`