import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { View } from 'tamagui';
import { gray, green } from '@tamagui/colors';
import { Ionicons } from '@expo/vector-icons';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootScreenNavigationProp } from '../../types/rotas';

type ParamList = {
  Login: {
    email: string,
    password: string
  }
}

const Login: React.FC = () => {
  const route = useRoute<RouteProp<ParamList>>()
  return (
    <View flex={1} justifyContent='center' alignItems='center' backgroundColor='$green7'>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={gray.gray10}
        value={route.params.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor={gray.gray10}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dda743', // Use a cor verde claro
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: green.green10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;
