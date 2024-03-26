import { Text, View, StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function App() {
  const [fontsLoades] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoades ? <Text style={{fontFamily: 'Roboto_700Bold'}}>Native or Gluestack</Text> : <View />}
    </View>
  );
}


