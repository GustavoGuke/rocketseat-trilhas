import styled from 'styled-components/native';
import theme from '../../theme';
export const Container = styled.TouchableOpacity`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BRAND_MID};
`;

export const Title = styled.Text`
  color : ${theme.COLORS.WHITE};
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  text-align: center;
`;

export const LoadIndicator = styled.ActivityIndicator
    .attrs(() => ({
        color: theme.COLORS.WHITE
    }))``;