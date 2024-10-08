import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    children: ReactNode
}

type ButtonText =  {
    children: ReactNode
}

type ButtonIcon = {
    children: ReactNode
}


function Button({ children, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            className="h-12 bg-lime-400 rounded-md items-center justify-center flex-row" 
            activeOpacity={0.7}
            {...rest}
        >
            {children}
        </TouchableOpacity>
    )
}

function ButtonText({ children }: ButtonText) {
    return (
        <Text className="text-black font-heading text-base mx-2" >
            {children}
        </Text>
    )
}

function ButtonIcon({ children}: ButtonIcon) {
    return children
}

Button.Text = ButtonText
Button.Icon = ButtonIcon
export default Button