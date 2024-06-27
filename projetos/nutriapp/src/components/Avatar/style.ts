
import styled from 'styled-components/native';

// Container que pode ser um View com bordas redondas
export  const AvatarContainer = styled.View`
  width: ${(props) => props.size || 50}px;
  height: ${(props) => props.size || 50}px;
  border-radius: ${(props) => (props.size || 50) / 2}px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.COLORS.GRAY_600};
`;

// Imagem que será exibida dentro do Avatar
export const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;
`;

// Texto usado como fallback quando não há imagem
export const AvatarText = styled.Text`
  color: #fff;
  font-size: ${(props) => (props.size  || 50) / 2.5}px;
  font-weight: bold;
`;

