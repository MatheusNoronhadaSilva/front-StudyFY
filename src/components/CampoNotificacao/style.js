import styled from "styled-components";

export const DivNotificacao = styled.div`
  padding-top: 5vh;
  width: 100%;
  flex-grow: 1;
  align-items: center;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0%;
  overflow-y: auto;
`;

export const Cartao = styled.div`
  min-height: 30%;
  max-height: 30%;
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const CabecalhoCartao = styled.div`
  height: 20%;
  width: 100%;
  background-color: #ffe944;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
`;

export const TextoCabecalho = styled.span`
  margin: 0;
  font-size: 1rem;
`;

export const Indicador = styled.div`
  height: 25%;
  width: 1.2%;
  border-radius: 50%;
  background-color: red;
`;

export const CorpoCartao = styled.div`
  display: flex;
  padding: 10px;
  flex-grow: 1;
  box-shadow: 0 4px 0px #d9d9d9;
  border-left: solid 2px #d9d9d9;
  border-right: solid 2px #d9d9d9;
  border-bottom: solid 2px #d9d9d9;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const TextoCorpo = styled.span`
font-size: 1rem;
`;

export const TextoDiv = styled.div`
   height: 100%;
   max-width: 60%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`

export const DivImagens = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Imagem = styled.img`
  height: 60%;
  width: 30%;
`;

export const CartoesDiv = styled.div`
   gap: 5%;
   display: flex;
   flex-direction: column;
   height: 70%;
`

export const Header = styled.header`
  text-align: center;
  margin-bottom: 6%;

  h1 {
    font-size: 2.5em;
    color: #444;
  }

  p {
    font-size: 1.1em;
    color: #666;
  }
`;