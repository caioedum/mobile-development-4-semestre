import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

/* 
Comentário básico para testar
*/
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Caio Eduardo Nascimento Martins</Text>
      <Text>My first app</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
