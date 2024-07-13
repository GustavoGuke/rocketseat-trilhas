import styled from "styled-components/native";

type PropsText ={
    color?:string
    size?:number
    weigth?:string
}

type PropsButton = {
    bgColor?:string
    alignin?: string
}

type PropsXstack = {
    bgColor?:string
    alignin?: string
}

export const ImageContainer = styled.ImageBackground`
    flex:1;
    opacity:0.6;
    margin-bottom:-90px;
`

export const Ystack = styled.View`
    margin:20px 0px;
`

export const Xstack = styled.View<PropsXstack>`
    margin-bottom:10px;
    flex-direction:row;
    align-items: ${({ alignin }) => alignin || "center"};
    justify-content: ${({ alignin }) => alignin || "center"};
   gap:5px;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.ORANGE_500};
    font-size: ${(props) => props.theme.FONT_SIZE.XX}px;
    font-family:${(props) => props.theme.FONT_FAMILY.BOLD};
    text-align:center;
    

`
export const Text = styled.Text<PropsText>`
    color: ${({ theme, color }) =>color || theme.COLORS.GRAY_100};
    font-size: ${( {theme, size}) =>  size || theme.FONT_SIZE.LG}px;
    font-family:${({ theme, weigth }) => weigth === "regular" ? theme.FONT_FAMILY.REGULAR : theme.FONT_FAMILY.BOLD};
    
`
export const ButtonSignIn = styled.TouchableOpacity<PropsButton>`
    background-color: ${({ theme, bgColor }) => bgColor || theme.COLORS.GRAY_700};
    padding: 10px 0px;
    border-radius: 6px;
`