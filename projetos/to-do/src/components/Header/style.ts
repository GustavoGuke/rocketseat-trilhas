import styled from "styled-components/native";


export const Container = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;

    padding-top: 70px;
    padding-bottom: 70px;

    background-color: ${props => props.theme.COLORS.GRAY_700}
`