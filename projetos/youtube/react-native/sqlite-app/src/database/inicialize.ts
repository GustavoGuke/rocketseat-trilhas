import { type SQLiteDatabase} from 'expo-sqlite'

export async function inicialize(dataBase: SQLiteDatabase) {
    await dataBase.execAsync(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            quantity INTEGER NOT NULL
        );
    `)
}