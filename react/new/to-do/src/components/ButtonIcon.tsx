import { cva, type VariantProps } from "class-variance-authority";
import { icons } from "../icons/icons";


export const buttonIconVariants = cva(`
    inline-flex items-center justfy-center cursor-pointer transition group:
    `,{
        variants: {
            variant: {
                primary: "bg-green-base hover:bg-green-dark",
                secondary: "bg-pink-base hover:bg-pink-dark",
                tertiary: "bg-transparent hover:bg-gray-200"
            },
            size: {
                sm: "w-6 h-6 p-1 rounded",
            },
            disabled: {
                true: "opacity-50 pointer-events-none"
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "sm",
            disabled: false
        }
    })

type IconName =  keyof typeof icons;

interface ButtonIconProps extends VariantProps<typeof buttonIconVariants>,
Omit<React.ComponentProps<"button">,"size" | "disabled"> 
{}
interface SvgProps extends React.ComponentProps<"svg"> { }

interface ButtonProps {
    name: IconName;
    variant?: "primary" | "secondary" | "tertiary";
    size?: "sm";
    className?: string;
    buttonProps?: ButtonIconProps;
    svgProps: SvgProps;
}

export function ButtonIcon({name, variant, size, className, svgProps, ...buttonProps}: ButtonProps) {
    const Icon = icons[name];
    return (
        <button className={buttonIconVariants({variant, size, className})} {...buttonProps}>
            <Icon {...svgProps} />
        </button>
    )
}