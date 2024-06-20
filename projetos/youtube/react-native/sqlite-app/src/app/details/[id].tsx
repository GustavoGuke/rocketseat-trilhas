import {View, Text} from 'react-native'
import {useLocalSearchParams} from 'expo-router'
import {useState, useEffect} from 'react'
import { useProductDataBase } from '@/database/useProductDataBase'

export default function Details(){
    const [data, setData] = useState({
        name:"",
        quantity:0

    })
    const productDataBase = useProductDataBase()
    const params = useLocalSearchParams<{id: string}>()
    useEffect(() => {
        
        if (params.id){
            productDataBase.listIDProducts(Number(params.id))
                .then((response) => {
                    if (response) {
                       setData({
                        name: response.name,
                        quantity:response.quantity
                       }) 
                    }
                })
        }
    }, [params.id]);
    return (
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:24}}>ID: {params.id}</Text>
            <Text style={{fontSize:24}}>Nome: {data.name}</Text>
            <Text style={{fontSize:24}}>Quantidade: {data.quantity}</Text>
        </View>
    )
}