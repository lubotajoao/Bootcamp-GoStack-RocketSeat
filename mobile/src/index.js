import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

// Nenhum elemento () tem valor semantico (significado)
// Nenhum elemento possue estilização própria
// Todos componentes possuem por padrão "display: flex"

// View: representa -> div, footer, header, main, aside, section, etc
// Text: p, span, strong, h1, h2, h3

export default function App() {
  return (
    <>
      <StatusBar barStyle="default" backgroundColor="#7159C1" />
      <View style={styles.container}>
        <Text style={styles.title}>Salut le monde!!!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159C1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
