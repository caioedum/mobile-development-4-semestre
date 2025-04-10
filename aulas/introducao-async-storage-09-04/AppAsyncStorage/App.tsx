import React,  { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
// Importa o AsyncStorage para armazenamento local
import AsyncStorage from '@react-native-async-storage/async-storage';

//Importa o componente RestrictedScreen
import RestrictedScreen from './screen/RestrictedScreen'; 

// Define a interface para as propriedades da tela inicial
interface HomeScreenProps {
  navigation: any; // Define o tipo da propriedade "navigation"
}
// Define a tela inicial do aplicativo
const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [loggedIn, setLoggedIn] = useState(false); // Estado que controla o login
  const [username, setUsername] = useState(''); // Estado que armazena o nome de usuário

// Efeito colateral que verifica se o usuário já está logado ao carregar a tela
useEffect(() => {
  // Verifica se o usuário já está logado ao carregar a tela
  AsyncStorage.getItem('username').then(value => {
    if (value) {
      setLoggedIn(true); // Define loggedIn como true se o usuário estiver logado
      setUsername(value); // Define o nome de usuário armazenado
    }
  });
  // Limpa o estado de login ao desmontar o componente
}, []);


// Função para lidar com o processo de login
const handleLogin = async () => {
  if (username === 'caio') {
    // Verifica se o nome de usuário é "vinny"
    await AsyncStorage.setItem('username', username); // Armazena o nome de usuário
    setLoggedIn(true); // Define loggedIn como true após o login bem-sucedido
    // Navega para a tela restrita após o login bem-sucedido
    navigation.navigate('Restricted'); 
  } else {
    // Exibe um alerta se o nome de usuário não for "vinny"
    Alert.alert('Ops!', 'User não cadastrado', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancelou'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('Botão pressionado')},
    ]);
  }
};

//Função para fazer logout 
const handleLogout = async () => {
  await AsyncStorage.removeItem('username'); //Remove o nome de usuário 
  setLoggedIn(false); //Define login como falso
};

//Tela inicial com base no estado e login 
return (
  <View style={styles.container}>
    {loggedIn ? ( // Renderização condicional com base no estado de login
      <>
        <Text>Bem-vindo nome do usuário:, {username}!</Text>
        <Button title="Sair" onPress={handleLogout} />
      </>
    ) : (
      <>
        <Text>Login</Text>
        <TextInput
          placeholder="Nome de usuário"
          value={username}
          onChangeText={text => setUsername(text)}
          style={styles.input}
        />
        <Button title="Entrar" onPress={handleLogin} />
      </>
    )}
  </View>
);
};

// Define o navegador de pilha para o aplicativo
const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen, // Define a tela inicial
    Restricted: RestrictedScreen, // Adiciona a tela restrita ao navegador
  },
  {
    initialRouteName : 'Home', // Define a tela inicial do navegador
  },
)

 // Exporta o navegador como o aplicativo principal
export default createAppContainer(AppNavigator);


// Estilos para o aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  input: {
   borderWidth: 1,
    borderColor: 'gray',
    padding: 10, 
    margin:10,
    width: 200, 
  }
});