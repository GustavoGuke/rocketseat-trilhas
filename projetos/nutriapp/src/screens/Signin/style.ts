import styled from "styled-components/native";

type PropsText ={
    alignin?:string
    color?:string
    size?:number
}

export const ImageContainer = styled.ImageBackground`
    flex:1;
    opacity:0.6;
    margin-bottom:-90px;
`

export const Ystack = styled.View`
    margin:20px 0px;
`

export const Xstack = styled.View`
    margin-bottom:10px;
    flex-direction:row;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.ORANGE_500};
    font-size: ${(props) => props.theme.FONT_SIZE.XX}px;
    font-family:${(props) => props.theme.FONT_FAMILY.BOLD};
    text-align:center;

`
export const TitleHeading = styled.Text<PropsText>`
    color: ${({ theme, color }) =>color || theme.COLORS.GRAY_100};
    font-size: ${( {theme, size}) =>  size || theme.FONT_SIZE.LG}px;
    font-family:${(props) => props.theme.FONT_FAMILY.BOLD};
    align-self: ${({alignin}) => alignin || "center"};
  


`
