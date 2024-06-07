import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.COLORS.GRAY_600};
`

export const Content = styled.View`
    padding:24px;
`

export const ContentForm = styled.View`
    width: 100%;
    flex-direction:row;
    margin-Top: -50px;
    margin-Bottom: 32px;
`

export const HeaderList = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    
    margin: 12px 0 12px;
`
export const TextHeader = styled.Text<{ $headerText?: boolean; }>`
    
    color: ${props => props.$headerText ? props.theme.COLORS.BLUE : props.theme.COLORS.PURPLE};
    font-family: ${props => props.theme.FONT_FAMILY.BOLD};
    font-size: ${props => props.theme.FONT_SIZE.MD}px;
`
