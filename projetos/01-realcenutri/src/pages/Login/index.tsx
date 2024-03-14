import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { View } from 'tamagui';
import { gray, green } from '@tamagui/colors';
import { Ionicons } from '@expo/vector-icons';

const Login: React.FC = () => {
  return (
    <View flex={1} justifyContent='center' alignItems='center' backgroundColor='$green10'>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={gray.gray10}
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
    backgroundColor: green.green8, // Use a cor verde claro
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
