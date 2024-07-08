import { AvatarContainer, AvatarImage, AvatarText } from "./style";
import {ImageSourcePropType} from 'react-native'

type AvatarPros = {
  size?: number,
  imageUri?:ImageSourcePropType
  initials?: string 

}

const Avatar = ({ size, imageUri, initials }: AvatarPros) => {
    return (
      <AvatarContainer size={size} >
        {imageUri ? (
          <AvatarImage source={imageUri} />
        ) : (
          <AvatarText size={size}>{initials}</AvatarText>
        )}
      </AvatarContainer>
    );
  };
  
  export default Avatar;