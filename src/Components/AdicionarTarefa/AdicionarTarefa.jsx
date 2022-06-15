import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { ButtonContainer, InputContainer, Container } from "./AdicionarTarefa.styles";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

const AdicionarTarefa = ({ onGetTarefaAdicionada }) => {
  const [userInput, setUserInput] = useState();

  const adicionaTarefa = () => {
    //validação
    if (userInput && userInput.length > 0 && userInput.length <= 45) {
      //pegar o registro da data e hora atual
      const data = new Date();
      const dataFormatada = `${data.getDate() < 10 ? `0${data.getDate()}` : data.getDate()}/${
        data.getMonth() + 1
      }/${data.getFullYear()}`;
      const horarioFormatado = `${data.getHours() < 10 ? `0${data.getHours()}` : data.getHours()}:${
        data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes()
      }:${data.getSeconds() < 10 ? `0${data.getSeconds()}` : data.getSeconds()}`;

      //pega o objeto da tarefa
      onGetTarefaAdicionada({
        id: Math.random(),
        descricao: userInput,
        foiConcluida: false,
        data: `${dataFormatada} às ${horarioFormatado}`,
      });
    } else {
      toast.error("A tarefa precisa ter entre 1 a 45 caracteres.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <Container>
        <InputContainer>
          <Form.Control
            type="text"
            placeholder="📌 Descrição da tarefa..."
            onChange={(e) => {
              if (e.target.value === "") {
                setUserInput("");
              } else {
                setUserInput(e.target.value);
              }
            }}
            style={{ marginRight: "10px", flex: 3 }}
          />
          <ButtonContainer>
            <Button onClick={adicionaTarefa} variant="success" style={{ flex: 1 }}>
              Adicionar Tarefa
            </Button>
          </ButtonContainer>
        </InputContainer>
      </Container>
    </>
  );
};

export default AdicionarTarefa;
