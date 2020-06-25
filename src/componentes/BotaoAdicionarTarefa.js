import React from 'react';
import {TouchableOpacity, Text} from 'react-native'
import {connect} from 'react-redux'
import {adicionarTarefa, atualizarConteudo} from '../redux/actions/tarefas'

function BotaoAdicionarTarefa({caixaDeTexto, dispatch}){
	return(
		<TouchableOpacity onPress={()=>{
			dispatch(adicionarTarefa(caixaDeTexto)),
			dispatch(atualizarConteudo(''))
		}}>
			<Text style={estilos.botaoAdicionar}>
				➕
			</Text>
		</TouchableOpacity>
	)
}

const mapStateToProps = (store) => {
	return {
	  caixaDeTexto: store.caixaDeTexto
	}
  }

export default connect(mapStateToProps)(BotaoAdicionarTarefa)


const estilos = {
	botaoAdicionar:{
		alignSelf: 'flex-end',
		margin: 15,
		marginLeft: 80,
	},
	
}