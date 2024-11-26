import React, { useState } from "react";
import * as C from './style';
import Enunciado from "../../styles/enunciadoQuestao";
import CampoQuestao from "../CampoQuestoes";
import styled from "styled-components";

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

const QuestaoMultiplaEscolha = ({ questao, setQuestoesAcertadas, setQuestoesErradas, avancarQuestao }) => {

    console.log('multipla' + questao);
    
  const [respostaSelecionada, setRespostaSelecionada] = useState("");

  const validarResposta = () => {
    const respostaCorreta = questao.respostas.find((resposta) => resposta.autenticacao === 1);
    if (respostaSelecionada === respostaCorreta?.id.toString()) {
      setQuestoesAcertadas((prev) => prev + 1);
      alert("Resposta correta!");
    } else {
      setQuestoesErradas((prev) => prev + 1);
      alert("Resposta incorreta.");
    }
  };

  return (
    <CampoQuestao>
      <Enunciado>{questao.questao_pergunta}</Enunciado>
      <C.CampoAlternativas>
        {questao.respostas.map((resposta) => (
          <C.ItemColuna
            key={resposta.id}
            isSelected={respostaSelecionada === resposta.id.toString()} // Passa se o item está selecionado
            onClick={() => setRespostaSelecionada(resposta.id.toString())} // Atualiza a resposta selecionada
          >
            <C.CampoTexto>{resposta.conteudo}</C.CampoTexto>
          </C.ItemColuna>
        ))}
      </C.CampoAlternativas>
      <C.BotaoResposta
        onClick={() => {
          validarResposta();
          avancarQuestao();
        }}
      >
        Responder
      </C.BotaoResposta>
    </CampoQuestao>
  );
};

export default QuestaoMultiplaEscolha;
