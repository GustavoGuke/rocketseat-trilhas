import { Image } from "expo-image";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
    padding: 50px 32px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    align-items: center;
    flex-direction: row;
    
`
export const Greeting = styled.View`
    flex: 1;
    margin-left: 12px;
`

export const Message = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`

export const Name = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
export const Picture = styled(Image)`
    width: 70px;
    height: 70px;
    border-radius: 35px;
`
