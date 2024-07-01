import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GREEN_200};
`
export const Content = styled.View`
    border-top-left-radius:50px;
    border-top-right-radius:50px;
    flex:1;
    padding: 24px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`