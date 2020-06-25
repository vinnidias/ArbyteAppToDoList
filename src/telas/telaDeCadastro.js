import React, { useState } from 'react';
import {Text, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import BotaoPadrao from '../componentes/BotaoPadrao'
import cadastraUsuario from '../api/cadastro'


function TelaDeCadastro(){
	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')

	return(
		<View style ={estilos.containerTelaLogin}>
			<Text style={estilos.textoCadastro}>
					Cadastro
			</Text>
			<TextInput 
				style={estilos.inputApelido}
				value={nome}
				onChangeText={novoTexto => setNome(novoTexto)}
				placeholder=' Digite o seu apelido aqui!'
				placeholderTextColor ='grey'
			/>
			<TextInput 
				style={estilos.inputEmail}
				value={email}
				onChangeText={novoTexto => setEmail(novoTexto)}
				placeholder=' Digite o seu email aqui!'
				placeholderTextColor ='grey'
			/>
			<BotaoPadrao
				pressionado={()=> cadastraUsuario(nome, email)
					.then(res => {console.log('deu certo',res.data); setNome(''); setEmail('')})
					.catch(err => {console.log('caiu no erro', JSON.stringify(err)); setNome(''); setEmail('')})
				}
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