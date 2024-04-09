import { Heading, View, XStack } from "tamagui";

type Props = {
    title: string
}

export function ScreenHeader({title}: Props){
    return (
        <XStack bg="$gray500" pt={96} pb={20} px={30} alignItems='center' justifyContent="center">
            <Heading color={"$gray200"}>
                {title} 
            </Heading>
        </XStack>
    )
}