import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps
}

type PropsText = {
    size?: number,
    align?: string
    weight?: string
}

type PropsButton = PropsText & {
    bgColor?: string
}

export const Container = styled(TouchableOpacity)<PropsButton>`
    width: 100%;
    height: 56px;
    flex-direction:row;
    justify-content: ${(props) => (props.align || "center") };
    align-items:center;
    border-radius:6px;
    gap:2px;
    margin-bottom:10px;
    padding:14px;
    background-color:${({ theme, bgColor }) => (bgColor || theme.COLORS.ORANGE_300)};
`

export const Text = styled.Text<PropsText>`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${(props) => (props.size || 50) / 2.5}px;
  font-weight: ${(props) => (props.weight || props.theme.FONT_FAMILY.REGULAR) };
  text-align: ${(props) => (props.align || "center") };
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }: any) => ({
    size: 32,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_200 : theme.COLORS.RED_MID
}))