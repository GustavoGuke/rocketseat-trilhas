import { Container, Subtitle, Title } from "./style"

type Props = {
    title: string;
    subtitle: string;
    bgColor?:string
}

const HighLight = ({title, subtitle, bgColor}: Props) => {
  return (
    <Container bgColor={bgColor}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
    </Container>
  )
}

export default HighLight