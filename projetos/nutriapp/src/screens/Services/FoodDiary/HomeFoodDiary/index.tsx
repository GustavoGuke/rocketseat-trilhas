import { Header } from "@components/Header";
import { Container, Content, Text } from "./styles";
import { CardPercent } from "@components/CardPercent";
import { ButtonIcon } from "@components/ButtonIcon";
import { SectionList, TouchableOpacity, View } from "react-native";
import { useState } from "react";

export function FoodDiary() {
    const [meal, setMeal] = useState(["x-tudo", "feijão"])
    return (
        <Container>
            <Header />
            <Content>
                <CardPercent title="90%" subtitle="das refeições dentro da dieta" />
                <Text align="flex-end" weight="bold" size={40}>Refeições</Text>
                <ButtonIcon
                    weight="bold"
                    size={40}
                    icon="arrow-forward" 
                    title="Nova refeição" />

                    <SectionList 
                        sections={meal}
                        keyExtractor={item => item}
                        renderItem={({item}) => (
                            <TouchableOpacity>
                                <Text align="flex-end">{item}</Text>
                            </TouchableOpacity>
                        )}
                    />
            </Content>
        </Container>
    )
}