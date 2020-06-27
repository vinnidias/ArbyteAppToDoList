import React, {useState, useEffect} from  'react'
import {View, Text, AsyncStorage} from 'react-native'
import InputTarefa from '../componentes/InputTarefa'
import Tarefa from '../componentes/Tarefa'
import ListaDeTarefas from '../componentes/ListaDeTarefas'
import axios from 'axios'
import exluirTarefa from '../api/exluirTarefa'
import editarTarefa from '../api/editarTarefa'
import postarTarefa from '../api/postTarefa'
import completaTarefa from '../api/completaTarefa'

function TelaDeTarefas({route, navigation}){
	const {nome} = route.params
	const {token} = route.params
	const [tarefas, setTarefas] = useState([])
	useEffect(()=>{axios.get('https://arbyte-todo-list-api.herokuapp.com/tasks',{
		headers: {
			Authorization: `Bearer ${token}`
		}
		})
		  .then(res => {setTarefas(res.data);})
	}, [tarefas])
	return(
		<View style={estilos.containerTelaTarefa}>
			<View styl={estilos.containerCabecalho}>
				<Text style={estilos.textoUsuario}>
						Olá {nome}!
				</Text>
				<Text style={estilos.subTexto}>
					Aqui estão as suas tarefas!
				</Text>
			</View>
			<InputTarefa token ={token} 
				pressionado={(descricao, completa )=> postarTarefa(token, descricao, completa)
					.then(res => {console.log('foi', res.data);
						
						}
					)
					.catch(err => {console.log('deu ruim', err)})
		 		}
			/>
			<View style={estilos.containerListaDeTarefas}>
			<ListaDeTarefas tarefas={tarefas} 
				deletePress={(id)=> exluirTarefa(token, id)}
				editPress={(id, novoTexto)=> {editarTarefa(token, id, novoTexto).then(res => console.log('atualizou', res.data))}}
				checkPress={(id, check)=>{ completaTarefa(token,id, !check).then(res => console.log('aqui', res.data))}}
			/>
			</View>
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
	containerListaDeTarefas:{
		flex:2,
		marginTop: 60

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