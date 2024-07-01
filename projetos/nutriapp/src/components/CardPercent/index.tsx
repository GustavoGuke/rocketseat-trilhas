import { View } from "react-native";
import { Container, Subtitle, Title } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"
import { useTheme } from "styled-components/native";

type Props = {
    title: string;
    subtitle: string;
}

export function CardPercent({title, subtitle}: Props)  {
  const {COLORS} = useTheme()
  return (
    <Container>
      <View style={{flex:1}}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </View>
        <MaterialIcons name="arrow-outward" size={24} color={COLORS.ORANGE_500}/>
    </Container>
  )
}
