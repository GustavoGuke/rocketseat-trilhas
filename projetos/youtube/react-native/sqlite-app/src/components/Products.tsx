import { Pressable, PressableProps, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'


type Props = PressableProps & {
    name: string,
    quantity: number,
    onDelete: () => void,
    onVisibility: () => void
}


export function Product({ name, quantity, onDelete, onVisibility, ...rest }: Props) {
    return (
        <Pressable {...rest} style={{ flexDirection: "row", backgroundColor: "gray", marginBottom: 2, padding: 10 }}>
            <Text style={{ flex: 1 }}>Produto :{name} - Quantidade :{quantity}</Text>

            <TouchableOpacity onPress={onDelete}>
                <MaterialIcons size={24} name='delete' />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={onVisibility}>
                <MaterialIcons size={24} name='visibility' />
            </TouchableOpacity>
        </Pressable>
    )
}