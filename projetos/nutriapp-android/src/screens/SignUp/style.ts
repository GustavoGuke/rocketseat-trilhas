import styled from "styled-components/native";


type PropsText = {
    alignin?: string
    color?: string
    size?: number
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    padding:20px;
`

export const Content = styled.View`
    flex:1;
    justify-content:center;
    padding:10px;
   
`

export const ImageContainer = styled.ImageBackground`
    flex:1;
    opacity:0.6;
    margin-bottom:-90px;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: ${(props) => props.theme.FONT_SIZE.LG}px;
    font-family:${(props) => props.theme.FONT_FAMILY.BOLD};
`


export const TitleHeading = styled.Text<PropsText>`
    color: ${({ theme, color }) => color || theme.COLORS.GRAY_100};
    font-size: ${({ theme, size }) => size || theme.FONT_SIZE.LG}px;
    font-family:${(props) => props.theme.FONT_FAMILY.BOLD};
    align-self: ${({ alignin }) => alignin || "center"};
  
    margin-bottom:-20px;

`