import React from 'react';
import {Text, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import BotaoPadrao from '../componentes/BotãoPadrao'
import 'react-native-gesture-handler';


function TelaDeLogin({navigation}){
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
			<BotaoPadrao 
				pressionado={()=>navigation.navigate('TelaDeTarefas')}
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