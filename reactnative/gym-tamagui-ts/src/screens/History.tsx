import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { useState } from "react";
import { SectionList } from "react-native";
import { YStack, Text, Heading, } from "tamagui";

export function History() {
    const [exercises, setExercises] = useState([
        {
            title: "12.08.2022",
            data: ["Puxada Frontal", "levantamento", "corrida"]
        },
        {
            title: "11.08.2022",
            data: ["Puxada Frontal"]
        },
        {
            title: "10.08.2022",
            data: ["Frontal"]
        }
    ])
    return (
        <YStack flex={1} >
            <ScreenHeader title="Histórco de exercícios" />

            <SectionList
                sections={exercises}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <HistoryCard />
                )}
                ListEmptyComponent={() => (
                    <Text
                        color={'$gray200'}
                        textAlign="center"
                    >
                        Nenhum exercício encontrado</Text>
                )}
                renderSectionHeader={({ section }) => (
                    <Heading
                        color={"$gray200"}
                        fontSize={'$6'}
                        marginTop={25}
                        marginBottom={10}
                    >
                        {section.title}
                    </Heading>
                )}

            />

        </YStack>
    );
}