import { View, TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Subtitle, Title } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { useTheme } from "styled-components/native";

type Props = TouchableOpacityProps & {
  title: string;
  subtitle: string;
  icon: keyof typeof MaterialIcons.glyphMap
  size: number
  color?: ButtonTypeStyleProps
  bgColor?: ButtonTypeStyleProps
}

export function CardPercent({ title, subtitle, icon, size, color = "PRIMARY", bgColor = "PRIMARY", ...rest }: Props) {
  const { COLORS } = useTheme()
  return (
    <Container bgColor={bgColor} {...rest}>
      <View style={{ flex: 1 }}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </View>
      <MaterialIcons
        name={icon}
        size={size}
        color={color === "PRIMARY" ? COLORS.GREEN_500 : COLORS.RED_MID} />
    </Container>
  )
}
