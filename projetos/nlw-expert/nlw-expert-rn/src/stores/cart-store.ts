import { create } from "zustand";
import { ProductProps } from "@/utils/data/products";
import * as cartInMemmory from "../stores/helpers/cart-in-memory";
export type ProductCartProps = ProductProps & {
    quantity: number
}

type CartStoreProps = {
    products: ProductCartProps[]
    addProduct: (product: ProductCartProps) => void
    // removeProduct: (product: ProductCartProps) => void
    // clearCart: () => void
}

export const useCartStore = create<CartStoreProps>((set) => ({
    products: [],
    addProduct: (product: ProductProps) => 
        set((state) => ({ products: cartInMemmory.add(state.products, product) })),
    // removeProduct: (product) => set((state) => ({ products: state.products.filter((p) => p.id !== product.id) })),
    // clearCart: () => set({ products: [] }),
}))