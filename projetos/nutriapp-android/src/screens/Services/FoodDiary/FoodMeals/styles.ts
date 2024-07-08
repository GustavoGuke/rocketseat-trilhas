import { SafeAreaView } from 'react-native-safe-area-context';
import styled from "styled-components/native";

type Props = {
    bgColor?: string
}



export const ContainerSafe = styled(SafeAreaView)<Props>`
    flex: 1;
    background-color: ${({ theme, bgColor }) => bgColor || theme.COLORS.GREEN_200};
`


export const Container = styled.View<Props>`
    width:100%;
    flex-direction:row;
    gap:2px;
    background-color: ${({ theme, bgColor }) => bgColor || theme.COLORS.WHITE};
`