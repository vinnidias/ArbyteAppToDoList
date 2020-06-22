import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default function BotaoCadastrar(funcao){
	return(
		<TouchableOpacity>
			<View style={estilos.containerBotaoCadastro}>
				<Text style={estilos.textoBotao}>
					Cadastrar
				</Text>
			</View>
		</TouchableOpacity>	
	)
}


const estilos = {
	textoBotao:{
		fontSize: 22,
		alignSelf: 'center'
	},
	containerBotaoCadastro:{
		height: 40,
		width: 140,
		backgroundColor: '#ffe4c4',
		borderRadius: 5,
		margin: 15
	}
}