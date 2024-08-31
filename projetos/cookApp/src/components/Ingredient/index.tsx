import { Text, Pressable, PressableProps, Image } from "react-native"

import { styles } from "./styles"

export type IngredientsProps = {
  name: string
  image: string
  selected?: boolean
}
const img = "@/images/apple.png"
export function Ingredient({
  name,
  image,
  selected = false,
  ...rest
}: IngredientsProps & PressableProps) {
  
  return (
    <Pressable
      style={[styles.container, selected && styles.selected]}
      {...rest}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  )
}
