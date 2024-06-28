import { Container, PropsTitle } from "./style";

type Props = PropsTitle & {
    text: string
}

export function Title({text, ...rest}: Props){
    return(
        <Container {...rest}>{text}</Container>
    )
}