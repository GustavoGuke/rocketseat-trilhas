import styled from "styled-components/native";

type PropsStyleInput = {
    minHeight?:number
    maxHeight?:number
    bgColor?: string
    color?:string
    border?:number
    borderColor?:string
    margin?:number
}

export const Container = styled.TextInput<PropsStyleInput>`
    flex:1;
    min-height:${({minHeight}) => minHeight || 46 }px;
    max-height: ${({maxHeight}) => maxHeight || 46 }px;

    font-size: ${(props) => props.theme.FONT_SIZE.MD}px;
    font-family:${(props) => props.theme.FONT_FAMILY.REGULAR};
    background-color: ${({ theme, bgColor }) => bgColor || theme.COLORS.GRAY_400};
    color: ${({ theme, color }) => color || theme.COLORS.GRAY_400};
    margin-top:${({margin}) => margin || 20 }px;
    border:${({border}) => border || 0 }px;
    border-color:${({borderColor, theme}) => borderColor || theme.COLORS.WHITE};
    border-radius: 6px;
    padding: 8px;
`