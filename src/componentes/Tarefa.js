import React from 'react'
import {View, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function Tarefa({texto}){
	return(
		<View style={estilos.containerTarefa}>
			<View style={estilos.containerTexto}>
			<Text style={estilos.textoTarefa}>
					{texto}
			</Text>
			</View>
			<View style={estilos.containerBotoes}>
				<TouchableOpacity>
					<Text style={estilos.botaoEditar}>
						✏️
					</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Text style={estilos.botaoExcluir}>
						❌
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const estilos = {
	containerTarefa:{
		flexDirection: 'row',
		height: 50,
		width: 300,
		borderRadius: 5,
		backgroundColor: '#ffebcd',
		marginTop: 30
	},
	containerTexto:{
		height: 50,
		width: 200,
	},
	textoTarefa:{
		color: 'grey',
		margin: 15
	},
	botaoEditar:{
		alignSelf: 'flex-end',
		margin: 15,
	},
	botaoExcluir:{
		alignSelf: 'flex-end',
		margin: 15,
		marginLeft: 5
	},
	checkBox:{
		height: 15,
		width: 15,
		borderRadius: 5,
		backgroundColor: 'grey',
		alignSelf: 'center',
		margin: 8
	},
	checkText:{
		alignSelf: 'center'
	},
	containerBotoes:{
		flexDirection: 'row',
		alignSelf: 'flex-end',
		marginLeft: 20
	}
}

export default Tarefa;