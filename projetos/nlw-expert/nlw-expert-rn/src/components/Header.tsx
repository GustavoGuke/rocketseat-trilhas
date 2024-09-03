// create um componente Header
import { Feather } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";
import colors from "tailwindcss/colors";

type HeaderProps = {
    title: string,
    cardQuantity?: number
}
export function Header({ title, cardQuantity = 0 }: HeaderProps) {
    return (
        <View className="flex-row items-center border-b border-slate-700 mx-5 pb-8">
            <View className="flex-1">
                <Image source={require('../assets/logo.png')} className="h-6 w-36" />
                <Text className="text-white text-xl font-heading mt-2">{title}</Text>
            </View>

            {
                cardQuantity > 0 &&
                <TouchableOpacity className="relative" activeOpacity={0.7}>
                    <View className="bg-lime-300 h-5 w-5 rounded-full items-center justify-center top-2 z-10 -right-3.5">
                        <Text className="text-slate-900 font-bold text-xs">{cardQuantity}</Text>
                    </View>

                    <Feather name="shopping-bag" size={24} color={colors.white} />
                </TouchableOpacity>
            }

        </View>
    )
}