import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { View } from "react-native";


import { StackRoutesProps } from "@/routes/StackRoutes";

// rota com native-stack
//type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export function Home({navigation}: StackRoutesProps<'Home'>) {
    //const navigation = useNavigation();

    return (
        <View style={{
            flex: 1,
            padding: 32,
            paddingTop: 64
        }}>
            <Header>
                <Title>Home</Title>
                <ButtonIcon name="add-circle" onPress={() => navigation.navigate('Product', {id: '1'})}/>
            </Header>
        </View>
    )
}