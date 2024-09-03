// create um componente ButtonCategory com pressable com tipagem pressableProps
import { Pressable, PressableProps, Text } from "react-native";
import { clsx } from 'clsx';
type ButtonCategoryProps = PressableProps & {
    title: string
    isSelected?: boolean
}

export function ButtonCategory({ title, isSelected = false, ...rest }: ButtonCategoryProps) {
    return (
        <Pressable
            {...rest}
            className={clsx('bg-slate-800 px-4  justify-center rounded-sm h-10', isSelected && 'border-2 border-lime-300')}
        >
            <Text
                className={`text-white font-semibold text-xs `}
            >
                {title}
            </Text>
        </Pressable>
    )
}

