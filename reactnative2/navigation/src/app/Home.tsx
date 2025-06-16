import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/routes/StackRoutes";

// rota com native-stack
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export function Home({navigation}: HomeProps) {
    //const navigation = useNavigation();

    return (
        <View style={{
            flex: 1,
            padding: 32,
            paddingTop: 64
        }}>
            <Header>
                <Title>Home</Title>
                <ButtonIcon name="add-circle" onPress={() => navigation.navigate('Product')}/>
            </Header>
        </View>
    )
}