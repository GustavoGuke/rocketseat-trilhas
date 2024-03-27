import { Spinner, Center } from "@gluestack-ui/themed";

export function Loading() {
    return (
        <Center flex={1} >
            <Spinner color={"$indigo600"}/>
        </Center>
    )
}