import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';
import theme from '@theme/index';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

import Loading  from '@components/Loading';
import { Routes } from '@routes/index';
export default function App() {
  const [fontLoader] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontLoader ? <Routes />: <Loading/>}
    </ThemeProvider>
  );
}


