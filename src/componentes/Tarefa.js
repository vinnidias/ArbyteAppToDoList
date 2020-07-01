import React, { useState } from 'react'
import {View, Text, TextInput} from 'react-native'
import BotaoIcone from './BotaoIcone'
import exluirTarefa from '../api/exluirTarefa'
import BotaoCheckBox from './CheckBox'

function Tarefa({texto, deletePress, editPress, checkPress, id, bool}){
	const [editavel, setEditavel] = useState(false)
	const [value, setValue] =useState(texto)
	return(
		
		<View style={estilos.containerTarefa}>
			<BotaoCheckBox pressionado={(check)=>{checkPress(id, check)}} bool={bool}/>
			<View style={estilos.containerTexto}>
			<TextInput style={estilos.textoTarefa}
				value={value}
				editable={editavel}
				onChangeText={text=> setValue(text)}
			/>
			</View>
			{editavel 
				? <BotaoIcone icone={'✔️'} pressionado={()=> {editPress(id, value);setEditavel(!editavel)}}/>
				: <BotaoIcone icone={'✏️'} pressionado={()=> {setEditavel(!editavel)}}/>
				}
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