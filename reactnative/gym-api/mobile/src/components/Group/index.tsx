import { Text, Button, ButtonProps } from "tamagui";

type Props = ButtonProps & {
    name: string
    isActive: boolean
}

export function Group({ name, isActive, ...rest }: Props) {
    return (
        <Button
            marginRight={15}
            w={100}
            h={45}
            borderRadius={"$8"}
            bg={"$gray500"}
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            borderColor={isActive? "$greenClaro": "$gray500"}
            pressStyle={{ borderWidth: 1, bg: "$gray600", borderColor: "$greenClaro" }}
            {...rest}
        >
            <Text
                color={isActive? "$greenClaro": "$gray200"}
                textTransform="uppercase"
                fontSize={"$5"}
                fontWeight={"bold"}
            >
                {name}
            </Text>
        </Button>
    )
}