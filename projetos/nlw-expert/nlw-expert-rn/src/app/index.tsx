import { ButtonCategory } from "@/components/ButtonCategory";
import { Header } from "@/components/Header";
import { Text, View, FlatList } from "react-native";

import { CATEGORIES } from "@/utils/data/products";
import { useState } from "react";

export default function Home() {
    const [categorySelected, setCategorySelected] = useState('')

    function handleCategorySelect(category: string) {
        setCategorySelected(category)
    }
    return (
        <View className="flex-1 pt-10">
            <Header title="Faça seu pedido" cardQuantity={1} />

            <FlatList
                data={CATEGORIES}
                keyExtractor={item => item}
                renderItem={({ item }) =>(
                    <ButtonCategory title={item}
                        isSelected={item === categorySelected}
                        onPress={() => handleCategorySelect(item)} />)}
                horizontal
                showsHorizontalScrollIndicator={false}
                className="max-h-10 mt-5"
                contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}
            />
        </View>
    )
}