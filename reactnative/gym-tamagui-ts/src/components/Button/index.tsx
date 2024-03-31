import { Button as TamaguiButton, ButtonProps, Text } from 'tamagui'


type Props = ButtonProps & {
    title: string
}
export function Button({ title, variant, ...rest }: Props) {
    return (
        <TamaguiButton
            h={54}
            mt={20}
            width={'100%'}
            borderRadius={8}
            borderWidth={variant === "outlined" ? 1 : 0}
            bg={variant === "outlined" ? " transparent" : "$greenEscuro"}
            borderColor={"$greenClaro"}
            pressStyle={{
                bg: variant === "outlined" ? "$gray500" : "$greenClaro",
                borderWidth: 0,

            }}
            {...rest}
        >
            <Text
                color={variant === "outlined" ? "$greenClaro" : "$gray100"}
                fontSize={'$6'}
                fontFamily={'$heading'}
            >
                {title}
            </Text>
        </TamaguiButton>
    )
}