import React from 'react';
import {View, Text} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

function InputTarefa(){
	return(
		<View style={estilos.inputTarefa} >
			<TextInput style={estilos.placeholder}
				placeholder='O que você tem para fazer?'
				maxLength={22}
			/>
			<TouchableOpacity>
				<Text style={estilos.botaoAdicionar}>
					➕
				</Text>
			</TouchableOpacity>
		</View>
	)
}

const estilos = {
	inputTarefa:{
		flexDirection: 'row',
		height: 50,
		width: 300,
		borderRadius: 5,
		backgroundColor: '#ffebcd',
		marginTop: 60
	},
	placeholder:{
		color: 'grey',
		margin: 8
	},
	botaoAdicionar:{
		alignSelf: 'flex-end',
		margin: 15,
		marginLeft: 60,
	},
	
}
export default InputTarefa;