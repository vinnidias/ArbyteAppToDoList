import React from 'react';
import {Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import TelaDeLogin from './src/telas/TelaDeLogin'
import TelaDeCadastro from './src/telas/TelaDeCadastro'
import TelaDeTarefas from './src/telas/TelaDeTarefas'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import adicionarTarefa from './src/redux/reducers/tarefas'

const Stack = createStackNavigator()
const store = createStore(adicionarTarefa)


function App() {
  return (
	  <Provider store={store}> 
			<NavigationContainer>
				<Stack.Navigator 
					initialRouteName='TelaDeLogin'
					screenOptions={{ headerShown: false}}>
					<Stack.Screen name='TelaDeLogin' component={TelaDeLogin}/>
					<Stack.Screen name='TelaDeCadastro' component={TelaDeCadastro}/>
					<Stack.Screen name='TelaDeTarefas' component={TelaDeTarefas}/>
				</Stack.Navigator>
			</NavigationContainer>
	  </Provider>
  );
}

export default App;