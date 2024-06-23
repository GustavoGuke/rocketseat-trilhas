import styled from "styled-components/native";

export const Container = styled.TextInput`
    flex:1;
    min-height:56px;
    max-height: 56px;

    font-size: ${(props) => props.theme.FONT_SIZE.MD}px;
    font-family:${(props) => props.theme.FONT_FAMILY.REGULAR};
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top:20px;

    border-radius: 6px;
    padding: 16px;
    
 


`