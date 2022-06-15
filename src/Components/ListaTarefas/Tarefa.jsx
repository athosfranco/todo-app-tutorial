import React from "react";
import { Button } from "react-bootstrap";
import { Controllers, DescricaoContainer, DescricaoTarefa, TarefaContainer } from "./ListaTarefa.styles";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlineDelete, AiOutlineCheck } from "react-icons/ai";
import { toast } from "react-toastify";

const Tarefa = ({ id, descricao, data, foiConcluida, onEditarTarefa }) => {
  const concluirTarefa = () => {
    let tempArray = JSON.parse(localStorage.getItem("tarefas"));
    tempArray = tempArray.map((tarefa) => {
      if (tarefa.id === id) {
        return { ...tarefa, foiConcluida: !tarefa.foiConcluida };
      } else {
        return tarefa;
      }
    });
    localStorage.setItem("tarefas", JSON.stringify(tempArray));
  };

  const excluirTarefa = () => {
    let tempArray = JSON.parse(localStorage.getItem("tarefas"));
    tempArray = tempArray.filter((tarefa) => tarefa.id !== id);
    localStorage.setItem("tarefas", JSON.stringify(tempArray));
    toast.success(`A tarefa "${descricao}" foi excluída.`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <TarefaContainer foiConcluida={foiConcluida}>
      <DescricaoContainer>
        <DescricaoTarefa foiConcluida={foiConcluida}>{descricao}</DescricaoTarefa>
        <span>{data}</span>
      </DescricaoContainer>
      <Controllers>
        <Button variant="success" style={{ marginRight: "10px" }} onClick={concluirTarefa}>
          <AiOutlineCheck />
        </Button>
        <Button variant="warning" style={{ marginRight: "10px" }} onClick={() => onEditarTarefa(id)}>
          <FaRegEdit />
        </Button>
        <Button variant="danger" onClick={excluirTarefa}>
          <AiOutlineDelete />
        </Button>
      </Controllers>
    </TarefaContainer>
  );
};

export default Tarefa;
