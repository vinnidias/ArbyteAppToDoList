import React from  'react'
import {View, Text} from 'react-native'
import InputTarefa from '../componentes/InputTarefa'
import Tarefa from '../componentes/Tarefa'

function TelaDeTarefas(){
	return(
		<View style={estilos.containerTelaTarefa}>
			<View styl={estilos.containerCabecalho}>
				<Text style={estilos.textoUsuario}>
						Olá Usuário!
				</Text>
				<Text style={estilos.subTexto}>
					Aqui estão as suas tarefas!
				</Text>
			</View>
			<InputTarefa/>
	</View>
)
}


const estilos = {
	containerTelaTarefa:{
	backgroundColor: '#e9967a',
	flex: 1,
	justifyContent: 'flex-start',
	alignItems: 'center',
	padding: 40
},
containerCabecalho:{
	flex: 4,
	marginBottom: 40,
},
textoUsuario:{
	fontSize: 34,
	fontWeight: 'bold',
},
subTexto:{
	fontSize: 22,
},
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
}
}

export default TelaDeTarefas