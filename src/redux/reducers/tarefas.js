const estadoInicial = {
  tarefas: [] 
} 

const adicionarTarefa = (state=estadoInicial, action) =>{
  switch (action.type) {
    case 'ADICIONAR_TAREFA':
      return{...state, tarefas: [...state.tarefas, action.tarefa]};
    case 'ADICIONAR_LISTA':
      const newStore = {...state, tarefas: [...action.lista]};
      console.log('After Tasks', action.lista ,newStore)
      return newStore;
    default:
      return state;
  }
}

export default adicionarTarefa;