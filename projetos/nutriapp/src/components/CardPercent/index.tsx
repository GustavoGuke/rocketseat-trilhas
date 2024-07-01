import { Container, Subtitle, Title } from "./styles"
import { MaterialIcons } from "@expo/vector-icons"

type Props = {
    title: string;
    subtitle: string;
}

export function CardPercent({title, subtitle}: Props)  {
  return (
    <Container>
        <MaterialIcons name="arrow-outward" size={24}/>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}
