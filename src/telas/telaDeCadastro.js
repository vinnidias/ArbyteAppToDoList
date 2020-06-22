import React from 'react';
import {Text, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import BotaoCadastrar from '../componentes/BotãoCadastro'

function TelaDeCadastro(){
	return(
		<View style ={estilos.containerTelaLogin}>
			<Text style={estilos.textoCadastro}>
					Cadastro
			</Text>
			<TextInput 
			style={estilos.inputApelido}
			placeholder=' Digite o seu apelido aqui!'
			placeholderTextColor ='grey'
			/>
			<TextInput 
			style={estilos.inputEmail}
			placeholder=' Digite o seu email aqui!'
			placeholderTextColor ='grey'
			/>
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
	textoCadastro:{
		fontSize: 34,
		fontWeight: 'bold',
		marginBottom: 40
	},
	inputEmail:{
		height: 50,
		width: 300,
		borderRadius: 5,
		margin: 15,
		backgroundColor: '#ffebcd',
		marginBottom: 50
	},
	inputApelido:{
		height: 50,
		width: 300,
		borderRadius: 5,
		margin: 15,
		backgroundColor: '#ffebcd'
	}

}

export default TelaDeCadastro;