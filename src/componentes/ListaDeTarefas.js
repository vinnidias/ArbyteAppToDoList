import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux'
import Tarefa from './Tarefa';

const ListaDeTarefas = ({tarefas}) => {
  return (
    <View>
      {tarefas.map((tarefa) => (
        <Tarefa texto={tarefa} />
      ))}
    </View>
  );
};

const mapStateToProps = (store) => {
  return {
    tarefas: store.tarefas
  }
}

export default connect(mapStateToProps)(ListaDeTarefas);