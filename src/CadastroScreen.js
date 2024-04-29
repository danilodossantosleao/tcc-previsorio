  import React, { useState } from 'react';
  import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

  const CadastroScreen = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleCadastro = () => {
      // Aqui você pode adicionar a lógica para cadastrar o usuário
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          // Usuário criado com sucesso
          const user = userCredential.user;
          console.log("Usuário criado com sucesso:", user.uid);
          // Redirecionar para a tela de login após o cadastro
          navigation.navigate('Login');
        })
        .catch((error) => {
          // Se houver um erro durante o cadastro do usuário, o Firebase Auth irá retornar uma mensagem de erro
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Erro ao criar usuário:", errorCode, errorMessage);
        });
    };

    return (
      <ImageBackground source={require('../assets/tcc.jpg')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.title}>Cadastro</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            color="white"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            color="white"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true}
            color="white"
          />
          <TouchableOpacity style={styles.button} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'white',
    },
    input: {
      width: '100%',
      height: 40,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    button: {
      width: '100%',
      height: 40,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginTop: 10,
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

  export default CadastroScreen;
