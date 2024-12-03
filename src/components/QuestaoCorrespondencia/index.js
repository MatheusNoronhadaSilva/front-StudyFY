import React, { useState } from "react";
import Enunciado from "../../styles/enunciadoQuestao";
import CampoQuestao from "../../styles/campoQuestao";
import * as C from './style'
import BotaoResponderQuestao from "../../styles/botaoResponderQuestao";
import Swal from "sweetalert2";

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
      Swal.fire({
        title: "Continue assim!",
        icon: "success",
        confirmButtonText: "Continuar",
      }).then((result) => {
        if (result.isConfirmed) {
          avancarQuestao()
        }
      });
    } else {
      setQuestoesErradas((prev) => prev + 1);
      Swal.fire({
        title: "Que pena",
        icon: "error",
        confirmButtonText: "Continuar",
      }).then((result) => {
        if (result.isConfirmed) {
          avancarQuestao()
        }
      });
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
      <BotaoResponderQuestao onClick={() => { validarResposta()}}>Responder</BotaoResponderQuestao>
    </CampoQuestao>
  );
};

export default QuestaoCorrespondencia;
