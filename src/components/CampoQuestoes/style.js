import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconeFechar = styled(FontAwesomeIcon)`
   height: 100%; 
   width: 100%;
   color: white;
`
export const TelaHeader = styled.div`
   height: 10%;
   width: 100%;
   background-color: #fee101;
   margin-bottom: 4%;
`

export const Contagem = styled.span`
   font-size: 1.5vw;
   font-weight: bold;
`

export const TituloAtividade = styled.span`
   font-size: 2vw;
`

export const CampoQuestoesDiv = styled.div`
   flex-grow: 1;
   width: 50%;
   gap:5%;
   display: flex;
   flex-direction: column;
`

export const Questao = styled.div`
   height: 65%;
   width: 100%;
`

export const HeaderQuestao = styled.div`
   width: 100%;
   height: 10%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`

export const Fechar = styled.div`
   height: 80%;
   width: 6%;
   padding: 1%;
   border-radius: 12px;
   background-color: red;
   cursor: pointer;
`

//multipla escolha

export const CampoAlternativas = styled.div`
  display: grid;
  width: 100%;
  height: 30%;
  grid-template-columns: 1fr 1fr; /* Duas colunas */
  gap: 5% 2%; /* Espaçamento entre os itens */
`;

export const ItemColuna = styled.div`
  padding: 5%;
  border: 2px solid #d9d9d9;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  border: ${({ isSelected }) => (isSelected ? "solid 1px #E9CE03" : "solid 1px #d9d9d9")}; /* Cor de fundo para selecionado */
  background-color: ${({ isSelected }) => (isSelected ? "#fee101" : "white")}; /* Cor de fundo para selecionado */
  box-shadow: ${({ isSelected }) => (isSelected ? "0 3px 0px #E9CE03" : "0 3px 0px #d9d9d9")}; /* Sombras para selecionado */

  &:hover {
    border-color: #E9CE03;
    box-shadow: 0 3px 0px #E9CE03;
  }
`;

export const CampoTexto = styled.span`
  margin-right: 10px;
  font-size: 1vw;
`;

export const BotaoResposta = styled.div`
   width: 50%;
   border: solid 1px #d9d9d9;
   place-self: center;
   border-radius: 12px;
   text-align: center;
   padding: 2%;
   box-shadow: 0 3px 0px #d9d9d9;
   margin-top: auto;

    &:hover {
    border-color: #E9CE03;
    box-shadow: 0 3px 0px #E9CE03;
  }
`