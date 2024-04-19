import { HistoryDTO } from "@dtos/HistoryDTO";
import { View, Text, XStack, YStack, Heading } from "tamagui";


type HistoryCardProps = {
    data: HistoryDTO
}
export function HistoryCard({ data }: HistoryCardProps) {
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
                >{data.group}</Heading>
                <Text
                    color={"$gray100"}
                    fontSize={"$3"}
                    numberOfLines={1}
                >
                    {data.name}</Text>
            </YStack>
            <Text
                color={"$gray300"}
                fontSize={"$4"}
            >{data.hour}</Text>
        </XStack>
    )
}