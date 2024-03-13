import { Container, Icon, Title } from "./style";
import { TouchableOpacityProps } from "react-native";
type Props = TouchableOpacityProps & {
    title: string
}

const GroupCard = ({title, ...rest}: Props) => {
  return (
    <Container>
        <Icon />
        <Title>{title}</Title>
    </Container>
  )
}

export default GroupCard