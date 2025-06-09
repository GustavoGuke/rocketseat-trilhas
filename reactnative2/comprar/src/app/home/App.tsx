import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { styles } from './style';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Filter } from "@/components/Filter"
import { FilterStatus } from "@/types/FilterStatus"

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

      <Filter status={FilterStatus.DONE} isActive />
      <Filter status={FilterStatus.PENDING} isActive={false} />
      </View>
    </View>
  );
}


