import styled from "styled-components/native";

type Props = {
    bgColor?: string
    sizeText?: number
}

export const Container = styled.TouchableOpacity<Props>`
    width: 100%;
    /* margin: 10px 0; */
    background-color:${({ theme, bgColor }) => bgColor || theme.COLORS.GREEN_200};
    padding:24px;
    border-radius:8px;
    flex-direction:row;
`

export const Title = styled.Text<Props>`
    text-align: center;
    font-size: ${({ theme, sizeText }) => (sizeText || 50 / 2.5) }px;
    font-family: ${(props) => props.theme.FONT_FAMILY.BOLD};
    color: ${(props) => props.theme.COLORS.GRAY_700};
`

export const Subtitle = styled.Text`
    text-align: center;
    font-size: ${(props) => props.theme.FONT_SIZE.MD}px;
    font-family: ${(props) => props.theme.FONT_FAMILY.REGULAR};
    color: ${(props) => props.theme.COLORS.GRAY_500};
`
