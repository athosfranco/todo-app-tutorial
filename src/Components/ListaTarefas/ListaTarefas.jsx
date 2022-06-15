import React from "react";
import { ListaContainer } from "./ListaTarefa.styles";
import Tarefa from "./Tarefa";
import { Alert } from "react-bootstrap";

const ListaTarefas = ({ tarefas, onAbrirModal }) => {
  const editarTarefaCaller = (idTarefa) => onAbrirModal(idTarefa);
  return (
    <ListaContainer>
      {tarefas.length > 0 ? (
        tarefas.map((tarefa) => {
          return (
            <Tarefa
              id={tarefa.id}
              descricao={tarefa.descricao}
              data={tarefa.data}
              foiConcluida={tarefa.foiConcluida}
              onEditarTarefa={editarTarefaCaller}
              key={tarefa.id}
            />
          );
        })
      ) : (
        <Alert variant="warning">Você não tem nenhuma tarefa registrada. Adicione a primeira tarefa do dia!</Alert>
      )}
    </ListaContainer>
  );
};

export default ListaTarefas;
