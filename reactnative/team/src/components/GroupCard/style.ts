import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { UsersThree } from "phosphor-react-native";


export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 90px;

    background-color: ${(props: { theme: { COLORS: { GRAY_500: any; }; }; }) => props.theme.COLORS.GRAY_500};
    border-radius: 6px;

    flex-direction: row;
    align-items: center;
    padding: 24px;
    margin-bottom: 12px;
`

export const Title = styled.Text`
    font-size: ${(props: { theme: { FONT_SIZE: { MD: any; }; }; }) => props.theme.FONT_SIZE.MD}px;
    font-family: ${(props: { theme: { FONT_FAMILY: { REGULAR: any; }; }; }) => props.theme.FONT_FAMILY.REGULAR};
    color: ${(props: { theme: { COLORS: { GRAY_200: any; }; }; }) => props.theme.COLORS.GRAY_200};

`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  weight: 'fill',
  size: 32,
  color: theme.COLORS.GREEN_500
}))`

    margin-right: 20px
`