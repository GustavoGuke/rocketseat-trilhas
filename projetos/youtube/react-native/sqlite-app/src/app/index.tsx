import { View, StyleSheet, Button, Alert, FlatList, Text } from 'react-native'
import { Input } from '@/components/Input'
import { useEffect, useState } from 'react'

import { useProductDataBase, ProductDataBase } from "../database/useProductDataBase"
import { Product } from '@/components/Products'
import { router } from 'expo-router'

export default function App() {
    const [id, setId] = useState("")
    const [name, SetName] = useState("")
    const [search, SetSearch] = useState("")
    const [quantity, setQuantity] = useState("")
    const [products, setProducts] = useState<ProductDataBase[]>([])

    const productDataBase = useProductDataBase()

    async function createProduct() {
        try {
            if (isNaN(Number(quantity))) {
                return Alert.alert("Quantidade precisa ser numero.")
            }
            const response = await productDataBase.create({ name, quantity: Number(quantity) })
            Alert.alert("Produto cadastrado com sucesso: " + response.insertRowId)
        } catch (error) {
            console.log(error)
        }
    }

    async function updateProduct() {
        try {
            if (isNaN(Number(quantity))) {
                return Alert.alert("Quantidade precisa ser numero.")
            }
            const response = await productDataBase.update({ id: Number(id), name, quantity: Number(quantity) })
            Alert.alert("Produto alterado com sucesso: ")
            setQuantity("")
            SetName("")
            listSearchByName()
        } catch (error) {
            console.log(error)
        }
    }



    async function listSearchByName() {
        const response = await productDataBase.searchByName(search)
        setProducts(response)
    }

    async function details(item: ProductDataBase) {
        setId(String(item.id))
        SetName(item.name)
        setQuantity(String(item.quantity))
    }

    async function handleSave() {
        if (id) {
            updateProduct()
        } else {
            createProduct()
        }
        setId("")
        setQuantity("")
        SetName("")
        listSearchByName()
    }

    async function remove(id: number) {
        try {
            await productDataBase.removeProduct(id)
            listSearchByName()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        listSearchByName()
    }, [search])

    return (
        <View style={styles.container}>
            <Input placeholder='Nome' onChangeText={SetName} value={name} />
            <Input placeholder='Quantidade' onChangeText={setQuantity} value={quantity} />
            <Button title='Salvar' onPress={handleSave} />

            <View >
                <Text>Pesquisar por produto</Text>
                <Input placeholder='Pesquisa' onChangeText={SetSearch} />
            </View>

            <FlatList
                data={products}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <Product
                    onDelete={() => remove(item.id)}
                    name={item.name}
                    quantity={item.quantity}
                    onPress={() => details(item)} 
                    onVisibility={() => {router.navigate("/details/" + item.id)}}
                    />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20
    }
})