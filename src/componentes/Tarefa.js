import React, { useState } from 'react'
import {View, Text, TextInput} from 'react-native'
import BotaoIcone from './BotaoIcone'
import exluirTarefa from '../api/exluirTarefa'

function Tarefa({texto, deletePress, editPress, id,}){
	const [editavel, setEditavel] = useState(false)
	const [novoTexto, setNovoTexto] = useState('')
	return(
		<View style={estilos.containerTarefa}>
			<View style={estilos.containerTexto}>
			<TextInput style={estilos.textoTarefa}
				value={texto}
				editable={editavel}
				onChangeText={text=> setNovoTexto(text)}
			/>
			</View>
			<BotaoIcone icone={'✏️'} pressionado={()=> {editPress(id, novoTexto); setEditavel(!editavel)}}/>
			<BotaoIcone pressionado={()=> deletePress(id)} icone={'❌'}/>
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
}

export default Tarefa;