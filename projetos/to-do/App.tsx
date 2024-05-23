import { ThemeProvider } from 'styled-components/native';
import { Text, View, StatusBar } from 'react-native';

import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';

import theme from './src/theme';
import Loading from './src/components/Loading';



export default function App() {
  const [fontLoader] = useFonts({Inter_400Regular,Inter_700Bold})
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />

      {!fontLoader? <Text>ok</Text>: <Loading/>}
    </ThemeProvider>
  );
}


