import { ReactNode } from "react";
import { Container} from "./style";

type Props = {
    children: ReactNode
}
export function ScreenDefault({children }: Props) {
    return (
        <Container>
                {children}
        </Container>
    )
}