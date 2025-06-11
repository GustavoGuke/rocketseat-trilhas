import { useState, useEffect } from 'react';
import { Image, Text, View, TouchableOpacity, FlatList, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Filter } from "@/components/Filter"
import { Item } from '@/components/Item';
import { FilterStatus } from "@/types/FilterStatus"
import { styles } from './style';
import { ItemsStorage, itemsStorage } from '@/storage/itemsStorage';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]

export default function App() {
  const [items, setItems] = useState<ItemsStorage[]>([])
  const [filter, setFilter] = useState(FilterStatus.PENDING)
  const [description, setDescription] = useState("")

  async function handleAdd() {
    if (!description.trim()) {
      return Alert.alert("Adicionar", "Informe a descrição para adicionar")
    }
    let newItem = { "id": Math.random().toString(36).substring(2), status: FilterStatus.PENDING, description }
    await itemsStorage.add(newItem)
    await getItem()
    setFilter(FilterStatus.PENDING)
    Alert.alert("Adicionado", `Item ${description}`)
    setDescription("")
  }

  async function handleRemoveItem(id: string) {
    try {
      await itemsStorage.remove(id)
      await getItem()
    } catch (error) {
      console.log(error)
    }
  }

  function handleClear(){
    Alert.alert("Limpar", "Deseja remover todos?", [
      {text: "Não", style: "cancel"},
      {text: "Sim", onPress: () => onClearItems()}
    ])
  }
  async function onClearItems() {
    try {
      await itemsStorage.clear()
      setItems([])
    } catch (error) {
      console.log(error)
    }
  }

  async function handleToggleItemStatus(id:string) {
    try {
      await itemsStorage.toggleStatus(id)
      await getItem()
    } catch (error) {
      console.log(error)
    }
  }

  async function getItem() {
    try {
      const response = await itemsStorage.getByStatus(filter)
      setItems(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getItem()
  }, [filter])
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={require('@/assets/logo.png')} />
      <View style={styles.form}>
        <Input
          placeholder='O que você precisa comprar'
          onChangeText={setDescription}
          value={description}
        />
        <Button title='Adicionar' onPress={handleAdd} />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {
            FILTER_STATUS.map((status) => (

              <Filter
                key={status}
                status={status}
                isActive={status === filter}
                onPress={() => setFilter(status)}
              />
            ))
          }
          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>


        <FlatList
          data={items}
          keyExtractor={Item => Item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => handleToggleItemStatus(item.id)}
              onRemove={() => handleRemoveItem(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => <Text style={styles.empty}>Nenhum item aqui.</Text>}
        />
      </View>
    </View>
  );
}


