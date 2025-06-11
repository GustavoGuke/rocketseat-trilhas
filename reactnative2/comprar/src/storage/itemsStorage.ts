import AsyncStorage from "@react-native-async-storage/async-storage";
import { FilterStatus } from "@/types/FilterStatus";



const ITEMS_STORAGE_KEY = "@comprar:items"

export type ItemsStorage = {
    id: string,
    status: FilterStatus
    description: string
}

async function get(): Promise<ItemsStorage[]> {
    try {
        const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY)
        return storage ? JSON.parse(storage) : []
    } catch (error) {
        throw new Error("GET_ITEMS: " + error)
    }
}

async function getByStatus(status: FilterStatus): Promise<ItemsStorage[]> {
    const items = await get()
    return items.filter((item) => item.status === status)
}

async function save(items: ItemsStorage[]): Promise<void> {
    await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items))
}

async function add(newItem: ItemsStorage): Promise<ItemsStorage[]> {
    const items = await get()
    const updateItems = [...items, newItem]
    await save(updateItems)

    return updateItems
}

async function remove(id: string) {
    const items = await get()
    const removeItem = items.filter((item) => item.id !== id)
    await save(removeItem)
}

async function clear() {
    try {
        await AsyncStorage.removeItem(ITEMS_STORAGE_KEY)
    } catch (error) {
        throw new Error("ITEMS_CLEAR" + error)
    }
}

async function toggleStatus(id: string): Promise<void> {
    const items = await get()
    const updateItems = items.map((item) => 
        item.id == id
            ? {
                ...item,
                status: item.status === FilterStatus.PENDING ? FilterStatus.DONE : FilterStatus.PENDING
            }
            : item
    )
    await save(updateItems)
    
}

export const itemsStorage = { get, getByStatus, add, remove, clear, toggleStatus }