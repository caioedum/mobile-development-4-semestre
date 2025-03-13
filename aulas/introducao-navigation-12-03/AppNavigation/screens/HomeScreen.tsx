import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, StyleSheet, View, Text } from 'react-native';

type RootStackParamList = {
    Home: undefined;
    Details: undefined;
}

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen : React.FC<HomeScreenProps> =  ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Bem-vindo a tela Home Screen!</Text>
            <Button title="Ir para detalhes"
            onPress={() => navigation.navigate('Details')}/>
        </View>
    );
};

// Definição do estilo
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default HomeScreen;

