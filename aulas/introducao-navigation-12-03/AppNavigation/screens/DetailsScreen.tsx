import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    Details: undefined;
}

type DetailsScreenProps = StackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen : React.FC<DetailsScreenProps> = ({ navigation }) => {
    return(
        <View style = {styles.container}>
            <Text>Detalhes</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
 
export default DetailsScreen;