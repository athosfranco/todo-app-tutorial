import styled from "styled-components";

export const ListaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: 10vh;
`;

export const TarefaContainer = styled.div`
  padding: 20px 25px;
  margin: 0.4rem 0;
  height: 10vh;
  cursor: pointer;  
  background-image ${({ foiConcluida }) =>
    foiConcluida
      ? "linear-gradient(315deg, #20bf55 0%, #01baef 74%)"
      : "linear-gradient(315deg, #9921e8 0%, #5f72be 74%)"};
transition: 0.3s ease all;
&:hover {
    transform: scale(1.04);
}
&:active {
    transform: scale(1.01);
 
}


//flex
display: flex;
justify-content: space-between;

@media only screen and (max-width: 1024px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const DescricaoContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
  }
`;

export const DescricaoTarefa = styled.h5`
  ${({ foiConcluida }) => foiConcluida && "text-decoration: line-through"};
  color: ${({ foiConcluida }) => (foiConcluida ? "green" : "white")};
`;

export const Controllers = styled.div`
  display: flex;
`;
