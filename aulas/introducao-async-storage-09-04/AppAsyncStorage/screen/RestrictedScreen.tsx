//Importa os módulos necessários do React e React Native
import React from 'react';
import  { View, Text, Button, StyleSheet } from 'react-native';

//Define a interface para as propriedades  da tela restrita 
interface RestrictedScreenProps {
  navigation: any;
}

//Definir a tela restrita do aplicativo 
const RestrictedScreen: React.FC<RestrictedScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você pode acessar a tela Restrita!</Text>
      <Button title="Voltar" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

//Exporta o componente RestrictedScreen
export default RestrictedScreen;

//Estilos para a tela restrita
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    },
    text: {
      fontSize: 40,
      marginBottom: 20,
      color: '#333',
    },
});