import { Input as TamaguiInput, InputProps } from 'tamagui'

export function Input({ ...rest }: InputProps) {
    return (
        <TamaguiInput
            borderWidth={0}
            bg={"$gray500"}
            placeholderTextColor={"$gray300"}
            px={16}
            width={'90%'}
            borderRadius={8}
            color={'white'}
            fontFamily={'$body'}
            fontSize={'$6'}
            height={44}
            mt={20}
            focusStyle={{
                borderWidth: 1,
                borderColor: "$greenClaro",
            }}
            {...rest}
        />
    )
}