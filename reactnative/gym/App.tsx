import { Text, View, StatusBar } from 'react-native';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

import { THEME } from 'src/theme';
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
        <Loading />
     

    </GluestackUIProvider>
  );
}


