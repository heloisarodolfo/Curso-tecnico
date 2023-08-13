import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
  }

  handleEmailChange = (email) => {
    this.setState({ email });
  }

  handlePasswordChange = (password) => {
    this.setState({ password });
  }

  handleLogin = () => {
    // Lógica de login, verificação de email e senha
    // Redirecionamento do usuário para a próxima tela após a autenticação
    // Exemplo básico: apenas exibe os dados de login no console
    const { email, password } = this.state;
    console.log('Email:', email);
    console.log('Password:', password);
  }

  render() {
    const { email, password } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Netflix</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={this.handleEmailChange}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            secureTextEntry={true}
            onChangeText={this.handlePasswordChange}
          />

          <TouchableOpacity
            style={styles.loginButton}
            onPress={this.handleLogin}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>Criar uma nova conta</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#e50914',
    marginBottom: 40,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 40,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: '#e50914',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupButton: {
    marginTop: 20,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;

