import styled from "styled-components/native";

export const Contente = styled.View`
    width:100%;
    flex-direction:row;
   
    border-radius: 20px;
    background-color:${(props) => props.theme.COLORS.ORANGE_200};
    height:100px;
    /* align-items:center;
    justify-content:space-between; */
`
export const Ystack = styled.View`
    flex-direction:column
`

export const Image = styled.ImageBackground`
  width: 100%;
  height: 100%;
  border-radius:50px;
  padding:2px;
`;

export const TitleServices = styled.Text`
    text-shadow:1px 1px 2px black;;
    color: ${({ theme,}) => theme.COLORS.WHITE};
    font-size: ${({ theme, }) => theme.FONT_SIZE.LG}px;
    font-family:${(props) => props.theme.FONT_FAMILY.BOLD};
    padding:5px;
    
`
