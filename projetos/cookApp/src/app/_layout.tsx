import { Slot } from "expo-router";
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { Loading } from "@/components/Loading";

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold
    });

    return (
        <>
            {fontsLoaded ? <Slot /> : <Loading />}
        </>
    )
}