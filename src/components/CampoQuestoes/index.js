import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Estilos gerais
const Container = styled.div`
  background-color: #ffffff;
  padding: 3%;
  border-radius: 8px;
  width: 60%;
  height: 80%;
`;

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
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Enunciado = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  max-height: 30%;
`;

// Estilos para opções de seleção
const OpcaoEstilo = styled.div`
  border: 2px solid ${({ selecionada }) => (selecionada ? "#E9CE03" : "#d9d9d9")};
  box-shadow: 0 0 8px ${({ selecionada }) => (selecionada ? "#E9CE03" : "#d9d9d9")};
  background-color: ${({ selecionada }) => (selecionada ? "#fee101" : "white")};
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  margin: 10px;
  text-align: center;

  &:hover {
    border-color: #E9CE03;
    box-shadow: 0 0 8px #E9CE03;
  }
`;

// Estilos para preencher lacunas
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

// Estilos para correspondência
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

// Componente principal
const CampoQuestao = ({ dadosQuestoes }) => {
  const [questaoAtual, setQuestaoAtual] = useState(0);
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

  const responderQuestao = () => {
    // Validação da resposta
    alert("Resposta enviada!");
    if (questaoAtual < questoes.length - 1) {
      setQuestaoAtual(questaoAtual + 1);
      setRespostaSelecionada(null);
      setRespostasLacunas({});
    } else {
      alert("Você completou todas as questões!");
    }
  };

  return (
    <Container>
      <Header>
        <CloseButton onClick={() => navigate('/tela-atividades')}>X</CloseButton>
        <h3>
          Questão {questaoAtual + 1} de {questoes.length}
        </h3>
      </Header>

      <Conteudo>
        <Enunciado>{questao.questao_pergunta}</Enunciado>

        {questao.questao_tipo_id === 1 || questao.questao_tipo_id === 2 ? (
          // Tipo 1 e 2: Múltipla escolha e verdadeiro ou falso
          questao.respostas.map((opcao) => (
            <OpcaoEstilo
              key={opcao.id}
              selecionada={respostaSelecionada === opcao.id}
              onClick={() => handleOpcaoSelecionada(opcao.id)}
            >
              {opcao.conteudo}
            </OpcaoEstilo>
          ))
        ) : questao.questao_tipo_id === 3 ? (
          // Tipo 3: Preencher lacunas
          <p>
            {questao.questao_pergunta.map((parte, index) => (
              parte.lacuna ? (
                <CampoTexto
                  key={index}
                  onChange={(e) => handlePreencherLacuna(index, e.target.value)}
                />
              ) : (
                parte.texto
              )
            ))}
          </p>
        ) : questao.questao_tipo_id === 4 ? (
          // Tipo 4: Correspondência
          <Colunas>
            <Coluna>
              {questao.opcoesA.map((item) => (
                <ItemColuna key={item.id}>{item.texto}</ItemColuna>
              ))}
            </Coluna>
            <Coluna>
              {questao.opcoesB.map((item) => (
                <ItemColuna key={item.id}>{item.texto}</ItemColuna>
              ))}
            </Coluna>
          </Colunas>
        ) : null}
      </Conteudo>

      <button onClick={responderQuestao}>Responder</button>
    </Container>
  );
};

export default CampoQuestao;
