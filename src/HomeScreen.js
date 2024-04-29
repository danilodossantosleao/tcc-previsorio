import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleLoginPress = () => {
    // Navegar para a tela de login
    navigation.navigate('Login');
  };

  const handleCadastroPress = () => {
    // Navegar para a tela de cadastro
    navigation.navigate('Cadastro');
  };

  return (
    <ImageBackground source={require('../assets/tcc.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Conteúdo da tela */}
        <Text style={styles.title}>Bem-vindo ao Meu App</Text>
        {/* Botões na parte inferior */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
            <Text style={styles.buttonText}>Acessar Conta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleCadastroPress}>
            <Text style={styles.buttonText}>Criar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;
