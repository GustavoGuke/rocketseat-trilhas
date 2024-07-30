import { View, Text, ScrollView } from "react-native";

import { styles } from "./styles";
import { Ingredient } from "@/components/Ingredient";
import { Ingredients } from "@/components/Ingredients";

import img from "@/images/banana.png";
import { useState } from "react";

const teste = [
    {
        name: 'banana',
        image: img,
        selected: false
    },
    {
        name: 'banana',
        image: '../../images/banana.png',
        selected: false
    },
    {
        name: 'aplle',
        image: '../../images/banana.png',
        selected: false
    },
    {
        name: 'bapple',
        image: '../../images/banana.png',
        selected: false
    },
    {
        name: 'ban',
        image: '../../images/banana.png',
        selected: false
    },
    {
        name: 'ban',
        image: '../../images/banana.png',
        selected: false
    },
    {
        name: 'ban',
        image: '../../images/banana.png',
        selected: false
    },
    {
        name: 'ba',
        image: '../../images/banana.png',
        selected: false
    },
    {
        name: 'banana',
        image: '../../images/banana.png',
        selected: false
    },
    {
        name: 'banana',
        image: '../../images/banana.png',
        selected: false
    },
    {
        name: 'banana',
        image: '../../images/banana.png',
        selected: false
    },
    {
        name: 'banana',
        image: '../../images/banana.png',
        selected: false
    },
    {
        name: 'banana',
        image: '../../images/banana.png',
        selected: false
    },
    {
        name: 'banana',
        image: '../../images/banana.png',
        selected: false
    },
    {
        name: 'banana',
        image: '../../images/banana.png',
        selected: false
    },
]
export default function Home() {
    const [selected, setSelected] = useState<string[]>([])
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha Video parado 1:51:53{"\n"}
                <Text>os produtos</Text>
            </Text>
            <Text style={styles.subtitle}>Receitas baseadas em ingredientes</Text>

            <ScrollView>
                <Ingredient image="../../images/banana.png" name="banana" />
                <Ingredient image="../../images/banana.png" name="banana" />
            </ScrollView>
        </View>
    );
}