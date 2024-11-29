import React, { useState } from "react";
import * as C from './style';
import Enunciado from "../../styles/enunciadoQuestao";
import CampoQuestao from "../../styles/campoQuestao";

const QuestaoMultiplaEscolha = ({ questao, setQuestoesAcertadas, setQuestoesErradas, avancarQuestao }) => {

    console.log('multipla' + questao);
    
  const [respostaSelecionadaMultiplaEscolha, setRespostaSelecionada] = useState("");

  const validarRespostaMultiplaEscolha = () => {
    const respostaCorreta = questao.respostas.find((resposta) => resposta.autenticacao === 1);
    if (respostaSelecionadaMultiplaEscolha === respostaCorreta?.id.toString()) {
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
            isSelected={respostaSelecionadaMultiplaEscolha === resposta.id.toString()} // Passa se o item está selecionado
            onClick={() => setRespostaSelecionada(resposta.id.toString())} // Atualiza a resposta selecionada
          >
            <C.CampoTexto>{resposta.conteudo}</C.CampoTexto>
          </C.ItemColuna>
        ))}
      </C.CampoAlternativas>
      <C.BotaoResposta
        onClick={() => {
          validarRespostaMultiplaEscolha();
          avancarQuestao();
        }}
      >
        Responder
      </C.BotaoResposta>
    </CampoQuestao>
  );
};

export default QuestaoMultiplaEscolha;
