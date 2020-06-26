import React, { useEffect } from 'react';
import {ScrollView} from 'react-native';
import Tarefa from './Tarefa';


const ListaDeTarefas = ({tarefas, deletePress, editPress}) => {
  return (
    <ScrollView style={estilos.containerLista}>
      {tarefas.sort((a,b)=> b.id - a.id).map((tarefa) => (
        <Tarefa 
          texto={tarefa.description}
          id={tarefa.id} 
          deletePress={deletePress} 
          key={tarefa.id} 
          editPress={editPress} 
          />
      ))}
    </ScrollView>
  );
};

const estilos = {
  containerLista:{
    width: 300
  }
}

export default ListaDeTarefas;