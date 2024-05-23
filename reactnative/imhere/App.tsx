import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/screens/Home';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaProvider style={{flex:1}}>
    <StatusBar 
      style='light'
      backgroundColor='transparent'
      translucent
    />

    <Home />
    </SafeAreaProvider>
  );
}