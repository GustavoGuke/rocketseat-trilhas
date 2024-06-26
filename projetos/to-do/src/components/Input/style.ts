import { TextInput } from "react-native";
import styled from "styled-components";

export const Container = styled(TextInput)`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    background-color: ${props => props.theme.COLORS.GRAY_500};
    color: ${props => props.theme.COLORS.GRAY_300};
    
    font-family: ${props => props.theme.FONT_FAMILY.REGULAR};
    font-size: ${props => props.theme.FONT_SIZE.LG}px;

    border-radius: 6px;
    padding: 16px;

`