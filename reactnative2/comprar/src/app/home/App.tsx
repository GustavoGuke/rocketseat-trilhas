import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Filter } from "@/components/Filter"
import { FilterStatus } from "@/types/FilterStatus"
import { Item } from '@/components/Item';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={require('@/assets/logo.png')} />
      <View style={styles.form}>
        <Input placeholder='O que você precisa comprar' />
        <Button title='Adicionar' />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {
            FILTER_STATUS.map((status) => (

              <Filter key={status} status={status} isActive />
            ))
          }
          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <Item
          data={{ status: FilterStatus.DONE, description: "Café" }}
          onStatus={() => console.log("mudar status")}
          onRemove={() => console.log("remover")}
        />
         <Item
          data={{ status: FilterStatus.DONE, description: "Café" }}
          onStatus={() => console.log("mudar status")}
          onRemove={() => console.log("remover")}
        />
      </View>
    </View>
  );
}


