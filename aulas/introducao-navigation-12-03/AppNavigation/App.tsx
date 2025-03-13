import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, StyleSheet, View } from 'react-native';
import React from 'react';
import HomeScreen from './screens/HomeScreen';import DetailsScreen from './screens/DetailsScreen';

type RootStackParamList = {
    Home: undefined;
    Details: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home"
                    component={HomeScreen}
                    options={{ title: 'Home Page' }} />
                <Stack.Screen name="Details"
                    component={DetailsScreen}
                    options={{ title: 'Details Page' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
