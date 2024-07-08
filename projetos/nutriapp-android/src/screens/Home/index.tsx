import { FlatList, Text } from "react-native";
import { Container, Content } from "./style";
import { Header } from "@components/Header";
import { Title } from "@components/Title";
import { useTheme } from "styled-components/native";
import { CardServices } from "@components/CardServices";

import backgroundImg  from "../../assets/img/bg-diario-alimentar.png"
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/app.routes";

export function Home(){
    const [service, setService] = useState(["Diário Alimentar"])
    const {COLORS} = useTheme()
    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleOpenService(){
        navigation.navigate('FoodDiary')
    }
    return (
        <Container>
           <Header />
           <Content>
            <Title text="Serviços" color={COLORS.ORANGE_500} size={24}/>
            <FlatList 
                data={service}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <CardServices onPress={handleOpenService} title={item} imgBackground={backgroundImg}/>
                )}
            />
           </Content>
        </Container>
    )
}