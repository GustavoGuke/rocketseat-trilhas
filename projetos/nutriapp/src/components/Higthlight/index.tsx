import { Container, Subtitle, Title } from "./style"

type Props = {
    title: string;
    subtitle?: string;
    bgColor?:string
    align?:string
}

const HighLight = ({title, subtitle, bgColor, align}: Props) => {
  return (
    <Container bgColor={bgColor}>
      <Title align={align}>{title}</Title>
      <Subtitle align={align}>{subtitle}</Subtitle>
    </Container>
  )
}

export default HighLight