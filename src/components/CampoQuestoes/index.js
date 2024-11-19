import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Estilos com styled-components
const Container = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  width: 60%;
  height: 80%;
  background-color: red;
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
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const QuestaoInfo = styled.div`
  text-align: right;
`;

const QuestaoAndamento = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const QuestaoTipo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const Tipo = styled.span`
  font-size: 14px;
  color: #333;
  margin-right: 5px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const Conteudo = styled.div`
  margin-bottom: 20px;
`;

const Enunciado = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Opcoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Opcao = styled.label`
  font-size: 16px;
  cursor: pointer;
`;

const OpcaoInput = styled.input`
  margin-right: 10px;
`;

const ResponderButton = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  
  &:hover {
    background-color: #45a049;
  }
`;

const ConteudoComImagem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ConteudoImagem = styled.div`
  width: 45%;
  height: 150px;
  background-color: #ddd;
  text-align: center;
  line-height: 150px;
  color: white;
  font-size: 18px;
  border-radius: 8px;
`;

const ConteudoTexto = styled.div`
  width: 50%;
`;

const CampoQuestao = () => {
  const [mostrarImagem, setMostrarImagem] = useState(false);
  const navigate = useNavigate()

  const adicionarImagem = () => {
    setMostrarImagem(true);
  };

  const TelaAtividades = () => {
    navigate('/tela-atividades')
}

  return (
    <Container>
      <Header>
        <CloseButton onClick={TelaAtividades}>X</CloseButton>
        <QuestaoInfo>
          <QuestaoAndamento>1/10</QuestaoAndamento>
          <QuestaoTipo>
            <Tipo>Múltipla escolha</Tipo>
            <Icon src="https://img.icons8.com/ios/50/000000/multiple-choice.png" alt="Ícone múltipla escolha" />
          </QuestaoTipo>
        </QuestaoInfo>
      </Header>

      <Conteudo>
        {mostrarImagem ? (
          <ConteudoComImagem>
            <ConteudoImagem>Imagem aqui</ConteudoImagem>
            <ConteudoTexto>
              <Enunciado>Qual é a capital do Brasil?</Enunciado>
              <Opcoes>
                <Opcao>
                  <OpcaoInput type="radio" name="resposta" value="a" />
                  Brasília
                </Opcao>
                <Opcao>
                  <OpcaoInput type="radio" name="resposta" value="b" />
                  Rio de Janeiro
                </Opcao>
                <Opcao>
                  <OpcaoInput type="radio" name="resposta" value="c" />
                  São Paulo
                </Opcao>
                <Opcao>
                  <OpcaoInput type="radio" name="resposta" value="d" />
                  Salvador
                </Opcao>
              </Opcoes>
            </ConteudoTexto>
          </ConteudoComImagem>
        ) : (
          <>
            <Enunciado>Qual é a capital do Brasil?</Enunciado>
            <Opcoes>
              <Opcao>
                <OpcaoInput type="radio" name="resposta" value="a" />
                Brasília
              </Opcao>
              <Opcao>
                <OpcaoInput type="radio" name="resposta" value="b" />
                Rio de Janeiro
              </Opcao>
              <Opcao>
                <OpcaoInput type="radio" name="resposta" value="c" />
                São Paulo
              </Opcao>
              <Opcao>
                <OpcaoInput type="radio" name="resposta" value="d" />
                Salvador
              </Opcao>
            </Opcoes>
          </>
        )}
      </Conteudo>

      <ResponderButton onClick={adicionarImagem}>Adicionar Imagem</ResponderButton>
    </Container>
  );
};

export default CampoQuestao;
