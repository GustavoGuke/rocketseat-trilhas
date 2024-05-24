import { TouchableOpacity} from "react-native";
import styled from "styled-components/native";


export const Container = styled(TouchableOpacity)`
    width: 56px;
    height:56px;
    background-color: ${props => props.theme.COLORS.BLUE} ;
    justify-content: center;
    align-items: center;

    border-radius: 6px;
    margin-left:4px;
`

export const TextButton = styled.Text`
    color: ${props => props.theme.COLORS.WHITE} ;
    font-size: ${props => props.theme.FONT_SIZE.XL}px;
`