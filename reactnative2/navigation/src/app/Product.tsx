import { ButtonIcon } from "@/components/ButtonIcon";
import { Header } from "@/components/Header";
import { Title } from "@/components/Title";
import { Text, View } from "react-native";
//import { StackRoutesProps } from "@/routes/StackRoutes";
import { BottomTabsRoutesProps } from "@/routes/BottomTabsRoutes";

//export function Product({ navigation, route }: StackRoutesProps<'Product'>) {
export function Product({ navigation }: BottomTabsRoutesProps<'Product'>) {
    //const navigation = useNavigation();
    return (
        <View style={{
            flex: 1,
            padding: 32,
            paddingTop: 64
        }}>
            <Header>
                <ButtonIcon name="arrow-circle-left" onPress={() => navigation.goBack()}/>
                <Title>Product</Title>
            </Header>
            {/* <Text>Product {route.params?.id}</Text> */}
        </View>
    )
}