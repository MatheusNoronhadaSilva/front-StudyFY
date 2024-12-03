import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuestaoVerdadeiroFalso from "../QuestaoVerdadeiroFalso";
import QuestaoCorrespondencia from "../QuestaoCorrespondencia";
import QuestaoMultiplaEscolha from "../QuestaoMultiplaEscolha";
import * as C from './style';
import TelaCheia from "../../styles/telaCheia";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const CampoQuestao = ({ dadosQuestoes, corAtual }) => {
  
  console.log('Dados recebidos no CampoQuestao:', dadosQuestoes);
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [questoesErradas, setQuestoesErradas] = useState(0);
  const [questoesAcertadas, setQuestoesAcertadas] = useState(0);
  const [respostaSelecionadaMultiplaEscolha, setRespostaSelecionada] = useState("");
  const navigate = useNavigate();

  const questao = dadosQuestoes[questaoAtual];
  
  useEffect(() => {
    console.log('Questões Acertadas:', questoesAcertadas);
  }, [questoesAcertadas]); // Isso será executado sempre que questoesAcertadas mudar

  console.log('aaa', questoesAcertadas);
  

  const avancarQuestao = () => {
    if (questaoAtual < dadosQuestoes.length - 1) {
      setQuestaoAtual(questaoAtual + 1);
    } else {
  
      // Usando a versão anterior para garantir o valor atualizado
      setQuestoesAcertadas((prevAcertadas) => {
        setQuestoesErradas((prevErradas) => {
          const resultado = {
            questoesAcertadas: prevAcertadas,
            questoesErradas: prevErradas,
          };
          console.log('Resultado Final:', resultado);
          
          // Navega para a página de resultados com o estado atualizado
          navigate(`/resultado-questoes/`, { state: { geralAtividade: resultado, corAtual: corAtual } });
        });
      });
    }
  };
  
  
  return (
    <TelaCheia style={{ alignItems: 'center', flexDirection: 'column' }}>
      <C.TelaHeader />
      <C.CampoQuestoesDiv>
        <C.HeaderQuestao>
          <C.Fechar onClick={() => navigate('/tela-atividades')}>
            <C.IconeFechar icon={faClose} />
          </C.Fechar>
          <C.Contagem>
            {questaoAtual + 1}/{dadosQuestoes.length}
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
