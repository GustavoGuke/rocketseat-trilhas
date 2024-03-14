import { useFonts } from 'expo-font'
import { useEffect } from 'react';
import { TamaguiProvider } from 'tamagui';
import { tamaguiConfig } from './tamagui.config';


import AppRouter from './src/router/appRouter';

export default function App() {

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded])

  if (!loaded) {
    return null;
  }
  return (

    <TamaguiProvider config={tamaguiConfig}>
      <AppRouter />
    </TamaguiProvider>
  );
}


