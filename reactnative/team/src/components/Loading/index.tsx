import { Text } from "react-native"
import { Container, LoadingIndicator } from "./style"

const Loading = () => {
  return (
    <Container>
        <LoadingIndicator color={`${(props: { theme: { COLORS: { GRAY_400: any } } }) => props.theme.COLORS.GRAY_400}`} size="50"/>
    </Container>
  )
}

export default Loading