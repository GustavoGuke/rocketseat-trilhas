import { TouchableOpacityProps } from "react-native";
import { Container, Title, ButtonTypeStyleProps, LoadIndicator } from "./style";


type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
    isLoading?:boolean; 
}

export function Button({ title, type = 'PRIMARY', isLoading = false, ...rest }: Props) {
    return (
        <Container type={type} {...rest}>
            {isLoading? <LoadIndicator /> : <Title>{title}</Title>}
        </Container>
    )
}