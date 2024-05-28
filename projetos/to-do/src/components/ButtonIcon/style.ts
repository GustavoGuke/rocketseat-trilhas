import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
    width: 56px;
    height: 56px;

    justify-content: center;
    align-items: center;
    margin-left: 12px;

`
export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }: any) => ({
    size: 32,
    color: type === 'PRIMARY' ? theme.COLORS.GRAY_300 : theme.COLORS.PURPLE_DARK,
}))`
    
`