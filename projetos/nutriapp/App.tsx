import { StatusBar } from 'react-native';
import { Text, View } from 'react-native';

import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index'

import { Loading } from '@components/Loading';
import { Signin } from '@screens/Signin';
import { SignUp } from '@screens/SignUp';
import { Routes } from '@routes/index.routes';

export default function App() {
  
  const [fontLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      {
        fontLoader ?
          <Routes /> :
          <Loading />
      }
    </ThemeProvider >
  );
}


