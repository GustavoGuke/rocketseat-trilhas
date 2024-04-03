import { Avatar, AvatarProps, Button } from "tamagui";

type Props = AvatarProps & {
    size: number
    src: string
}

export function UserPhoto({size, src, ...rest}: Props){
    return (
        <Avatar circular size={size}  {...rest} mr={"$1"}>
            <Avatar.Image src={src} />
            <Avatar.Fallback backgroundColor={"$gray400"}/>
        </Avatar>
    )
}