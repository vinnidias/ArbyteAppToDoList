import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default function BotaoEntrar(){
	return(
		<TouchableOpacity>
			<View style={estilos.containerBotaoEntrar}>
				<Text style={estilos.textoBotao}>
					Entrar
				</Text>
			</View>
		</TouchableOpacity>	
	)
}

const estilos = {
	containerBotaoEntrar:{
		height: 40,
		width: 140,
		backgroundColor: '#5f9ea0',
		borderRadius: 5
	},
	textoBotao:{
		fontSize: 22,
		alignSelf: 'center'
	},
}