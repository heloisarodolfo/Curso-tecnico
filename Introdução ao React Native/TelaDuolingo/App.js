import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

function MinhaTela () {
  return (
    <View style={styles.container}>
      <View style={styles.coluna}>
        <Image source={require('./assets/Duolingo-logo.png')} style={styles.imagem} />
        <Text style={styles.texto}>Learn a language for free.{'\n'}Forever.</Text>
        <View style={styles.botaoContainer}>
          <TouchableOpacity style={styles.botao1}>
            <Text style={styles.botaoTexto}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao2}>
            <Text style={styles.botaoTexto2}>I already have an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  coluna: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagem: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  texto: {
    textAlign: 'center',
    fontSize: 24,
    marginVertical: 16,
  },
  botaoContainer: {
    marginTop: 16,
  },
  botao1: {
    backgroundColor: '#228B22',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 8,
  },
  botao2: {
    backgroundColor: '#DCDCDC',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 8,
    color:'#228B22'
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  botaoTexto2: {
    color: '#228B22',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default MinhaTela;
