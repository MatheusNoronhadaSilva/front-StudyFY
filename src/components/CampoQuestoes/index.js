import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestaoMultiplaEscolha from "../QuestaoMultiplaEscolha";
import QuestaoVerdadeiroFalso from "../QuestaoVerdadeiroFalso";
import QuestaoCorrespondencia from "../QuestaoCorrespondencia";
import * as C from './style';
import TelaCheia from "../../styles/telaCheia";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const CampoQuestao = ({ dadosQuestoes }) => {
  
  console.log('Dados recebidos no CampoQuestao:', dadosQuestoes);
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [questoesErradas, setQuestoesErradas] = useState(0);
  const [questoesAcertadas, setQuestoesAcertadas] = useState(0);
  const navigate = useNavigate();

  const questao = dadosQuestoes[questaoAtual];

  console.log('teste' + questao);
  

  const avancarQuestao = () => {
    if (questaoAtual < dadosQuestoes.length - 1) {
      setQuestaoAtual(questaoAtual + 1);
    } else {
      alert("Você completou todas as questões!");
    }
  };

  console.log('teste2' + questao);
  
  return (
    <TelaCheia style={{ alignItems: 'center', flexDirection: 'column' }}>
      <C.TelaHeader />
      <C.CampoQuestoesDiv>
        <C.HeaderQuestao>
          <C.Fechar onClick={() => navigate('/tela-atividades')}>
            <C.IconeFechar icon={faClose} />
          </C.Fechar>
          <C.Contagem>
            {questaoAtual + 1}/{dadosQuestoes.length} {/* Progresso Atual */}
          </C.Contagem>
        </C.HeaderQuestao>
        <C.Questao>
          {questao.questao_tipo_id === 1 && (
            <QuestaoMultiplaEscolha
              questao={questao}
              setQuestoesAcertadas={setQuestoesAcertadas}
              setQuestoesErradas={setQuestoesErradas}
              avancarQuestao={avancarQuestao}
            />
          )}
          {questao.questao_tipo_id === 2 && (
            <QuestaoVerdadeiroFalso
              questao={questao}
              setQuestoesAcertadas={setQuestoesAcertadas}
              setQuestoesErradas={setQuestoesErradas}
              avancarQuestao={avancarQuestao}
            />
          )}
          {questao.questao_tipo_id === 4 && (
            <QuestaoCorrespondencia
              questao={questao}
              setQuestoesAcertadas={setQuestoesAcertadas}
              setQuestoesErradas={setQuestoesErradas}
              avancarQuestao={avancarQuestao}
            />
          )}
        </C.Questao>
      </C.CampoQuestoesDiv>
    </TelaCheia>
  );
};

export default CampoQuestao;
