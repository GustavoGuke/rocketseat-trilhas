import { StatusBar } from 'expo-status-bar';
import { Image, Text, View } from 'react-native';
import { styles } from './style';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.logo} source={require('@/assets/logo.png')} />
      <View style={styles.form}>
        <Input placeholder='O que você precisa comprar' />
        <Button title='Adicionar' />
      </View>

      <View style={styles.content}></View>
    </View>
  );
}


