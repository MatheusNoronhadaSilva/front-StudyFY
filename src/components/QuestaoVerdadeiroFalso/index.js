import React, { useState } from "react";
import Enunciado from "../../styles/enunciadoQuestao";
import CampoQuestao from "../../styles/campoQuestao";
import * as C from './style'


const QuestaoVerdadeiroFalso = ({ questao, setQuestoesAcertadas, setQuestoesErradas, avancarQuestao }) => {
  const [respostaSelecionada, setRespostaSelecionada] = useState("");

  const validarResposta = () => {
    const respostaCorreta = questao.respostas.find((resposta) => resposta.autenticacao === 1);
    console.log(respostaCorreta);
    console.log(respostaSelecionada);
    
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
      <C.BotaoResposta onClick={() => { validarResposta(); avancarQuestao(); }}>Responder</C.BotaoResposta>
    </CampoQuestao>
  );
};

export default QuestaoVerdadeiroFalso;
