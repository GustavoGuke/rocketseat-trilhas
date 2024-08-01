import { useRef, useState } from 'react';
import { TextInput, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useUser } from '@realm/react';
import { useRealm } from '../../libs/realm';

import { Container, Content } from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { LicensePlateInput } from '../../components/LicensePlateInput';
import { TextAreaInput } from '../../components/TextAreaInput';
import { licensePlateValidate } from '../../utils/licencePlateValidate';
import { Historic } from '../../libs/realm/schemas/historic';
import { useNavigation } from '@react-navigation/native';


const keyboardAvoidingViewBehavior = Platform.OS === 'android' ? 'height' : 'position';
export function Departure() {
    const [description, setDescription] = useState('')
    const [licensePlate, setLicensePlate] = useState('')
    const [isLoading, setIsLoading] = useState(false)

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

    return (
        <Container>
            <Header title='Saída' />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={keyboardAvoidingViewBehavior}>
                <ScrollView>
                    <Content>
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