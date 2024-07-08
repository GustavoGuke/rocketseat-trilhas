import { TouchableOpacityProps } from "react-native";
import { Container, Title, LoadIndicator } from "./style";


type Props = TouchableOpacityProps & {
    title: string;
    bgColor?: string;
    isLoading?:boolean; 
    margin?:number
}

export function Button({ title, bgColor, margin, isLoading = false, ...rest }: Props) {
    return (
        <Container bgColor={bgColor} margin={margin}  {...rest}>
            {isLoading? <LoadIndicator /> : <Title>{title}</Title>}
        </Container>
    )
}