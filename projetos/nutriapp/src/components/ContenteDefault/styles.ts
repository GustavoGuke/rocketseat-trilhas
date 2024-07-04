import styled from "styled-components/native";

export const Container = styled.View`
    border-top-left-radius:50px;
    border-top-right-radius:50px;
    flex:1;
    padding: 24px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`