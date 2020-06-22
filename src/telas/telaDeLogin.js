import React from 'react';
import {Text, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import BotaoEntrar from '../componentes/BotãoEntrar'
import BotaoCadastrar from '../componentes/BotãoCadastro'

function TelaDeLogin(){
	return(
		<View style ={estilos.containerTelaLogin}>
			<Text style={estilos.textoLogin}>
					Login
			</Text>
			<TextInput 
			style={estilos.inputEmail}
			placeholder=' Digite o seu email aqui!'
			placeholderTextColor ='grey'
			/>
			<BotaoEntrar/>
			<BotaoCadastrar/>
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