import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container } from "./style";
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from "styled-components";

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap
    check?: boolean
    //icon: string
    type?: ButtonTypeStyleProps
}

export function ButtonIcon({ icon, check, type = 'PRIMARY', ...rest }: Props) {
    const { COLORS } = useTheme()
    return (
        <Container {...rest}>
            <MaterialIcons
                color={type === 'PRIMARY' ? COLORS.GRAY_300 : COLORS.PURPLE_DARK}
                name={icon}
                type={type}
                size={24}
                {...rest}
            />
        </Container>
    )
}