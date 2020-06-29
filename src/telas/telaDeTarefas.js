import React, { useState, useEffect } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import InputTarefa from '../componentes/InputTarefa'
import Tarefa from '../componentes/Tarefa'
import ListaDeTarefas from '../componentes/ListaDeTarefas'
import axios from 'axios'
import exluirTarefa from '../api/exluirTarefa'
import editarTarefa from '../api/editarTarefa'
import postarTarefa from '../api/postTarefa'
import completaTarefa from '../api/completaTarefa'
import { adionarLista, adicionarTarefa } from '../redux/actions/tarefas'
import { connect } from 'react-redux'

function TelaDeTarefas({ dispatch, navigation, tarefas }) {
	// const {nome} = route.params
	// const {token} = route.params
	const [userData, setUserData] = useState({ user: {} })

	useEffect(() => {
		AsyncStorage.getItem('userData')
			.then((userData) => {
				if (userData != null) {
					const parsed = JSON.parse(userData);
					setUserData(parsed)
					return parsed.token;
				}
			}).catch(err => { console.log('primeiro catch', err); navigation.navigate('TelaDeLogin') })
			.then((token) => {
				if (!token) return;
				return axios.get('https://arbyte-todo-list-api.herokuapp.com/tasks', {
					headers: {
						Authorization: `Bearer ${token}`
					}
				})
			})
			.then(res => {
				dispatch(adionarLista(res.data))
			}).catch(err => console.log('erro de rede', err))
	}, [])
	console.log('render', tarefas)
	return (
		<View style={estilos.containerTelaTarefa}>
			<View styl={estilos.containerCabecalho}>
				<Text style={estilos.textoUsuario}>
					Olá {userData.user.fullName}!
				</Text>
				<Text style={estilos.subTexto}>
					Aqui estão as suas tarefas!
				</Text>
			</View>
			<InputTarefa
				pressionado={(descricao, completa) => postarTarefa(userData.token, descricao, completa)
					.then(res => {
						console.log('input', res.data)
						dispatch(adicionarTarefa(res.data))
					})
					.catch(err => { console.log('deu ruim', err) })
				}
			/>
			<View style={estilos.containerListaDeTarefas}>
				<ListaDeTarefas tarefas={tarefas}
					deletePress={(id) => exluirTarefa(userData.token, id)
						.then(()=>{
							const indice = tarefas.findIndex((tarefa)=> tarefa.id === id)
							tarefas.splice(indice, 1)
							dispatch(adionarLista(tarefas))
							console.log('splice', tarefas)
						}).catch(err=> console.log('erro do splice', err))}
					
					editPress={(id, novoTexto) => { editarTarefa(userData.token, id, novoTexto)
						.then((res)=>{
							const indice = tarefas.findIndex((tarefa)=> tarefa.id === id)
							tarefas.splice(indice, 1)
							tarefas.push(res.data)
							dispatch(adionarLista(tarefas))

						}) }}
					checkPress={(id, check) => { completaTarefa(userData.token, id, !check)
						.then((res)=>{
							const indice = tarefas.findIndex((tarefa)=> tarefa.id === id)
							tarefas.splice(indice, 1)
							tarefas.push(res.data)
							dispatch(adionarLista(tarefas))
						}) 
					}}
				/>
			</View>
		</View>
	)
}


const estilos = {
	containerTelaTarefa: {
		backgroundColor: '#e9967a',
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		padding: 40
	},
	containerCabecalho: {
		flex: 4,
		marginBottom: 40,
	},
	containerListaDeTarefas: {
		flex: 2,
		marginTop: 60

	},
	textoUsuario: {
		fontSize: 34,
		fontWeight: 'bold',
	},
	subTexto: {
		fontSize: 22,
	},
	inputTarefa: {
		flexDirection: 'row',
		height: 50,
		width: 300,
		borderRadius: 5,
		backgroundColor: '#ffebcd',
		marginTop: 60
	},
	placeholder: {
		color: 'grey',
		margin: 8
	}
}
const mapStateToProps = (store) => {
	return {
		tarefas: store.tarefas
	}
}

export default connect(mapStateToProps)(TelaDeTarefas)