import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Product } from "@/components/Product";
import { useCartStore } from "@/stores/cart-store";
import { formatCurrency } from "@/utils/functions/formatCurrency";
import { ScrollView, Text, View } from "react-native";


export default function Cart() {
    const cartStore = useCartStore()
    const total = formatCurrency(
        cartStore.products.reduce((total, product) => total + product.price * product.quantity, 0)
    )

    return (
        <View className="flex-1 pt-10 bg-slate-900">
            <Header title="Carrinho" />
            <View className="flex-1 p-5">
                <ScrollView>
                    <View className="border-b border-slate-800 pb-5">
                        {cartStore.products.map((product) => (
                            <Product key={product.id} data={product} />
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
                    <Input placeholder="Adicionar dados de entrega: Nome e Endereço: rua , bairro, cep, numero e complemento" />
                </ScrollView>
            </View>
        </View >
    )
}