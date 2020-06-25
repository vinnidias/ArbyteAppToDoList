import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';


export default function BotaoPadrao({titulo, cor, pressionado}){
	return(
		<TouchableOpacity onPress={pressionado}>
			<View style={{
				height: 40,
				width: 140,
				borderRadius: 5,
				margin: 15,
				backgroundColor: cor}}
				>
				<Text style={estilos.textoBotao}>
					{titulo}
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
		borderRadius: 5,
		margin: 15,
	}
}