import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

// Define o tipo do estado
type Post = {
  title: string;
  body: string;
};

// Componente App que o ponto de entrada da aplicação
const App = () => {
  const [post, setPost] = useState<Post | null> (null); // Define o tipo do estado
// useEffect é um hook que permite executar efeitos colaterais em componentes funcionais
useEffect(() => {
   axios.get('https://jsonplaceholder.typicode.com/posts/1')
   .then(response => setPost(response.data)); // Agora o TypeScript entende o tipo
}, []);

// Renderiza um indicador de carregamento enquanto os dados estão sendo buscados
if (!post) {
  return <ActivityIndicator size="large" color="#0000f"/>;
}

  // Renderiza
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
    </View>
  );
}

// Define o estilo do aplicativo
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10
    },
    body: {
      fontSize: 18
    }
  }
);

export default App;


