import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    padding-left:16px;
    padding-right:16px;
`

export const Content = styled.View`
    flex:1;
    margin-top: 20px;
    justify-content:center;
   
`

export const ImageContainer = styled.ImageBackground`
    flex:1;
 
    padding:10px;
    opacity:0.6;
    
    
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: ${(props) => props.theme.FONT_SIZE.MD}px;
    font-family:${(props) => props.theme.FONT_FAMILY.BOLD};
    align-self: center;
`


export const TitleHeading = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: ${(props) => props.theme.FONT_SIZE.LG}px;
    font-family:${(props) => props.theme.FONT_FAMILY.BOLD};
    align-self: center;
    margin-top:20px;
    margin-bottom:-20px;

`