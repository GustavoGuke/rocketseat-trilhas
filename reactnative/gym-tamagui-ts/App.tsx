
import { Text, StatusBar} from 'react-native';
import { TamaguiProvider } from 'tamagui';
import { tamaguiConfig } from './tamagui.config';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { Signin } from '@screens/Signin';


export default function App() {
  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
     
      {
        fontLoaded
          ? <Signin />
          : <Loading />
      }
    </TamaguiProvider>
  );
}


