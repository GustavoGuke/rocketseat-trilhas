import { ScrollView } from "react-native"

// import { services } from "@/services"

import { styles } from "./styles"
import { Ingredient, IngredientsProps } from "@/components/Ingredient"

type Props = {
  ingredients: IngredientsProps[]
}
const img = "../../images/banana.png"
export function Ingredients({ ingredients }: Props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.ingredientsContent}
      showsHorizontalScrollIndicator={false}
    >
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.name}
          name={ingredient.name}
          // image={`${services.storage.imagePath}/${ingredient.image}`}
          image={ingredient.image}
        />
      ))}
    </ScrollView>
  )
}
