import { View, StatusBar } from 'react-native';
import { GluestackUIProvider } from '@gluestack-ui/themed';

import { Text, Center } from '@gluestack-ui/themed';

import { config } from './config/gluestack-ui.config';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoades] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  return (
    <GluestackUIProvider config={config} >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Center flex={1} >
        <Text >ola</Text>
      </Center>
    </GluestackUIProvider>
  );
}


