import styled from "styled-components/native";

export type PropsTitle = {
    color?: string,
    size?: number,
    align?:string,
    padding?:string,
    weight?:string
}


export const Container = styled.Text<PropsTitle>`
    color: ${({ theme, color }) => color || theme.COLORS.GRAY_700};
    font-size: ${({theme, size}) => size || theme.FONT_SIZE.LG}px;
    font-family:${({ theme, weight }) => weight === "regular" ? theme.FONT_FAMILY.REGULAR : theme.FONT_FAMILY.BOLD};
    text-align: ${({align}) => align ||"center"};
    padding-top:${({ padding }) => padding || 22}px;
`