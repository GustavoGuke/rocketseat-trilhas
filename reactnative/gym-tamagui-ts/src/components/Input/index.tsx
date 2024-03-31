import { Input as TamaguiInput, InputProps } from 'tamagui'

export function Input({ ...rest }: InputProps) {
    return (
        <TamaguiInput
            borderWidth={0}
            bg={"$gray500"}
            placeholderTextColor={"$gray300"}
            px={16}
            width={'100%'}
            borderRadius={8}
            color={'white'}
            fontSize={'$6'}
            height={54}
            mt={20}
            focusStyle={{
                borderWidth: 1,
                borderColor: "$greenClaro",
            }}
            {...rest}
        />
    )
}