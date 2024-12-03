import React, { useState } from "react";
import Enunciado from "../../styles/enunciadoQuestao";
import CampoQuestao from "../../styles/campoQuestao";
import * as C from './style';
import BotaoResponderQuestao from "../../styles/botaoResponderQuestao";
import Swal from "sweetalert2";

const QuestaoVerdadeiroFalso = ({ questao, setQuestoesAcertadas, setQuestoesErradas, avancarQuestao }) => {
  const [respostaSelecionada, setRespostaSelecionada] = useState("");

  const validarResposta = () => {
    const respostaCorreta = questao.respostas.find((resposta) => resposta.autenticacao === 1);
    console.log("Resposta Correta:", respostaCorreta?.id);
    console.log("Resposta Selecionada:", respostaSelecionada);

    if (respostaSelecionada === respostaCorreta?.id.toString()) {
      setQuestoesAcertadas((prev) => prev + 1);
      Swal.fire({
        title: "Continue assim!",
        icon: "success",
        confirmButtonText: "Continuar",
      }).then((result) => {
        if (result.isConfirmed) {
          avancarQuestao();
        }
      });
    } else {
      setQuestoesErradas((prev) => prev + 1);
      Swal.fire({
        title: "Que pena!",
        icon: "error",
        confirmButtonText: "Continuar",
      }).then((result) => {
        if (result.isConfirmed) {
          avancarQuestao();
        }
      });
    }
  };

  return (
    <CampoQuestao>
      <Enunciado>{questao.questao_pergunta}</Enunciado>
      <C.CampoAlternativas>
        {questao.respostas.map((resposta) => (
          <C.ItemColuna
            key={resposta.id}
            isSelected={respostaSelecionada === resposta.id.toString()}
            onClick={() => setRespostaSelecionada(resposta.id.toString())}
          >
            <C.CampoTexto>{resposta.conteudo}</C.CampoTexto>
          </C.ItemColuna>
        ))}
      </C.CampoAlternativas>
      <BotaoResponderQuestao onClick={validarResposta}>Responder</BotaoResponderQuestao>
    </CampoQuestao>
  );
};

export default QuestaoVerdadeiroFalso;
