import React, { useState } from "react";
import Enunciado from "../../styles/enunciadoQuestao";
import CampoQuestao from "../../styles/campoQuestao";
import * as C from './style'

const QuestaoCorrespondencia = ({ questao, setQuestoesAcertadas, setQuestoesErradas, avancarQuestao }) => {
  const [correspondencias, setCorrespondencias] = useState({});

  const handleCorrespondencia = (chave, valor) => {
    setCorrespondencias({ ...correspondencias, [chave]: valor });
  };

  const validarResposta = () => {
    let acertou = true;

    questao.respostas.forEach((resposta) => {
      if (correspondencias[resposta.palavra_correspondente] !== resposta.resposta_correspondente) {
        acertou = false;
      }
    });

    if (acertou) {
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
      <C.ColunasDiv>
        <C.Coluna>
          {questao.respostas.map((resposta) => (
            <C.ItemColuna key={resposta.id}>
              {resposta.palavra_correspondente}
            </C.ItemColuna>
          ))}
        </C.Coluna>
        <C.Coluna>
          {questao.respostas.map((resposta) => (
            <C.ItemColuna key={resposta.id}>
              <C.CampoTexto
                onChange={(e) =>
                  handleCorrespondencia(resposta.palavra_correspondente, e.target.value)
                }
              >
                <C.Opcao value="">Selecione...</C.Opcao>
                {questao.respostas.map((opcao) => (
                  <C.Opcao key={opcao.id} value={opcao.resposta_correspondente}>
                    {opcao.resposta_correspondente}
                  </C.Opcao>
                ))}
              </C.CampoTexto>
            </C.ItemColuna>
          ))}
        </C.Coluna>
      </C.ColunasDiv>
      <C.BotaoResposta onClick={() => { validarResposta(); avancarQuestao(); }}>Responder</C.BotaoResposta>
    </CampoQuestao>
  );
};

export default QuestaoCorrespondencia;
