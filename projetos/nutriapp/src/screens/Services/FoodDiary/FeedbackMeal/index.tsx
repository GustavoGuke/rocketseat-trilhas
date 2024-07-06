import { ScreenDefault } from "@components/ScreenDefault";
import { Container } from "./style";
import HighLight from "@components/Higthlight";
import { Image } from "react-native";
import { useTheme } from "styled-components";
import { ButtonIcon } from "@components/ButtonIcon";
import { Button } from "@components/Button";

export function FeedbackMeal() {
    const { COLORS } = useTheme()
    return (    
       <ScreenDefault>
            <Container>
                <HighLight 
                bgColor={COLORS.GREEN_200}
                title="Continue assim!" 
                subtitle="Voce continua dentro da dieta. Muito bem!"/>
                <Image source={require("@assets/img/Illustration.png")}/>
                <Button title="Ir para o Diário Alimentar" bgColor={COLORS.GREEN_700}/>
            </Container>
       </ScreenDefault>        
    )
}