import { View, Text, XStack, YStack, Heading } from "tamagui";

export function HistoryCard() {
    return (
        <XStack bg="$gray500"
            alignItems='center'
            justifyContent="space-between" 
            paddingVertical={8}
            paddingHorizontal={20}
            borderRadius={8}
            marginBottom={20}>
            <YStack marginRight={20} flex={1}>
                <Heading
                    color={"white"}
                    fontSize={"$5"}
                    textTransform="capitalize"
                >costas</Heading>
                <Text
                    color={"$gray100"}
                    fontSize={"$3"}
                    numberOfLines={1}
                >
                    Puxada frontal</Text>
            </YStack>
            <Text
                color={"$gray300"}
                fontSize={"$4"}
            >12.08.2022</Text>
        </XStack>
    )
}