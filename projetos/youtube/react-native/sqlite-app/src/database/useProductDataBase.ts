import { resolvePlugin } from "@babel/core"
import { useSQLiteContext } from "expo-sqlite"

export type ProductDataBase = {
    id: number,
    name: string,
    quantity: number
}

export function useProductDataBase(){
    const db = useSQLiteContext()

    async function create(data: Omit<ProductDataBase, "id">){
        const statement = await db.prepareAsync("INSERT INTO products (name, quantity) VALUES ($name, $quantity)")
        try {
            const result = await statement.executeAsync({
                $name: data.name,
                $quantity: data.quantity
            })
            const insertRowId = result.lastInsertRowId.toLocaleString()
            return {insertRowId}
        } catch (error) {
            throw error
        } finally {
            await statement.finalizeAsync()
        }
    }

    async function update(data: ProductDataBase){
        const statement = await db.prepareAsync("UPDATE products SET name = $name, quantity = $quantity WHERE id = $id")
        try {
            statement.executeAsync({
                $id: data.id,
                $name: data.name,
                $quantity: data.quantity
            })
            return "ok"
        } catch (error) {
            throw error
        } finally {
            await statement.finalizeAsync()
        }
    }

    async function listIDProducts(id: number) {
        const statement = "SELECT * FROM products WHERE id = ?"
        try {
            const result = await db.getFirstAsync<ProductDataBase>(statement, [id])
            return result
        } catch (error) {
            throw error
        } 
    }

    async function searchByName(name: string) {
        try {
            const query = "SELECT * FROM products WHERE name LIKE ?"
            const response = await db.getAllAsync<ProductDataBase>(query, `%${name}%`)
            return response
        } catch (error) {
            throw error
        }
    }

    async function removeProduct(id: number){
        try {
            await db.execAsync("DELETE FROM products WHERE id = " + id)
        } catch (error) {
            throw error
        }
    }

    return {create, listIDProducts, searchByName, update, removeProduct}
}