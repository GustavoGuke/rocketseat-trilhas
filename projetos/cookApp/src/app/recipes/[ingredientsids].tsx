import { router, useLocalSearchParams } from "expo-router";
import { Button, FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Recipe } from "@/components/Recipe";
import { useEffect, useState } from "react";
import { services } from "@/services";
import { Ingredients } from "@/components/Ingredients";


export default function Recipes() {
    const params = useLocalSearchParams<{ingredientsids:string}>()
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
    const [recipes, setRecipes] = useState<RecipeResponse[]>([])
    const ingredientsIds = params.ingredientsids.split(",")
    
    useEffect(() => {
        services.ingredientes.findByIds(ingredientsIds).then(setIngredients)
    },[])

    useEffect(() => {
        services.recipes.findByIngredientsIds(ingredientsIds).then(setRecipes)
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons name="arrow-back"
                    size={24}
                    color="black"
                    onPress={() => router.back()} />

                <Text style={styles.title}>Receitas</Text>


                <Ingredients ingredients={ingredients} />
                <FlatList
                    data={recipes}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <Recipe
                            recipe={item}
                            onPressOut={()=> router.navigate(`/recipe/${item.id}`)}
                        />}
                />
            </View>
        </View>
    )
}