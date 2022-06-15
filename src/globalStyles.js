import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #0A1929;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #0d3966;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
  body {
    color: #e3f2fd;
    margin: 0;
    padding: 0; 
     background-color: #0A1929;
     font-family: 'Poppins', sans-serif;
    min-height: 100vh;
    min-width: 100vw;
    overflow-x: hidden;
 
  }
  h1 {
    margin: 20px;
  }
`;

export default GlobalStyle;
