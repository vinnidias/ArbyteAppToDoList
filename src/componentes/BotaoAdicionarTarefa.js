import React from 'react';
import {TouchableOpacity, Text} from 'react-native'
import {connect} from 'react-redux'
import {adicionarTarefa, atualizarConteudo} from '../redux/actions/tarefas'

function BotaoAdicionarTarefa({pressionado}){
	return(
		<TouchableOpacity onPress={pressionado}>
			<Text style={estilos.botaoAdicionar}>
				➕
			</Text>
		</TouchableOpacity>
	)
}


export default BotaoAdicionarTarefa


const estilos = {
	botaoAdicionar:{
		alignSelf: 'flex-end',
		margin: 15,
		marginLeft: 80,
	},
	
}