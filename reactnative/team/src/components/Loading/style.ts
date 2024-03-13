import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${(props: { theme: { COLORS: { GRAY_600: any; }; }; }) => props.theme.COLORS.GRAY_600}

`

export const LoadingIndicator = styled.ActivityIndicator``