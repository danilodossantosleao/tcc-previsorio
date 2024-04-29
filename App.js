import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/LoginScreen';
import CadastroScreen from './src/CadastroScreen';
import HomeScreen from './src/HomeScreen';
import InicialScreen from './src/InicialScreen'; // Importe a nova tela

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* Adicione a tela Inicial */}
        <Stack.Screen name="Inicial" component={InicialScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}
