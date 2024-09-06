import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ProductProps } from "@/utils/data/products";
import * as cartInMemmory from "../stores/helpers/cart-in-memory";


export type ProductCartProps = ProductProps & {
    quantity: number
}

type CartStoreProps = {
    products: ProductCartProps[]
    addProduct: (product: ProductCartProps) => void
    removeProduct: (productId: string) => void
    clearCart: () => void
}

export const useCartStore = create(
    persist<CartStoreProps>((set) => ({
        products: [],
        addProduct: (product: ProductProps) =>
            set((state) => ({ products: cartInMemmory.add(state.products, product) })),

        removeProduct: (productId: string) =>
            set((state) => ({
                products: cartInMemmory.remove(state.products, productId)
            })),
        
        clearCart: () => set({ products: [] }),
    }),{
        name: "nlw-expert-cart",
        storage: createJSONStorage(() => AsyncStorage)
    }))