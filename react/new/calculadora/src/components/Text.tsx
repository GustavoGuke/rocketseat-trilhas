

type Props = {
    children?: React.ReactNode,
    variant?: 'default' | 'muted' | 'heading' | 'blast'
} & React.HTMLAttributes<HTMLSpanElement>
export function Text({ children, variant = 'default' }: Props) {
    const variants = {
        default: 'text-xl',
        muted: 'text-xl text-(--text-secondary)',
        heading: 'text-2xl',
        blast: 'text-3xl '

    }
    return (
        <span className={`${variants[variant]}`}>
            {children}
        </span>
    )
}