import { Header } from "@components/Header";
import { Container, Content, Text } from "./styles";
import { CardPercent } from "@components/CardPercent";
import { ButtonIcon } from "@components/ButtonIcon";
import { SectionList, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { ContenteDefault } from "@components/ContenteDefault";
import { StatusBar } from "react-native";



const history = [
    {
        title: "03/07/2024",
        data: [
            {
                hour: "08:00",
                food: "pão com presunto e café",
                id: "1",
                diet: "nao"
            },
            {
                hour: "12:30",
                food: "arroz, feijão, linguiça e ovo",
                id: "2",
                diet: "ok"
            }
        ]
    },
    {
        title: "04/07/2024",
        data: [
            {
                hour: "08:00",
                food: "pão com presunto e café",
                id: "1",
                diet: "ok"
            },
            {
                hour: "12:30",
                food: "arroz, feijão, linguiça e ovo",
                id: "2",
                diet: "ok"
            }
        ]
    },
    {
        title: "04/07/2024",
        data: [
            {
                hour: "08:00",
                food: "pão com presunto e café",
                id: "1",
                diet: "ok"
            },
            {
                hour: "12:30",
                food: "arroz, feijão, linguiça e ovo",
                id: "2",
                diet: "ok"
            }
        ]
    }
]


export function FoodDiary() {
    const { COLORS } = useTheme()
    const navigation = useNavigation<AppNavigatorRoutesProps>()
    const [meal, setMeal] = useState(history)

    function handleFoodMeals() {
        navigation.navigate("FoodMeals")
    }

    return (
        <Container>
            <Header />
            <ContenteDefault>
                <CardPercent
                    icon="arrow-outward"
                    title="90%"
                    subtitle="das refeições dentro da dieta"
                    size={24}
                    
                    onPress={handleFoodMeals}

                />
                <Text align="flex-end" weight="bold" size={40}>Refeições</Text>
                <ButtonIcon
                    weight="bold"
                    size={40}
                    icon="arrow-forward"
                    title="Nova refeição"
                    bgColor={COLORS.ORANGE_200}
                    onPress={() => navigation.navigate("NewMeal")}
                />

                <SectionList
                    sections={meal}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ButtonIcon
                            hour={item.hour}
                            title={item.food}
                            type={item.diet == "ok" ? "PRIMARY" : "SECONDARY"}
                            icon="circle"
                            size={35}
                            align="space-between"
                            bgColor={COLORS.GRAY_98}
                            weight="REGULAR"
                            onPress={() => navigation.navigate("MealDetails")}
                        />
                    )}
                    renderSectionHeader={({ section }) => (
                        <TouchableOpacity>
                            <Text align="flex-end" weight="bold" size={40}>{section.title}</Text>
                        </TouchableOpacity>
                    )}
                />
            </ContenteDefault>
        </Container>
    )
}