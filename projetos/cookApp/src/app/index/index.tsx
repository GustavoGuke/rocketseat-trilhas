import { View, Text, ScrollView, Alert } from "react-native";

import { styles } from "./styles";
import { Ingredient } from "@/components/Ingredient";
import { Ingredients } from "@/components/Ingredients";

import img from "@/images/banana.png";
import { useEffect, useState } from "react";
import { Selected } from "@/components/Selected";
import { router } from "expo-router";
import { services } from "@/services";

// const ingredients = [
//     {
//         name: 'maça',
//         image: '@/images/banana.png',
//         selected: false,
//         id: 1
//     },
//     {
//         name: 'banana',
//         image: '@/images/banana.png',
//         selected: false,
//         id: 2
//     },
//     {
//         name: 'aplle',
//         image: '../../images/banana.png',
//         selected: false,
//         id: 3
//     },
//     {
//         name: 'bapple',
//         image: '../../images/banana.png',
//         selected: false,
//         id: 4
//     },
//     {
//         name: 'ban',
//         image: '../../images/banana.png',
//         selected: false,
//         id: 5

//     },
    
//     {
//         name: 'ba',
//         image: '../../images/banana.png',
//         selected: false,
//         id: 6

//     },
   
// ]
export default function Home() {
    const [selected, setSelected] = useState<string[]>([])
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([])


    function handleSelected(value: string) {
        
        if(selected.includes(value)) {
           return setSelected((state) => state.filter((item) => item !== value))
        } else {
            setSelected([...selected, value])
        }
    }
    
    function handleClearSelected() {
        Alert.alert('Limpar itens selecionados', 'Deseja realmente limpar todos os itens selecionados?', [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => setSelected([])
            }
        ])
        
    }

    function handleNavigateToRecipes() {
        router.navigate('/recipes/' + selected)
    }
    
    useEffect(() => {
        services.ingredientes.findAll().then(setIngredients)
    },[])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text>os produtos</Text>
            </Text>
            <Text style={styles.subtitle}>Receitas baseadas em ingredientes</Text>


            <ScrollView
                contentContainerStyle={styles.ingredientsContent}
                showsHorizontalScrollIndicator={false}
            >
                {ingredients.map((ingredient) => (
                    <Ingredient
                        selected={selected.includes(ingredient.id)}
                        onPress={() => handleSelected(ingredient.id)}
                        key={ingredient.id}
                        name={ingredient.name}
                        image={`${services.storage.imagePath}/${ingredient.image}`}
                    />
                ))}
            </ScrollView>
           {
               selected.length > 0 && (
                   <Selected 
                   quantity={selected.length} 
                   onClear={handleClearSelected} 
                   onSearch={handleNavigateToRecipes}/>
               )
           }
        </View>
    );
}