import { useRef } from 'react';
import { TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import { Container, Content } from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { LicensePlateInput } from '../../components/LicensePlateInput';
import { TextAreaInput } from '../../components/TextAreaInput';


const keyboardAvoidingViewBehavior = Platform.OS === 'android' ? 'height' : 'position';
export function Departure() {

    const descriptionRef = useRef<TextInput>(null);

    return (
        <Container>
            <Header title='Saída' />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={keyboardAvoidingViewBehavior}>
                <ScrollView>
                    <Content>
                        <LicensePlateInput
                            onSubmitEditing={() => descriptionRef.current?.focus()}
                            label='Placa do veículo'
                            placeholder='BRA-1234'
                            returnKeyType='next'
                        />

                        <TextAreaInput
                            ref={descriptionRef}
                            label='finalidade'
                            placeholder='O veículo foi usado para ...' />

                        <Button title='Registrar saída' onPress={() => { }} />
                    </Content>
                </ScrollView>
            </KeyboardAvoidingView>
        </Container>
    );
}