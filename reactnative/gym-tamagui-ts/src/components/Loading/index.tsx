
import { Spinner, YStack, XStack } from "tamagui";

export function Loading() {
    return (
        <YStack flex={1} alignItems="center" justifyContent="center">
            <Spinner size="large"  color={"$greenClaro"} />
        </YStack>
    )
}