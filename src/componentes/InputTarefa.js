import React from 'react';
import {View, Text} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import {connect} from 'react-redux'
import {atualizarConteudo} from '../redux/actions/tarefas'
import BotaoAdicionarTarefa from '../componentes/BotaoAdicionarTarefa'


function InputTarefa({caixaDeTexto, dispatch}){
	return(
		<View style={estilos.inputTarefa} >
			<TextInput style={estilos.placeholder}
				value={caixaDeTexto}
				onChangeText={(novoTexto)=> dispatch(atualizarConteudo(novoTexto))}
				placeholder='O que você tem para fazer?'
				maxLength={24}
			/>
			<BotaoAdicionarTarefa caixaDeTexto={caixaDeTexto}/>
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
const mapStateToProps = (store) => {
  return {
    caixaDeTexto: store.caixaDeTexto
  }
}

export default connect(mapStateToProps)(InputTarefa)
