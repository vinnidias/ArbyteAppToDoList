import React, { useEffect } from 'react';
import {ScrollView} from 'react-native';
import Tarefa from './Tarefa';


const ListaDeTarefas = ({tarefas, deletePress, editPress, checkPress}) => {
  return (
    <ScrollView style={estilos.containerLista}>
      {tarefas.sort((a,b)=> a.completed - b.completed).map((tarefa) => (
        <Tarefa 
          texto={tarefa.description}
          id={tarefa.id} 
          deletePress={deletePress} 
          key={tarefa.id} 
          editPress={editPress} 
          checkPress={checkPress}
          bool={tarefa.completed}
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