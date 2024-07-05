import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
    width: 100%;
    flex-direction:row;
    align-items: center;
    justify-content:space-between;
    margin:15px 0px;
    padding-left:20px;
    padding-right:20px;
    background-color: ${({ theme }) => theme.COLORS.GREEN_200};

`

export const ContainerTitle = styled.View`
    flex-direction:column;
    
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    font-size: ${(props) => props.theme.FONT_SIZE.LG}px;
    font-family:${(props) => props.theme.FONT_FAMILY.BOLD};
`