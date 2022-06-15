import styled from "styled-components";

export const ModalContainer = styled.div``;

export const Modal = styled.div`
  width: 50%;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  padding: 2.5rem 2rem;
  background: #082038;
  border-radius: 10px;
  border: 1px solid #00274f;
  z-index: 999;
  @media only screen and (max-width: 1024px) {
    width: 95%;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  width: 100vw;
  height: 100vh;
  z-index: 998;
`;

export const DescricaoSpan = styled.span`
  font-weight: 800;
`;

export const IdSpan = styled.span`
  color: darkgray;
  font-size: 14px;
  margin-bottom: 15px;
`;
