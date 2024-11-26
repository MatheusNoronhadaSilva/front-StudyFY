import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    *{
     margin: 0;
     padding:0;
     font-family: 'poppins', sans-serif;
     box-sizing: border-box;
    }
     body{
     width: 100vw;
     height: 100vh;
     font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
     }

    .swal-centralizar-texto .swal-text {
    text-align: center; /* Centraliza o texto */
  }
`;

export default GlobalStyle