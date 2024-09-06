import { Alert, Image, Text, View } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import {  PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/formatCurrency";
import Button from "@/components/Button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/Link-Button";
import { ProductCartProps, useCartStore } from "@/stores/cart-store";


export default function Product() {
    const cartStore = useCartStore()
    const navigation = useNavigation()
    const { id } = useLocalSearchParams();

    const product = PRODUCTS.find((item) => item.id === id)
    

    function handleAddToCart() {
        cartStore.addProduct(product)
        Alert.alert("Pronto!", "Seu item foi adicionado ao carrinho", [
            { text: "Ok", onPress: () => navigation.goBack()},
        ])
    }
    return (
        <View className="flex-1 bg-slate-900">
            <Image source={product?.cover} className="w-full h-52" resizeMode="cover" />

            <View className="p-5 mt-8 flex-1">
                <Text className="text-white font-heading text-2xl mb-2">
                    {product?.title}
                </Text>

                <Text className="text-lime-400 font-heading text-2xl mb-2">
                    {formatCurrency(product.price)}
                </Text>

                <Text className="text-slate-400 font-body text-base leading-6 mb-10">
                    {product?.description}
                </Text>
                {
                    product?.ingredients.map((ingredient, index) => (
                        <Text
                            key={index}
                            className="text-slate-400 font-body text-base leading-6 "
                        >
                         {"\u2022"} {ingredient}
                        </Text>
                    ))
                }
            </View>
            <View className="p-5 pb-8 gap-5">
                <Button onPress={handleAddToCart}>
                    <Button.Icon>
                        <Feather name="plus-circle" size={20} />
                    </Button.Icon>
                    <Button.Text>Adicionar ao pedido</Button.Text>
                </Button>
                <LinkButton title="Voltar ao cardápio" href="/"/>
            </View>
        </View>
    )
}