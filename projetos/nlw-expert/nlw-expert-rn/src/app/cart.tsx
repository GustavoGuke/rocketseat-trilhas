import Button from "@/components/Button";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { LinkButton } from "@/components/Link-Button";
import { Product } from "@/components/Product";
import { ProductCartProps, useCartStore } from "@/stores/cart-store";
import { formatCurrency } from "@/utils/functions/formatCurrency";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Alert, Linking, ScrollView, Text, View } from "react-native";


export default function Cart() {
    const [address, setAddress] = useState("")
    const navigate = useNavigation()
    const cartStore = useCartStore()
    const total = formatCurrency(
        cartStore.products.reduce((total, product) => total + product.price * product.quantity, 0)
    )

    function handleProductRemove(product: ProductCartProps) {
        Alert.alert("Remover", `Deseja remover ${product.title} do carrinho`, [
            {
                text: "Cancelar",
            },
            {
                text: "Remover",
                onPress: () => cartStore.removeProduct(product.id)
            }
        ])
    }

    function handleOrder() {
        if(address.trim().length === 0){
            return Alert.alert("Pedido", "Informe os dados de entrega.")
        }
        const product = cartStore.products.map((product) => 
            `\n ${product.quantity} - ${product.title}`
        ).join("")
        const tel = ""
        const msg = `
         NOVO PEDIDO
         \n Entregar em: ${address}

         \n ${product}
        
         \n Valor total: ${total}

        `
        Linking.openURL(`http://api.whatsapp.com/send?phone=${tel}&text=${msg}`)
        cartStore.clearCart()
        navigate.goBack()
    }
    return (
        <View className="flex-1 pt-10 bg-slate-900">
            <Header title="Carrinho" />
            <View className="flex-1 p-5">
                <ScrollView>
                    <View className="border-b border-slate-800 pb-5">
                        {cartStore.products.map((product) => (
                            <Product
                                key={product.id}
                                data={product}
                                onPress={() => handleProductRemove(product)}
                            />
                        ))}
                    </View>
                    <View className="flex-row gap-2 items-center mt-5 mb-4">
                        <Text className="text-white text-xl font-subtitle">
                            Total
                        </Text>
                        <Text className="text-lime-400 font-heading text-2xl">
                            {total}
                        </Text>

                    </View>
                    <Input
                        onChangeText={setAddress}
                        placeholder="Adicionar dados de entrega: Nome e Endereço: rua , bairro, cep, numero e complemento" />
                </ScrollView>
                {
                    cartStore.products.length > 0 &&
                    <View className="p-5 gap-5">
                        <Button onPress={handleOrder}>
                            <Button.Text>Enviar Pedido</Button.Text>
                            <Button.Icon>
                                <Feather name="arrow-right-circle" size={20} />
                            </Button.Icon>
                        </Button>

                        <LinkButton title="Voltar ao cardápio" href="/" />
                    </View>}
            </View>
        </View >
    )
}