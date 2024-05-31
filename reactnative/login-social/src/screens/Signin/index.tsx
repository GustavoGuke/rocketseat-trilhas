import { Container, Title, Slogam } from './styles';
import backgroudImage from '../../assets/background.png'
import { Button } from '../../components/Button';

export function Signin() {
    return (
        <Container source={backgroudImage}>
            <Title>Ignite Fleet</Title>
            <Slogam>Gestão de uso de veículos</Slogam>

            <Button title="Entrar" onPress={() => {console.log("teste")}}/>
        </Container>
    );
}