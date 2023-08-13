import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity, Platform } from 'react-native';

function Instagram() {
  return (

    <View style={styles.container}>
    <StatusBar backgroundColor="#FFF" transLucent={false} />

  <Image 
  Source={require('./assets/instagram-logo 1.png')}
  style={styles.logo}
  />

  <TextInput
  placeholder="Celular, username ou email"
  style={styles.input}
  />

  <TextInput
  placeholder="Sua senha"
  style={styles.input}
  />

  <View style={styles.fogotContainer}>
  <TouchableOpacity>
  <Text style={styles.forgotText}t> Esqueceu sua senha?</Text>
  </TouchableOpacity>
  </View>

  <TouchableOpacity style={styles.loginButton}>
  <Text style={styles.loginText}> Acessar </Text>
  </TouchableOpacity>

  <TouchableOpacity>
  <Text>Continue como Heloisa Rodolfo </Text>
  </TouchableOpacity>

    </View >

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    marginTop: Platform.OS === 'android' ? '13%' : '26%',
    marginBottom: Platform.OS === 'android' ? '13%' : '15%'
  },
  input: {
    width: '90%',
    heigth: 42,
    backgroundColor: '#F4F3F3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },
  fogotContainer: {
    width: '90%',
    alignItems: 'flex-end'
  },
  forgotText: {
    color: '#399fff',
  },
  loginButton: {
    marginTop: '5%',
    backgroundColor: '#399fff',
    width: '90%',
    heigth: 42,
    justifyContent: 'center',
    borderRadius: 5,
  },
  loginText: {
    color: '#FFF',
    fontSize: 17,
  }
})

export default Instagram;
