
type Props = {
    children?: React.ReactNode,
    variant?: 'primary' | 'secondary' | undefined
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, variant = 'primary', ...rest }: Props) {
    return (
        <button
            className={`flex items-center justify-center 
                rounded-xl p-3 cursor-pointer text-(--text-white2) 
                bg-linear-(--gradient) hover:bg-liner-(--gradient-hover) 
                shadow-(--shadow) ${variant === 'secondary' ? 'bg-(--primary)' : 'bg-(--background)'}`}
            {...rest}    
        >
            {children}
        </button>
    )
}