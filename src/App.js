import React, { useState, useEffect } from "react";
import TarefaPesquisa from "./Components/AdicionarTarefa/AdicionarTarefa";
import GlobalStyle from "./globalStyles";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListaTarefas from "./Components/ListaTarefas/ListaTarefas";
import ModalEditarTarefa from "./Components/ModalEditarTarefa/ModalEditarTarefa";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 25vw;

  @media only screen and (max-width: 1024px) {
    margin: 0.5rem;
  }
`;

function App() {
  const [tarefas, setTarefas] = useState([]);

  const [tarefasFiltradas, setTarefasFiltradas] = useState();

  const [editarTarefaModal, setEditarTarefaModal] = useState(false);

  const [tarefaSendoEditada, setTarefaSendoEditada] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("tarefas")) {
      setTarefas(JSON.parse(localStorage.getItem("tarefas")));
    } else {
      localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }
  }, [tarefas]);

  const novaTarefaHandler = (tarefa) => {
    setTarefas([...tarefas, tarefa]);
    localStorage.setItem("tarefas", JSON.stringify([...tarefas, tarefa]));
  };

  const abrirModalHandler = (tarefaId) => {
    setTarefaSendoEditada(tarefaId);
    setEditarTarefaModal(true);
  };

  const pesquisarTarefaHandler = (termoDePesquisa) => {
    const tempArray = JSON.parse(localStorage.getItem("tarefas"));
    if (tempArray.length !== 0) {
      const tarefasFiltradasArray = tempArray.filter((tarefa) => tarefa.descricao.includes(termoDePesquisa));
      setTarefasFiltradas(tarefasFiltradasArray);
    }
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <h1>Organizador de Tarefas</h1>
      <ToastContainer />
      <TarefaPesquisa onGetTarefaAdicionada={novaTarefaHandler} onGetPesquisa={pesquisarTarefaHandler} />
      <ListaTarefas tarefas={tarefas} tarefasFiltradas={tarefasFiltradas} onAbrirModal={abrirModalHandler} />
      {editarTarefaModal && (
        <ModalEditarTarefa tarefaId={tarefaSendoEditada} onFecharModal={() => setEditarTarefaModal(false)} />
      )}
    </AppContainer>
  );
}

export default App;
