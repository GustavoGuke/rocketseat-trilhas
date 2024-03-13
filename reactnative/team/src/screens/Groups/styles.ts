import styled from "styled-components/native";



export const Container = styled.View`
    flex: 1;
    background-color: ${(props: { theme: { COLORS: { GRAY_700: any; }; }; }) => props.theme.COLORS.GRAY_700};
    padding: 24px;
`
