import styled from "styled-components/native";


type Props = {
    bgColor?: string
}

export const Container = styled.View<Props>`
    border-top-left-radius:50px;
    border-top-right-radius:50px;
    flex:1;
    padding: 24px;
    background-color: ${({ theme, bgColor }) => bgColor || theme.COLORS.WHITE};
`