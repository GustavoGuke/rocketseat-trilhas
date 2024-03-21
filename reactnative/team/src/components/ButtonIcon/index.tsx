import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Icon } from "./style";
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from "styled-components";

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    //icon: string
    type?: ButtonTypeStyleProps
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: Props) {
    const {COLORS}= useTheme()
    return (
        <Container {...rest}>
            <MaterialIcons
                color={type === 'PRIMARY' ? COLORS.GREEN_700 : COLORS.RED_DARK}
                name={icon}
                type={type} />
        </Container>
    )
}