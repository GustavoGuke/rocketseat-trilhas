import { useNavigation } from "@react-navigation/native";

import { useQuery, useRealm } from '../../libs/realm';
import { Historic } from "../../libs/realm/schemas/historic";

import { CarStatus } from "../../components/Card";
import { HomeHeader } from "../../components/HomeHeader";
import { Container, Content } from "./styles";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export function Home() {
    const [vehicleInUse, setVehicleInUse] = useState<Historic | null>(null)
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

    useEffect(() => {
        realm.addListener('change', () => fetchVehicleInUse())
        return () => realm.removeListener('change', fetchVehicleInUse);
    }, [])
    return (
        <Container>
            <HomeHeader />
            <Content>
                <CarStatus
                    licensePlate={vehicleInUse?.license_plate}
                    onPress={handleRegisterMoviment} />
            </Content>
        </Container>
    );
}