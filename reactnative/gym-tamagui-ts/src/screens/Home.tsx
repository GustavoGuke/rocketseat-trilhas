import { useState } from 'react'
import { FlatList } from 'react-native';
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { YStack, Text, XStack, Heading } from "tamagui";
import { ExerciseCard } from '@components/ExerciseCard';


export function Home() {
    const [groups, setGroups] = useState(["Perna", "Costa", "Triceps", "Ombro"])
    const [selected, setSelected] = useState("Perna")

    return (
        <YStack flex={1} >
            <HomeHeader />



            <YStack>
                <FlatList
                    data={groups}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Group
                            name={item}
                            isActive={selected === item}
                            onPress={() => setSelected(item)}
                        />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 8, marginVertical: 15, maxHeight: 45 }}

                />

            </YStack>

            <YStack flex={1} paddingHorizontal={15} marginVertical={15} >
                <XStack alignItems='center' justifyContent='space-between'>
                    <Heading color={"$gray200"} fontSize={'$6'}>Exercicios</Heading>
                    <Text color={"$gray200"} fontSize={'$5'}>5</Text>
                </XStack>

                <ExerciseCard />
                <ExerciseCard />
            </YStack>




        </YStack>
    );
}