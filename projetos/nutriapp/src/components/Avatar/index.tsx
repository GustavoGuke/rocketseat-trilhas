import { AvatarContainer, AvatarImage, AvatarText } from "./style";

const Avatar = ({ size, imageUri, backgroundColor, initials }) => {
    return (
      <AvatarContainer size={size} backgroundColor={backgroundColor}>
        {imageUri ? (
          <AvatarImage source={{ uri: imageUri }} />
        ) : (
          <AvatarText size={size}>{initials}</AvatarText>
        )}
      </AvatarContainer>
    );
  };
  
  export default Avatar;