
import { StatusBar } from 'react-native';
import { TamaguiProvider } from 'tamagui';
import { tamaguiConfig } from './tamagui.config';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { Routes } from '@routes/index.routes';


import { AuthContextProvider } from '@contexts/AuthContext';

export default function App() {
  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContextProvider>
        {
          loaded && fontLoaded
            ? <Routes />
            : <Loading />
        }
      </AuthContextProvider>
     
    </TamaguiProvider>
  );
}


