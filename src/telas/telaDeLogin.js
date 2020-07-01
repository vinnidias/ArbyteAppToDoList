import React, { useState } from 'react';
import {Text, View, Alert, AsyncStorage} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import BotaoPadrao from '../componentes/BotaoPadrao'
import 'react-native-gesture-handler';
import validaLogin from '../api/login'


function TelaDeLogin({route, navigation}){
	const [email, setEmail] = useState('')
	const [token, setToken] = useState('')
	return(
		<View style ={estilos.containerTelaLogin}>
			<Text style={estilos.textoLogin}>
					Login
			</Text>
			<TextInput 
			style={estilos.inputEmail}
			value={email}
			onChangeText={texto => setEmail(texto)}
			placeholder=' Digite o seu email aqui!'
			placeholderTextColor ='grey'
			/>
			<BotaoPadrao 
				pressionado={()=> validaLogin(email)
					.then(res => {
						return AsyncStorage.setItem('userData', JSON.stringify(res.data))
						})
						.then(()=>{
							console.log('caiu aqui'); 
							navigation.push('TelaDeTarefas');
							setEmail('')
						})
					.catch(err => {console.log('caiu no erro', err); Alert.alert('dados inválidos')})
				}
				titulo={'Entrar'}
				cor={'#5f9ea0'}
				/>
			<BotaoPadrao 
				pressionado={()=>navigation.navigate('TelaDeCadastro')}
				titulo={'Cadastrar'}
				cor={'#ffe4c4'}
				/>
		</View>
	)
}


const estilos = {
	containerTelaLogin:{
		backgroundColor: '#e9967a',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textoLogin:{
		fontSize: 34,
		fontWeight: 'bold'
	},
	inputEmail:{
		height: 50,
		width: 300,
		borderRadius: 5,
		margin: 25,
		marginBottom: 100,
		backgroundColor: '#ffebcd'
	}

}

export default TelaDeLogin;