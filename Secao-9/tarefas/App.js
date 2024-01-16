import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function App() {
  const [ nome, setNome ] = useState('Fulano')

  function handleMudarNome() {
    setNome("Lucas")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nome}</Text>

      <TouchableOpacity style={styles.button} onPress={handleMudarNome}>
        <Text style={styles.buttonText}>Mudar nome</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingTop: 100,
  },
  title: {
    fontSize: 32,
    color: '#121212',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }

});