import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.COLORS.GRAY_600};
`

export const Content = styled.View`
    padding:24px;
`

export const ContentForm = styled.View`
    width: 100%;
    flex-direction:row;
    margin-Top: -50px;
    margin-Bottom: 32px;
`