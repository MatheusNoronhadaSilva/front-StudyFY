import styled from "styled-components";


export const CampoAlternativas = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40%;
  gap: 5% 2%; /* Espaçamento entre os itens */
  justify-content: center;
  align-items: center;
`;

export const ItemColuna = styled.div`
  width: 50%;
  height: 100%;
  border: 2px solid #d9d9d9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: ${({ isSelected }) => (isSelected ? "solid 1px #E9CE03" : "solid 1px #d9d9d9")}; /* Cor de fundo para selecionado */
  background-color: ${({ isSelected }) => (isSelected ? "#fee101" : "white")}; /* Cor de fundo para selecionado */
  box-shadow: ${({ isSelected }) => (isSelected ? "0 3px 0px #E9CE03" : "0 3px 0px #d9d9d9")}; /* Sombras para selecionado */

  &:hover {
    border-color: #E9CE03;
    box-shadow: 0 3px 0px #E9CE03;
  }
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

export const CampoTexto = styled.span`
  margin-right: 10px;
  font-size: 1vw;
`;