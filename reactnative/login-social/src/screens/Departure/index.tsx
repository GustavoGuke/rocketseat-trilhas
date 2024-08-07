import { useRef, useState, useEffect } from 'react';
import { TextInput, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useUser } from '@realm/react';
import { useNavigation } from '@react-navigation/native';
import {
    LocationAccuracy, LocationSubscription, useForegroundPermissions, 
    watchPositionAsync,LocationObjectCoords } from 'expo-location';
import { CarSimple } from 'phosphor-react-native';

import { useRealm } from '../../libs/realm';

import { Container, Content, Message } from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { LicensePlateInput } from '../../components/LicensePlateInput';
import { TextAreaInput } from '../../components/TextAreaInput';
import { Map } from '../../components/Map';


import { licensePlateValidate } from '../../utils/licencePlateValidate';
import { Historic } from '../../libs/realm/schemas/historic';
import { getAddressLocation } from '../../utils/getAddessLocation';
import { Loading } from '../../components/Loading';
import { LocationInfo } from '../../components/LocationInfo';


const keyboardAvoidingViewBehavior = Platform.OS === 'android' ? 'height' : 'position';
export function Departure() {
    const [description, setDescription] = useState('')
    const [licensePlate, setLicensePlate] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isLoadingLocation, setIsLoadingLocation] = useState(true)
    const [currentAddress, setCurrentAddress] = useState<string | null>(null)
    const [currentCoords, setCurrentCoords] = useState<LocationObjectCoords | null>(null)

    const [locationForegroundPermission, requestLocationForegroundPermission] = useForegroundPermissions();
    const { goBack } = useNavigation()
    const realm = useRealm();
    const user = useUser();
    const descriptionRef = useRef<TextInput>(null);
    const licensePlateRef = useRef<TextInput>(null);


    function handleDepartureRegister() {

        try {
            if (!licensePlateValidate(licensePlate)) {
                licensePlateRef.current?.focus();
                return Alert.alert('Placa inválida', 'A placa é inválida. Por favor, informa a placa correta.')
            }

            if (!description.trim()) {
                descriptionRef.current?.focus();
                return Alert.alert('Finalidade inválida', 'Por favor, informe a finalidade da saída.')
            }

            setIsLoading(true);
            realm.write(() => {
                realm.create('Historic', Historic.generate({
                    user_id: user!.id,
                    license_plate: licensePlate.toUpperCase(),
                    description
                }))
            })

            Alert.alert('Sucesso', 'Sua saída foi registrada com sucesso.')
            goBack();
        } catch (error) {
            console.log(error)
            Alert.alert('Erro ao registrar saída', 'Por favor, tente novamente mais tarde.')
            setIsLoading(false);
        }

    }

    useEffect(() => {
        requestLocationForegroundPermission();
    }, [])

    useEffect(() => {
        if (!locationForegroundPermission?.granted) {
            console.log('Permission to access location was denied');
            return;
        }

        let subscription: LocationSubscription;
        watchPositionAsync({
            accuracy: LocationAccuracy.High,
            timeInterval: 1000,
        }, (location) => {
            setCurrentCoords(location.coords)
            getAddressLocation(location.coords)
                .then(address => {
                    if (address) {
                        setCurrentAddress(address)
                        console.log(address)
                    }
                })
                .finally(() => {
                    setIsLoadingLocation(false)
                })
        })
            .then((response) => subscription = response)

        return () => {
            if (subscription) {
                subscription.remove()
            }
        };
    }, [locationForegroundPermission])


    if (!locationForegroundPermission?.granted) {
        return (
            <Container>
                <Header title='Saída' />
                <Message>
                    Você precisa permitir que o aplicativo tenha acesso a
                    localização para acessar essa funcionalidade. Por favor, acesse as
                    configurações do seu dispositivo para conceder a permissão ao aplicativo.
                </Message>
            </Container>
        )
    }

    if (isLoadingLocation) {
        return (
            <Container>
                <Header title='Saída' />
                <Message>
                    Carregando...
                </Message>
                <Loading />
            </Container>
        )
    }
    console.log(locationForegroundPermission)
    return (
        <Container>
            <Header title='Saída' />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={keyboardAvoidingViewBehavior}>
                <ScrollView>
                    {currentCoords && <Map coordinates={[currentCoords]} />}
                    <Content>
                        {
                            currentAddress &&
                            <LocationInfo
                                icon={CarSimple}
                                label='Localização atual'
                                description={currentAddress}
                            />
                        }
                        <LicensePlateInput
                            ref={licensePlateRef}
                            onSubmitEditing={() => descriptionRef.current?.focus()}
                            label='Placa do veículo'
                            placeholder='BRA-1234'
                            returnKeyType='next'
                            onChangeText={setLicensePlate}
                            value={licensePlate}
                        />

                        <TextAreaInput
                            ref={descriptionRef}
                            label='finalidade'
                            placeholder='O veículo foi usado para ...'
                            onChangeText={setDescription}
                            value={description}
                        />

                        <Button
                            title='Registrar saída'
                            onPress={handleDepartureRegister}
                            isLoading={isLoading}
                        />
                    </Content>
                </ScrollView>
            </KeyboardAvoidingView>
        </Container>
    );
}