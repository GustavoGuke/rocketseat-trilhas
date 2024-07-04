import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'

type Props = {
    size?: number,
    align?: string
    weight?: string
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GREEN_200};
`
