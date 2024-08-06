import { useNavigation } from "@react-navigation/native";
import { CloudArrowUp } from 'phosphor-react-native';
import { useUser } from '@realm/react';
import { useQuery, useRealm } from '../../libs/realm';
import { Historic } from "../../libs/realm/schemas/historic";

import { CarStatus } from "../../components/Card";
import { HomeHeader } from "../../components/HomeHeader";
import { TopMessage } from '../../components/TopMessage';
import { HistoricCard, HistoricCardProps } from "../../components/HistoricCard";

import { Container, Content, Label, Title } from "./styles";
import { useEffect, useState } from "react";
import { Alert, FlatList, Text } from "react-native";
import dayjs from "dayjs";
import { getLastAsyncTimestamp, saveLastSyncTimestamp } from "../../libs/asyncStorage/syncStorage";
import Toast from "react-native-toast-message";

export function Home() {
    const [vehicleInUse, setVehicleInUse] = useState<Historic | null>(null)
    const [historicList, setHistoricList] = useState<HistoricCardProps[]>([])
    const [percetageToSync, setPercentageToSync] = useState<string | null>(null);
    const { navigate } = useNavigation();
    const historic = useQuery(Historic);
    const realm = useRealm();
    const user = useUser();

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

    async function fetchHistoric() {

        try {
            const responde = historic.filtered("status = 'realizada' SORT(created_at DESC)");

            const lastSync = await getLastAsyncTimestamp();

            const formattedHistoric = responde.map((historic) => {
                return ({
                    id: historic._id.toString(),
                    licensePlate: historic.license_plate,
                    isSync: lastSync > historic.updated_at!.getTime(),
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

    async function progressNotification(transferred: number, transferable: number) {
        const percentage = (transferred / transferable) * 100;

        if (percentage === 100) {
            await saveLastSyncTimestamp();
            await fetchHistoric();
            setPercentageToSync(null);

            Toast.show({
                type: 'info',
                text1: 'Todos os dados estão sincronizado.'
            })
        }

        if (percentage < 100) {
            setPercentageToSync(`${percentage.toFixed(0)}% sincronizado.`)
        }
    }

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

    useEffect(() => {
        realm.subscriptions.update((mutableSubs, realm) => {
            const historicByUserQuery = realm.objects('Historic').filtered(`user_id = '${user!.id}'`);

            mutableSubs.add(historicByUserQuery, { name: 'hostoric_by_user' });
        })
    }, [realm]);

    useEffect(() => {
        const syncSession = realm.syncSession;

        if (!syncSession) {
            return;
        }

        syncSession.addProgressNotification(
            Realm.ProgressDirection.Upload,
            Realm.ProgressMode.ReportIndefinitely,
            progressNotification
        )

        return () => {
            syncSession.removeProgressNotification(progressNotification);
        }
    }, []);

    return (
        <Container>

            {
                percetageToSync && <TopMessage title={percetageToSync} icon={CloudArrowUp} />
            }
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