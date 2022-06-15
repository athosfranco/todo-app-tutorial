import React, { useState } from "react";
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { ModalContainer, Modal, Overlay, DescricaoSpan, IdSpan } from "./ModalEditarTarefa.styles";
import { Form } from "react-bootstrap";
import { InputContainer } from "../AdicionarTarefa/AdicionarTarefa.styles";
import { toast } from "react-toastify";

const ModalEditarTarefa = ({ tarefaId, onFecharModal }) => {
  const [inputEdicao, setInputEdicao] = useState("");

  const editarTarefaHandler = () => {
    const inputFormatado = inputEdicao.trim();
    if ((inputFormatado.length > 1) & (inputFormatado.length < 30) & (inputFormatado !== "")) {
      let tempArray = JSON.parse(localStorage.getItem("tarefas"));
      tempArray = tempArray.map((tarefa) => {
        if (tarefa.id === tarefaId) {
          return { ...tarefa, descricao: inputFormatado };
        } else {
          return tarefa;
        }
      });
      localStorage.setItem("tarefas", JSON.stringify(tempArray));
      toast.success("Tarefa alterada com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      onFecharModal();
    }
  };

  return (
    <ModalContainer>
      <Modal>
        <h5>Editar tarefa</h5>
        <IdSpan>ID #{tarefaId.toString().split(".")[1]}</IdSpan>
        <Alert>
          <DescricaoSpan>Descrição atual da tarefa: </DescricaoSpan>
          {JSON.parse(localStorage.getItem("tarefas")).find((tarefa) => tarefaId === tarefa.id).descricao}
        </Alert>
        <InputContainer>
          <Form.Control
            type="text"
            placeholder="Nova descrição de tarefa"
            onChange={(e) => setInputEdicao(e.target.value)}
            style={{ flex: 4 }}
          />
          <Button variant="success" onClick={editarTarefaHandler} style={{ flex: 1 }}>
            Salvar
          </Button>
          <Button onClick={onFecharModal} style={{ flex: 1 }}>
            Cancelar
          </Button>
        </InputContainer>
      </Modal>
      <Overlay />
    </ModalContainer>
  );
};

export default ModalEditarTarefa;
