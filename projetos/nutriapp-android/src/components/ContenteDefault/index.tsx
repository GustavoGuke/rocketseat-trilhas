import { ReactNode } from "react";
import { Container } from "./styles";

type Props = {
    children: ReactNode
    bgColor?:string
}
export function ContenteDefault({bgColor, children }: Props) {
    return (
        <Container bgColor={bgColor}>
            {children}
        </Container>
    )
}