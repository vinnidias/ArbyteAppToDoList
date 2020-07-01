const adicionarTarefa = (tarefa) =>{
	return {
		type: 'ADICIONAR_TAREFA',
		tarefa,
	  }
}

const adionarLista =(lista)=>{
	return {
		type: 'ADICIONAR_LISTA',
		lista,
	}
}
export {adicionarTarefa, adionarLista}