import { cva, type VariantProps } from "class-variance-authority"
import Text from "./Text"


export const buttonVariants = cva(
    `flex items-center justify-center cursor-pointer transition rounded-lg group gap-2`,
    {
        variants:{
            variant: {
                primary: "bg-gray-200 hover:bg-pink-light"
            },
            size: {
                md: "h-14 py-4 px-5",
            },
            disabled: {
                true: "opacity-50 ponter-events-none",
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "md",
            disabled: false
        },
    }
)

export const buttonTextVariants = cva("",{
    variants: {
        variant: {
            primary: "text-gray-400"
        }
    },
    defaultVariants: {
        variant: "primary"
    }
})
interface ButtonProps 
    extends Omit<React.ComponentProps<"button">,"size" | "disabled">, 
    VariantProps<typeof buttonVariants> {}

export default function Button({
    variant,size,disabled,className,
    children, ...props}: ButtonProps) {
    return (
        <button className={buttonVariants({variant,size,disabled,className})} {...props}>
            <Text variant={"body-md-bold"} className={buttonTextVariants({variant})}>
                {children}
            </Text>
        </button>
    )
}