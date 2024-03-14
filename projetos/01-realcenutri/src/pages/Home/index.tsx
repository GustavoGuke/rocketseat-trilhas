import { StyleSheet } from 'react-native';
import { View, Text, Image, Button } from 'tamagui';

import PaginaBase from '../PaginaBase';
import { useNavigation } from '@react-navigation/native';
import { RootScreenNavigationProp, RootStackParamList } from '../../types/rotas';


const Home: React.FC = () => {
    const navigation = useNavigation<RootScreenNavigationProp>()
    return (
        <View style={styles.container}>
            <PaginaBase>
                <View style={styles.contentContainer}>
                    <Text style={[styles.text, styles.title]}>Realcenutri</Text>
                    <Text style={styles.text}>Mude seus Hábitos Alimentares</Text>

                    <Button style={styles.button} onPress={() => navigation.navigate('Login', {email:'teste', password:'teste'})}>
                        <Text style={styles.textoBotao}>LOGIN</Text>
                    </Button>

                    <Button style={[styles.button, styles.buttonCadastro]}>
                        <Text style={styles.textoBotao}>CADASTRO</Text>
                    </Button>
                </View>
            </PaginaBase>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3772FF',
        flex: 1,
    },
    text: {
        color: "white",
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '400',
    },
    title: {
        color: '#0beb0b',
        fontSize: 36,
        fontWeight: '700',
    },
    contentContainer: {
        paddingLeft: 56,
        paddingRight: 56,
        paddingTop: 150,
        gap: 32,
    },
    imagem: {
        alignSelf: 'center',
    },

    button: {
        borderRadius: 8,
        backgroundColor: '#65bd86', // Pode ser ajustado conforme necessário
        shadowColor: 'rgba(14, 17, 14, 0.12)',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 4, // Adiciona a elevação para sombra no Android
        padding: 10, // Pode ser ajustado conforme necessário
        width: 200,
        alignSelf: 'center',
    },
    buttonCadastro: {
        backgroundColor: '#a74ddb', // Pode ser ajustado conforme necessário
        shadowColor: 'rgba(14, 17, 14, 0.12)',
    },
    textoBotao: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Home