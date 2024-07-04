import styled from "styled-components/native";


export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    bgColor?: ButtonTypeStyleProps
}

export const Container = styled.TouchableOpacity<Props>`
    width: 100%;
    margin: 10px 0;
    background-color:${({theme, bgColor}) => bgColor === 'PRIMARY' ? theme.COLORS.GREEN_200 : theme.COLORS.RED_LIGHT};
    padding:24px;
    border-radius:8px;
    flex-direction:row;
`

export const Title = styled.Text`
    text-align: center;
    font-size: ${(props) => props.theme.FONT_SIZE.XX}px;
    font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
    color: ${(props) => props.theme.COLORS.GRAY_700};
`

export const Subtitle = styled.Text`
    text-align: center;
    font-size: ${(props) => props.theme.FONT_SIZE.MD}px;
    font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
    color: ${(props) => props.theme.COLORS.GRAY_500};
`
export const Xstack = styled.View`
    
`