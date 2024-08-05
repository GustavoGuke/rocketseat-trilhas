import { useNavigation } from "@react-navigation/native";

import { useQuery, useRealm } from '../../libs/realm';
import { Historic } from "../../libs/realm/schemas/historic";

import { CarStatus } from "../../components/Card";
import { HomeHeader } from "../../components/HomeHeader";
import { Container, Content, Label, Title } from "./styles";
import { useEffect, useState } from "react";
import { Alert, FlatList, Text } from "react-native";
import { HistoricCard, HistoricCardProps } from "../../components/HistoricCard";
import dayjs from "dayjs";

export function Home() {
    const [vehicleInUse, setVehicleInUse] = useState<Historic | null>(null)
    const [historicList, setHistoricList] = useState<HistoricCardProps[]>([])
    const { navigate } = useNavigation();
    const historic = useQuery(Historic);
    const realm = useRealm();

    function handleRegisterMoviment() {
        if (!vehicleInUse?._id) {
            return navigate("Departure");
        }
        return navigate("Arrival", { id: vehicleInUse?._id.toString() });
    }

    function fetchVehicleInUse() {
        try {
            const vehicle = historic.filtered("status = 'pendente'")[0]
            setVehicleInUse(vehicle)
        } catch (error) {
            Alert.alert("Veiculo em uso", "Não foi possivel carregar o veiculo em uso")
        }
    }

    function fetchHistoric() {

        try {
            const responde = historic.filtered("status = 'realizada' SORT(created_at DESC)");

            const formattedHistoric = responde.map((historic) => {
                return ({
                    id: historic._id.toString(),
                    licensePlate: historic.license_plate,
                    isSync: false,
                    created: dayjs(historic.created_at).format("DD/MM/YYYY HH:mm"),
                })
            })

            setHistoricList(formattedHistoric)
        } catch (error) {
            console.log(error)
        }

    }

    function handleHistoricDetails(id: string) {
        navigate("Arrival", { id })
    }
    useEffect(() => {
        fetchVehicleInUse()
    }, [])

    useEffect(() => {
        realm.addListener('change', () => fetchVehicleInUse())
        return () => {
            if (realm && !realm.isClosed){
                realm.removeListener('change', fetchVehicleInUse);
            }
        }
    }, [])

    useEffect(() => {
        fetchHistoric()
    }, [historic])
    return (
        <Container>
            <HomeHeader />
            <Content>
                <CarStatus
                    licensePlate={vehicleInUse?.license_plate}
                    onPress={handleRegisterMoviment} />

                <Title>Historico</Title>
                <FlatList
                    data={historicList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) =>
                        <HistoricCard
                            data={item}
                            onPress={() => handleHistoricDetails(item.id)} />
                    }
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 100 }}
                    ListEmptyComponent={() =>
                        <Label>Nenhum veiculo utilizado</Label>}
                />

            </Content>
        </Container>
    );
}