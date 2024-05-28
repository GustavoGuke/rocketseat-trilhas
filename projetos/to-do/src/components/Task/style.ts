import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    background-color: ${props => props.theme.COLORS.GRAY_400};
    border-radius: 6px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
`

export const TextTask = styled.Text<{$checkedStyle?: boolean;}>`
    flex:1;
    text-decoration: ${ props => props.$checkedStyle ? 'line-through': 'none'};
    color: ${props => props.theme.COLORS.GRAY_100} ;
    font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
    font-size: ${props => props.theme.FONT_SIZE.MD}px;
`