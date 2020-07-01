import React, { useState } from 'react';
import {View, Text} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import {connect} from 'react-redux'
import {atualizarConteudo} from '../redux/actions/tarefas'
import BotaoAdicionarTarefa from '../componentes/BotaoAdicionarTarefa'
import postarTarefa from '../api/postTarefa'


		

function InputTarefa({token, pressionado}){
	const [descricao, setDescricao] = useState('')
	const completa = false
	return(
		<View style={estilos.inputTarefa} >
			<TextInput style={estilos.placeholder}
				value={descricao}
				onChangeText={(novoTexto)=> setDescricao(novoTexto)}
				placeholder='O que você tem para fazer?'
				maxLength={24}
			/>
			<BotaoAdicionarTarefa pressionado={()=>{ pressionado(descricao, completa);setDescricao('')}}/>
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
		marginLeft: 80,
	},
	
}


export default InputTarefa
