import styled from "styled-components/native";



export const Contente = styled.View`
    width:100%;
    flex-direction:row;
    padding:20px;
    border-radius: 26px;
    background-color:${(props) => props.theme.COLORS.GRAY_100};
    height:100px;
    align-items:center;
    justify-content:space-between;
`
export const Ystack = styled.View`
    flex-direction:column
`

export const Image = styled.ImageBackground`
  width: 80%;
  height: 100%;
`;



export const TitleServices = styled.Text`
    color: ${({ theme,}) => theme.COLORS.GRAY_700};
    font-size: ${({ theme, }) => theme.FONT_SIZE.LG}px;
    font-family:${(props) => props.theme.FONT_FAMILY.BOLD};
    
`
