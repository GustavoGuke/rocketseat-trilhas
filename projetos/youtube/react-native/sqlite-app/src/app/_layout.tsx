import { inicialize } from '@/database/inicialize'
import { Slot } from 'expo-router'
import { SQLiteProvider } from 'expo-sqlite'

export default function Layout(){
    return (
        <SQLiteProvider databaseName='myDataBase.db' onInit={inicialize}>
            <Slot />
        </SQLiteProvider>
    )
}