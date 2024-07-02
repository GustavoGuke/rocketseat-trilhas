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
export const Content = styled.View`
    border-top-left-radius:50px;
    border-top-right-radius:50px;
    flex:1;
    padding: 24px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Text = styled.Text<Props>`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${(props) => (props.size || 50) / 2.5}px;
  font-weight: ${(props) => (props.weight || props.theme.FONT_FAMILY.REGULAR) };
  text-align: ${(props) => (props.align || "center") };
  margin-top:20px;
`;