import styled from "styled-components";

export const ColunasDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 10%;
  min-height: 70%;
  width: 100%;
`;

export const Coluna = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 100%;
`

export const ItemColuna = styled.div`
  border: 2px solid #d9d9d9;
  border-radius: 8px;
  text-align: center;
  background-color: white;
  height: 20%;
  display: flex;
  align-items:center;
  justify-content: center;

  &:hover {
    border-color: #E9CE03;
    box-shadow: 0 2px 0px #E9CE03;
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

export const CampoTexto = styled.select`
border: none;
  width: 100%;
  text-align: center;
  height: 100%;
  width: 100%;
  font-size: 1vw;

  &:focus {
    border-color: #E9CE03;
    outline: none;
  }
`;

export const Opcao = styled.option`
   font-size: 1vw;
`