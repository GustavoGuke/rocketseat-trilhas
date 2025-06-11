import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './style';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Filter } from "@/components/Filter"
import { FilterStatus } from "@/types/FilterStatus"
import { Item } from '@/components/Item';
import { useState } from 'react';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]




export default function App() {
  const [ITEMS, setITEMS] = useState<any>([])
  const [filter, setFilter] = useState(FilterStatus.PENDING)
  const [description, setDescription] = useState("")
  let id = 1

  function handleAdd(){

    let newItem = {"id":Math.random().toString(36).substring(2), status: FilterStatus.PENDING, description }
    setITEMS(prev => [...prev,newItem])
    id =+1
    console.log(ITEMS)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={require('@/assets/logo.png')} />
      <View style={styles.form}>
        <Input
          placeholder='O que você precisa comprar'
          onChangeText={setDescription}
        />
        <Button title='Adicionar' onPress={handleAdd}/>
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
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>


        <FlatList
          data={ITEMS}
          keyExtractor={Item => Item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => console.log("mudar status")}
              onRemove={() => console.log("remover")}
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


