import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import dados from './service/dados.js'
import card_cidade from './components/card_cidade.js'

export default function App() {
  console.log(dados.state, dados.cities);
  return (
    <View style={styles.container}>
      <Text>App</Text>
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
