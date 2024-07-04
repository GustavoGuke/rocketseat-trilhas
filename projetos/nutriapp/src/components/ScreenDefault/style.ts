import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {
    bgColor?:string
}

export const Container = styled(SafeAreaView)<Props>`
    flex: 1;
    background-color: ${({ theme, bgColor }) => bgColor || theme.COLORS.GREEN_200};
`
