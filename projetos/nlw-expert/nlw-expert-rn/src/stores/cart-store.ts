import { create } from "zustand";
import { ProductProps } from "@/utils/data/products";

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
    addProduct: () => {},
    // removeProduct: (product) => set((state) => ({ products: state.products.filter((p) => p.id !== product.id) })),
    // clearCart: () => set({ products: [] }),
}))