import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');

  const calcH = (altura) => {
    let inth = parseFloat(altura);
    setPeso((inth - 100) - [(inth - 150) / 4]);
  };

  const calcM = (altura) => {
    let inth = parseFloat(altura);
    setPeso((inth - 100) - [(inth - 150) / 2]);
  };



  return (
    <View style={styles.container}>
      <Text>Peso Ideal</Text>
      <Text>Altura em cm</Text>
      <View style={styles.viewInput}>
          <TextInput
            value={altura}
            onChangeText={setAltura}          
            keyboardType="number-pad"
            placeholder="Digite a altura"
            style={styles.input}
          />
      </View>
      <Text>Sexo</Text>
      <Pressable
            onPress={() => calcM(altura)}
            style={styles.botao}>
            <Text style={{ fontSize: 15, color: 'black' }}>
              calcular peso ideal
            </Text>
      </Pressable>
      <View style={styles.center}>
          <View style={styles.botaoResultado}>
            <Text style={styles.textoBotao}>Área Resultante: </Text>
            <Text style={styles.textoBotao}>{peso}</Text>
          </View>
        </View>
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