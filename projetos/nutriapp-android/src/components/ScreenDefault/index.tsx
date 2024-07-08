import { ReactNode } from "react";
import { Container} from "./style";

type Props = {
    bgColor?:string
    children: ReactNode
}
export function ScreenDefault({children, bgColor }: Props) {
    return (
        <Container bgColor={bgColor}>
                {children}
        </Container>
    )
}