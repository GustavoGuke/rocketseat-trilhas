import styled from "styled-components/native";

type Props = {
    bgColor?: string
}
type PropsText = {
    size?: number,
    align?: string
    weight?: string
}
type PropsButton = PropsText & {
    bgColor?: string
}


export const Xstack = styled.View<Props>`
    width:100%;
    flex-direction:row;
    margin-bottom:30px;
    align-items:center;
    gap:12px;
    background-color: ${({ theme, bgColor }) => bgColor || theme.COLORS.WHITE};
`

export const Button = styled.TouchableOpacity<PropsButton>`
     width:100%;
    height: 46px;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    border-radius:6px;
    gap:5px;
    margin-bottom:10px;
    padding:8px ;
    background-color:${({ theme, bgColor }) => (bgColor || theme.COLORS.ORANGE_100)};
`

export const Text = styled.Text<PropsText>`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-size: ${(props) => (props.size || 40) / 2.5}px;
  font-weight: ${(props) => (props.weight || props.theme.FONT_FAMILY.REGULAR)};
  text-align: ${(props) => (props.align || "center")};
`;
