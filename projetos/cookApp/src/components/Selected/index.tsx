import { View, Text } from "react-native"
import Animated, { BounceOutDown, SlideInDown } from "react-native-reanimated"
import { MaterialIcons } from '@expo/vector-icons'
import { styles } from "./styles"
import { theme } from "@/theme"
import { Button } from "../Button"

type Props = {
    quantity: number
    onClear: () => void
    onSearch: () => void
}

export function Selected({ quantity, onClear, onSearch }: Props) {

    return (
        <Animated.View
            style={styles.container}
            entering={SlideInDown}
            exiting={BounceOutDown}
        >
            <View style={styles.header}>
                <Text style={styles.label}>{quantity} Ingredientes selecionados</Text>
                <MaterialIcons name="close" size={24} color={theme.colors.white} onPress={onClear} />
            </View>
            <Button title="Buscar Receitas" onPress={onSearch} />
        </Animated.View>

    )
}