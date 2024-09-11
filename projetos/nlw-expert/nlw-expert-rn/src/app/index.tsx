import { useState, useRef } from "react";
import { Text, View, FlatList, SectionList } from "react-native";

import { Header } from "@/components/Header";
import { Product } from "@/components/Product";
import { ButtonCategory } from "@/components/ButtonCategory";

import { CATEGORIES, MENU, ProductProps } from "@/utils/data/products";
import { Link } from "expo-router";
import { useCartStore } from "@/stores/cart-store";


export default function Home() {
    const cartStore = useCartStore()
    const cartQuanityItems = cartStore.products.reduce((total, product) => total + product.quantity, 0)

    const [categorySelected, setCategorySelected] = useState('')
    const sectionListRef = useRef<SectionList<ProductProps>>(null)

    function handleCategorySelect(category: string) {
        setCategorySelected(category)

        const sectionIndex = CATEGORIES.findIndex(item => item === category)
        
        if(sectionListRef.current) {
            sectionListRef.current.scrollToLocation({
                sectionIndex,
                itemIndex: 0,
                animated: true
            })
        }
    }
    return (
        <View className="flex-1 pt-10">
            <Header title="Cardápio" cardQuantity={cartQuanityItems} />

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

            <SectionList
                ref={sectionListRef}
                sections={MENU}
                keyExtractor={item => item.id}
                stickySectionHeadersEnabled={false}
                renderItem={({ item }) => (
                    <Link href={`product/${item.id}`} asChild>
                        <Product data={item} />
                    </Link>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text className="text-white font-heading text-xl mt-10 mb-3">{title}</Text>
                )}
                showsVerticalScrollIndicator={false}
                className="flex-1 px-5"
                contentContainerStyle={{ paddingBottom: 100 }}
            />
        </View>
    )
}