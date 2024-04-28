import { TouchableOpacity } from 'react-native';
import { Container, LoadIndicator, Title } from './styles';

type Props = TouchableOpacity & {
    title: string;
    isLoading?: boolean;
    onPress: () => void;
}

export function Button({ title, isLoading = false, onPress, ...rest }: Props) {
    return (
        <Container
            activeOpacity={0.7}
            disabled={isLoading}
            onPress={onPress}
            {...rest}
        >
            {isLoading ? <LoadIndicator /> : <Title>{title}</Title>}
        </Container>
    );
}