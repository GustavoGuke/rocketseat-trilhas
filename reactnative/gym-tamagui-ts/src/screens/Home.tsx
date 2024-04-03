import { HomeHeader } from "@components/HomeHeader";
import { YStack, Text } from "tamagui";

export function Home() {
    return (
        <YStack flex={1} >
            <HomeHeader />
        </YStack>
    );
}