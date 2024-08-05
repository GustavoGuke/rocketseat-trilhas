import 'react-native-get-random-values'
import { useNetInfo } from '@react-native-community/netinfo';
import './src/libs/dayjs'
import { ThemeProvider } from 'styled-components/native'
import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Signin } from './src/screens/Signin';
import theme from './src/theme';
import { Loading } from './src/components/Loading';

import { AppProvider, UserProvider } from '@realm/react';

import { REALM_APP_ID } from '@env'
import { Routes } from './src/routes/index.routes';
import { RealmProvider, syncConfig } from './src/libs/realm';
import { TopMessage } from './src/components/TopMessage';
import { WifiSlash } from 'phosphor-react-native';
export default function App() {
  const netInfo = useNetInfo();
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return <Loading />
  }
  return (
    <AppProvider id={REALM_APP_ID}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider style={{ backgroundColor: theme.COLORS.GRAY_800 }}>
          {
            !netInfo.isConnected &&
            <TopMessage
              title='Você está off-line'
              icon={WifiSlash}
            />
          }
          <UserProvider fallback={Signin}>
            <RealmProvider sync={syncConfig} fallback={Loading}>
              <Routes />
            </RealmProvider>
          </UserProvider>
        </SafeAreaProvider>
      </ThemeProvider>
    </AppProvider>
  );
}


