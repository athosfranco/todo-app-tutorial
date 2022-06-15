import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0.5rem; //8px
  padding: 20px 35px;
  background: #082038;
  border-radius: 10px;
  border: 1px solid #00274f;
`;

export const InputContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 1024px) {
    margin-top: 10px;
    flex-direction: row;
  }
`;
