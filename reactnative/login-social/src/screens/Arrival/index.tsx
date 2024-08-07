import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { X } from 'phosphor-react-native';
import { BSON } from 'realm';
import { LatLng } from 'react-native-maps';
import { Container, Content, Description, Footer, Label, LicensePlate } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Map } from '../../components/Map';
import { useObject, useRealm } from '../../libs/realm';
import { Historic } from '../../libs/realm/schemas/historic';
import { stopLocationTask } from '../../tasks/backgroundLocation';
import { getLastAsyncTimestamp } from '../../libs/asyncStorage/syncStorage';
import { getStorageLocations } from '../../libs/asyncStorage/location';
import { Locations } from '../../components/Location';
import { LocationInfoProps } from '../../components/LocationInfo';
import { getAddressLocation } from '../../utils/getAddessLocation';
import dayjs from 'dayjs';
import { Loading } from '../../components/Loading';
type RouteParamProps = {
    id: string;
}

export function Arrival() {
    const [dataNotSynced, setDataNotSynced] = useState(false);
    const [coordinates, setCoordinates] = useState<LatLng[]>([])
    const [departure, setDeparture] = useState<LocationInfoProps>({} as LocationInfoProps)
    const [arrival, setArrival] = useState<LocationInfoProps | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const route = useRoute();
    const { id } = route.params as RouteParamProps;
    const realm = useRealm();
    const { goBack } = useNavigation();
    const historic = useObject(Historic, new BSON.UUID(id) as unknown as string)

    function handleRemoveVehicleUsage() {
        Alert.alert(
            'Cancelar',
            'Cancelar a utilização do veículo?',
            [
                { text: 'Não', style: 'cancel' },
                { text: 'Sim', onPress: () => removeVehicleUsage() },
            ]
        )
    }

    async function removeVehicleUsage() {
        realm.write(() => {
            realm.delete(historic)
        });

        await stopLocationTask();

        goBack();
    }

    async function handleRegisterArrival() {
        try {
            if (!historic) {
                return Alert.alert('Erro ao registrar chegada', 'Por favor, tente novamente mais tarde.');
            }
            const locations = await getStorageLocations();
            realm.write(() => {
                historic.status = 'realizada';
                historic.updated_at = new Date();
                historic.coords.push(...locations)
            });

            await stopLocationTask();
            Alert.alert('Chegada', 'Chegada registrada com sucesso')
            
            goBack();
        } catch (error) {
            console.log(error)
            Alert.alert('Erro ao registrar chegada', 'Por favor, tente novamente mais tarde.')
        }
    }
    async function getLocationsInfo() {

        if (!historic) {
            return
        }

        const lastSync = await getLastAsyncTimestamp();
        const updatedAt = historic!.updated_at.getTime();
        setDataNotSynced(updatedAt > lastSync);

        if (historic?.status === 'departure') {
            const locationsStorage = await getStorageLocations();
            setCoordinates(locationsStorage);
        } else {
            setCoordinates(historic?.coords ?? []);
        }
        // const locationsStorage = await getStorageLocations();
        // setCoordinates(locationsStorage)

        if (historic?.coords[0]) {
            const departureStreetName = await getAddressLocation(historic?.coords[0])

            setDeparture({
                label: `Saíndo em ${departureStreetName ?? ''}`,
                description: dayjs(new Date(historic?.coords[0].timestamp)).format('DD/MM/YYYY [às] HH:mm')
            })
        }

        if (historic?.status === 'arrival') {
            const lastLocation = historic.coords[historic.coords.length - 1];
            const arrivalStreetName = await getAddressLocation(lastLocation)

            setArrival({
                label: `Chegando em ${arrivalStreetName ?? ''}`,
                description: dayjs(new Date(lastLocation.timestamp)).format('DD/MM/YYYY [às] HH:mm')
            })
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getLocationsInfo()
    }, [historic])

    if (isLoading) {
        return <Loading />
    }

    return (
        <Container>
            <Header title='Chegada' />
            {coordinates.length > 0 && (
                <Map coordinates={coordinates} />
            )}
            <Content>

                <Locations 
                    departure={departure}
                    arrival={arrival}
                />

                <Label>
                    Placa do veículo
                </Label>

                <LicensePlate>
                    {historic?.license_plate}
                </LicensePlate>

                <Label>
                    Finalidade
                </Label>

                <Description>
                    {historic?.description}
                </Description>


                {
                    historic?.status === 'pendente' &&
                    <Footer>
                        <ButtonIcon icon={X} onPress={handleRemoveVehicleUsage} />
                        <Button title='Registrar chegada' onPress={handleRegisterArrival} />
                    </Footer>
                }
            </Content>
        </Container>
    );
}