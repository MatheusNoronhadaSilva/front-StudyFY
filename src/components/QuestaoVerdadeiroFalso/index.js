import React, { useState } from "react";
import styled from "styled-components";
import Enunciado from "../../styles/enunciadoQuestao";
import CampoQuestao from "../CampoQuestoes";

const ItemColuna = styled.div`
  padding: 10px;
  border: 2px solid #d9d9d9;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  background-color: white;

  &:hover {
    border-color: #E9CE03;
    box-shadow: 0 0 8px #E9CE03;
  }
`;

const QuestaoVerdadeiroFalso = ({ questao, setQuestoesAcertadas, setQuestoesErradas, avancarQuestao }) => {
  const [respostaSelecionada, setRespostaSelecionada] = useState("");

  const validarResposta = () => {
    if (respostaSelecionada === questao.resposta_correta) {
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
      <ItemColuna>
        <input
          type="radio"
          name="resposta"
          value="Verdadeiro"
          onChange={(e) => setRespostaSelecionada(e.target.value)}
        />
        <label>Verdadeiro</label>
      </ItemColuna>
      <ItemColuna>
        <input
          type="radio"
          name="resposta"
          value="Falso"
          onChange={(e) => setRespostaSelecionada(e.target.value)}
        />
        <label>Falso</label>
      </ItemColuna>
      <button onClick={() => { validarResposta(); avancarQuestao(); }}>Responder</button>
    </CampoQuestao>
  );
};

export default QuestaoVerdadeiroFalso;
