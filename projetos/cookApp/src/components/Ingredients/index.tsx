import { ScrollView } from "react-native"

// import { services } from "@/services"

import { styles } from "./styles"
import { Ingredient, IngredientsProps } from "@/components/Ingredient"
import { services } from "@/services"

type Props = {
  ingredients: IngredientsProps[]
  
}
export function Ingredients({ ingredients}: Props) {
  return (
    <ScrollView
      contentContainerStyle={styles.ingredientsContent}
      showsHorizontalScrollIndicator={false}
    >
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.name}
          name={ingredient.name}
          image={`${services.storage.imagePath}/${ingredient.image}`}
        />
      ))}
    </ScrollView>
  )
}
