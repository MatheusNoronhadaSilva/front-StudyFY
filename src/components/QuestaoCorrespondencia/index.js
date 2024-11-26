import React, { useState } from "react";
import styled from "styled-components";
import Enunciado from "../../styles/enunciadoQuestao";
import CampoQuestao from "../CampoQuestoes";

const Colunas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
`;

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

const CampoTexto = styled.select`
  border: 2px solid #d9d9d9;
  border-radius: 5px;
  padding: 5px;
  width: 100%;
  text-align: center;

  &:focus {
    border-color: #E9CE03;
    outline: none;
  }
`;

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
      <Colunas>
        <div>
          {questao.respostas.map((resposta) => (
            <ItemColuna key={resposta.id}>
              {resposta.palavra_correspondente}
            </ItemColuna>
          ))}
        </div>
        <div>
          {questao.respostas.map((resposta) => (
            <ItemColuna key={resposta.id}>
              <CampoTexto
                onChange={(e) =>
                  handleCorrespondencia(resposta.palavra_correspondente, e.target.value)
                }
              >
                <option value="">Selecione...</option>
                {questao.respostas.map((opcao) => (
                  <option key={opcao.id} value={opcao.resposta_correspondente}>
                    {opcao.resposta_correspondente}
                  </option>
                ))}
              </CampoTexto>
            </ItemColuna>
          ))}
        </div>
      </Colunas>
      <button onClick={() => { validarResposta(); avancarQuestao(); }}>Responder</button>
    </CampoQuestao>
  );
};

export default QuestaoCorrespondencia;
