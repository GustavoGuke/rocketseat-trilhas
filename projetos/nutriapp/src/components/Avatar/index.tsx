import { AvatarContainer, AvatarImage, AvatarText } from "./style";


type AvatarPros = {
  size?: number,
  imageUri?:string,
  initials?: string 

}

const Avatar = ({ size, imageUri, initials }: AvatarPros) => {
    return (
      <AvatarContainer size={size} >
        {imageUri ? (
          <AvatarImage source={{ uri: imageUri }} />
        ) : (
          <AvatarText size={size}>{initials}</AvatarText>
        )}
      </AvatarContainer>
    );
  };
  
  export default Avatar;