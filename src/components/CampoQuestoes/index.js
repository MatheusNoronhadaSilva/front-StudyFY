import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// Estilos gerais
const AreaQuestao = styled.div`
  background-color: #ffffff;
  padding: 3%;
  border-radius: 8px;
  width: 60%;
  height: 80%;
`;

const FaixaAmarela = styled.div`
   width: 100%;
   height:10%;
   min-height: 10%;
   background-color: #fee101;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  padding: 1%;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.5vw;
`;

const Conteudo = styled.div`
  flex-grow: 1;
  display: flex;
  width: 100%;
  height: 80%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
`;

const Enunciado = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  max-height: 30%;
`;

const OpcaoEstilo = styled.div`
  border: 2px solid ${({ selecionada }) => (selecionada ? "#E9CE03" : "#d9d9d9")};
  box-shadow: 0 0 8px ${({ selecionada }) => (selecionada ? "#E9CE03" : "#d9d9d9")};
  background-color: ${({ selecionada }) => (selecionada ? "#fee101" : "white")};
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 3%;
  align-items: center;
  width: 80%;
  height: 60%;

  &:hover {
    border-color: #E9CE03;
    box-shadow: 0 0 8px #E9CE03;
  }
`;

const CampoTexto = styled.input`
  border: 2px solid #d9d9d9;
  border-radius: 5px;
  padding: 5px;
  width: 100px;
  text-align: center;

  &:focus {
    border-color: #E9CE03;
    outline: none;
  }
`;

const Colunas = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
`;

const Coluna = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 10px;
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

const BotaoResponder = styled.div`
  width: 60%;
  background-color: white;
  place-self: center;
  padding: 1.5%;
  text-align: center;
  font-weight: bold;
  font-size: 2vw;
  height: 12%;
  border: solid 2px #d9d9d9;
  box-shadow: 0 5px 0px #d9d9d9;
  border-radius: 8px;
  cursor: pointer;

    &:hover {
    background-color: #fee101;
    border: solid 2px #E9CE03;
    box-shadow: 0 5px 0px #E9CE03;

  }
`

const OpcoesDiv = styled.div`
  display: grid;
  width: 100%;
  height: 60%;
  min-height: 60%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center; /* Centraliza horizontalmente */
  align-items: center;  /* Centraliza verticalmente */
`;



// Componente principal
const CampoQuestao = ({ dadosQuestoes }) => {
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [questoesErradas, setQuestoesErradas] = useState(0);
  const [questoesAcertadas, setQuestoesAcertadas] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [respostasLacunas, setRespostasLacunas] = useState({});
  const navigate = useNavigate();

  const questoes = dadosQuestoes;

  if (!questoes || questoes.length === 0) {
    return <p>Carregando dados...</p>;
  }

  const questao = questoes[questaoAtual];

  const handleOpcaoSelecionada = (id) => {
    setRespostaSelecionada(id);
  };

  const handlePreencherLacuna = (posicao, valor) => {
    setRespostasLacunas({ ...respostasLacunas, [posicao]: valor });
  };

  const validarRespostasLacunas = () => {
    let acertou = true;

    questao.respostas.forEach((resposta) => {
      const valor = respostasLacunas[resposta.posicao_inicial]?.trim().toLowerCase();
      if (valor !== resposta.palavra.trim().toLowerCase()) {
        acertou = false;
      }
    });

    return acertou;
  };

  const responderQuestao = () => {
    let acertou = false;

    if (questao.questao_tipo_id === 1 || questao.questao_tipo_id === 2) {
      const respostaCorreta = questao.respostas.find(
        (resposta) => resposta.autenticacao === 1
      );
      acertou = respostaSelecionada === respostaCorreta?.id;
    } else if (questao.questao_tipo_id === 3) {
      acertou = validarRespostasLacunas();
    }

    if (acertou) {
      setQuestoesAcertadas((prev) => prev + 1);
      alert("Resposta correta!");
    } else {
      setQuestoesErradas((prev) => prev + 1);
      alert("Resposta incorreta.");
    }

    if (questaoAtual < questoes.length - 1) {
      setQuestaoAtual(questaoAtual + 1);
      setRespostaSelecionada(null);
      setRespostasLacunas({});
    } else {
      alert("Você completou todas as questões!");
    }
  };

  return (
    <>
    <FaixaAmarela />
    <AreaQuestao>
      <Header>
        <CloseButton onClick={() => navigate("/tela-atividades")}>X</CloseButton>
        <h3>
          Questão {questaoAtual + 1} de {questoes.length}
        </h3>
      </Header>

      <Conteudo>
  <Enunciado>{questao.questao_pergunta}</Enunciado>
  {questao.questao_tipo_id === 1 || questao.questao_tipo_id === 2 ? (
    <OpcoesDiv>
      {questao.respostas?.map((opcao) => (
        <OpcaoEstilo
          key={opcao.id}
          selecionada={respostaSelecionada === opcao.id}
          onClick={() => handleOpcaoSelecionada(opcao.id)}
        >
          {opcao.conteudo}
        </OpcaoEstilo>
      ))}
    </OpcoesDiv>
  ) : questao.questao_tipo_id === 3 ? (
    <p>
      {questao.questao_pergunta.split("").map((char, index) => {
        const lacuna = questao.respostas?.find(
          (resposta) =>
            index >= resposta.posicao_inicial && index <= resposta.posicao_fim
        );

        if (lacuna) {
          return (
            <CampoTexto
              key={`lacuna-${index}`} // Índice mais descritivo
              onChange={(e) =>
                handlePreencherLacuna(lacuna.posicao_inicial, e.target.value)
              }
            />
          );
        }

        return <span key={`char-${index}`}>{char}</span>;
      })}
    </p>
  ) : null}
</Conteudo>


      <BotaoResponder onClick={responderQuestao}>Responder</BotaoResponder>
    </AreaQuestao>
    </>
  );
};

export default CampoQuestao;
