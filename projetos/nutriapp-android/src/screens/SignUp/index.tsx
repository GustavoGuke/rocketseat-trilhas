import { useState } from "react";
import { Alert, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import auth from '@react-native-firebase/auth';
import { AppNavigatorRoutesProps } from "@routes/app.routes";
import { ScreenDefault } from "@components/ScreenDefault";
import { ContenteDefault } from "@components/ContenteDefault";
import { useTheme } from "styled-components";
import { createUsers } from "@utils/firebase/firestore";



export function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { COLORS } = useTheme()
    const navigation = useNavigation<AppNavigatorRoutesProps>()


    async function handleSignUp() {

        if (email === '' || password === '') {
            return Alert.alert('Erro', 'Email e senha devem ser informados');
        }
        
        
        const useCredencial= await auth()
            .createUserWithEmailAndPassword(email.trim(), password.trim())
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                return Alert.alert('Erro - tirar msg qundo for subir o app', error.message);
        });
        const userDisplaName = auth().currentUser
        if(userDisplaName){userDisplaName.updateProfile({displayName: name})}
        createUsers(useCredencial?.user.uid, name, email, 'paciente')
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
          
                <ScreenDefault>
                    <ContenteDefault bgColor={COLORS.GREEN_100}>
                        <Input
                            placeholder='Nome'
                            border={1}
                            bgColor={COLORS.GREEN_100}
                            borderColor={COLORS.GREEN_700} 
                            onChangeText={setName}
                            value={name}
                            />

                        <Input
                            placeholder='Email'
                            border={1}
                            bgColor={COLORS.GREEN_100}
                            borderColor={COLORS.GREEN_700} 
                            onChangeText={setEmail}
                            value={email}/>
                        <Input
                            placeholder='Senha'
                            border={1}
                            bgColor={COLORS.GREEN_100}
                            borderColor={COLORS.GREEN_700} 
                            onChangeText={setPassword}
                            value={password}/>
                        <Input
                            placeholder='Confirme a Senha'
                            border={1}
                            bgColor={COLORS.GREEN_100}
                            borderColor={COLORS.GREEN_700} />
                        <Button title="Acessar" bgColor="green"
                            onPress={handleSignUp} />
                        <Button
                            bgColor={COLORS.ORANGE_300}
                            onPress={() => navigation.goBack()}
                            title="Voltar para o login"
                        />
                    </ContenteDefault>
                </ScreenDefault>
        </ScrollView>
    )
}