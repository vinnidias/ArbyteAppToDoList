import React from 'react';
import {Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaDeLogin from './src/telas/telaDeLogin'
import TelaDeCadastro from './src/telas/telaDeCadastro'
import TelaDeTarefas from './src/telas/telaDeTarefas'

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='TelaDeTarefas'
        screenOptions={{ headerShown: false}}>
        <Stack.Screen name='TelaDeLogin' component={TelaDeLogin}/>
        <Stack.Screen name='TelaDeCadastro' component={TelaDeCadastro}/>
        <Stack.Screen name='TelaDeTarefas' component={TelaDeTarefas}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;