import React, { useState, useEffect } from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai'; // Ícone de fechar
import { FaArrowsAltH } from 'react-icons/fa'; // Ícone de múltipla escolha
import { useNavigate } from 'react-router-dom'; // Importando o useNavigate
import Calabreso from '../assets/mascote.png'; // Imagem do mascote
import CalabresoFeliz from '../assets/mascote feliz.png'; // Imagem do mascote feliz
import CalabresoTriste from '../assets/pinguim irritado.png'; // Imagem do mascote triste

const TelaQuestao = () => {
  const [enunciado, setEnunciado] = useState('');
  const [alternativas, setAlternativas] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loadingEnunciado, setLoadingEnunciado] = useState(true);
  const [loadingAlternativas, setLoadingAlternativas] = useState(true);
  const [respostaFeedback, setRespostaFeedback] = useState(''); // Feedback da resposta
  const [isAnswered, setIsAnswered] = useState(false); // Flag para verificar se já clicou no botão "Responder"
  const [isRespostaCorreta, setIsRespostaCorreta] = useState(null); // Estado para armazenar se a resposta foi correta ou não
  const [buttonVisible, setButtonVisible] = useState(false); // Estado para controlar a visibilidade do botão

  const idQuestao = 1;
  const navigate = useNavigate();

  const fetchEnunciado = async () => {
    try {
      setLoadingEnunciado(true);
      const response = await axios.get(`http://localhost:8080/v1/studyfy/questao/${idQuestao}`);
      setEnunciado(response.data.questao[0].enunciado);
      setLoadingEnunciado(false);
    } catch (error) {
      console.error('Erro ao buscar o enunciado:', error);
    }
  };

  const fetchAlternativas = async () => {
    try {
      setLoadingAlternativas(true);
      const response = await axios.get(`http://localhost:8080/v1/studyfy/resposta-multipla`);
      setAlternativas(response.data.respostas || []);
      setLoadingAlternativas(false);
    } catch (error) {
      console.error('Erro ao buscar alternativas:', error);
    }
  };

  useEffect(() => {
    fetchEnunciado();
    fetchAlternativas();
  }, [idQuestao]);

  const handleOptionClick = (index) => {
    if (!isAnswered) {
      setSelectedOption(index); // Permite selecionar a opção antes de clicar no botão "Responder"
    }
  };

  const handleCloseClick = () => {
    navigate('/TelaAtividades');
  };

  const handleResponderClick = () => {
    if (selectedOption === null) {
      setRespostaFeedback('Por favor, selecione uma alternativa.');
      return;
    }

    const alternativaSelecionada = alternativas[selectedOption];
    const isCorreta = alternativaSelecionada.autenticacao === 1;

    // Marcar que a resposta foi enviada
    setIsAnswered(true);
    setIsRespostaCorreta(isCorreta);

    // Exibir feedback de resposta correta ou errada
    if (isCorreta) {
      setRespostaFeedback('PARABÉNS, VOCÊ ACERTOU!');
    } else {
      setRespostaFeedback('Errado, mas não desista, você consegue!');
    }

    // Tornar o botão de próxima questão ou tente novamente visível
    setButtonVisible(true);
  };

  const handleNextQuestion = () => {
    // Lógica para a próxima questão, pode navegar para a próxima página
    console.log('Próxima questão');
  };

  const handleRetry = () => {
    // Recarrega a página atual para tentar novamente
    window.location.reload();
  };

  return (
    <Container style={{ backgroundColor: 'white', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      {/* Barra superior */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '10px', borderBottom: '1px solid #ccc' }}>
        <AiOutlineClose size={30} color="#FFD700" onClick={handleCloseClick} />
        <img src={Calabreso} alt="Mascote" style={{ width: '50px', height: '50px' }} />
      </div>

      {/* Enunciado dentro de um card com bordas e sombras amarelas */}
      <div style={{
        width: '90%',
        padding: '55px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(255, 215, 0, 0.5)', // Sombra amarela
        border: '1px solid #FFD700', // Borda amarela
        marginTop: '20px',
        textAlign: 'center'
      }}>
        {loadingEnunciado ? (
          <p>Carregando enunciado...</p>
        ) : (
          <h4 style={{ fontSize: '1.1em', margin: '0' }}>{enunciado}</h4>
        )}
      </div>

      {/* Texto "Múltipla escolha" */}
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '40px' }}>
        <FaArrowsAltH size={20} color="black" />
        <h2 style={{ fontSize: '1.2em', marginLeft: '15px' }}>Múltipla escolha</h2>
      </div>

      {/* Alternativas */}
      <div style={{ width: '100%', textAlign: 'center', marginTop: '15px' }}>
        {loadingAlternativas ? (
          <p>Carregando alternativas...</p>
        ) : (
          alternativas.map((alternativa, index) => {
            let buttonStyle = {
              display: 'block',
              width: '90%',
              padding: '15px 10px',
              margin: '35px auto',
              backgroundColor: selectedOption === index
                ? '#FFEB3B' // Amarelo quando selecionada
                : '#FFFFFF', // Branco por padrão
              color: '#000',
              borderRadius: '20px',
              border: '1px solid #B0B0B0', // Bordas cinzas
              textAlign: 'center',
              fontSize: '1em',
              fontWeight: 'bold',
              cursor: 'pointer',
              minHeight: '50px',
            };

            // Após clicar em "Responder", mudar para verde ou vermelho
            if (isAnswered) {
              buttonStyle.backgroundColor = alternativa.autenticacao === 1
                ? '#4CAF50' // Verde para resposta correta
                : '#f44336'; // Vermelho para resposta errada
            }

            return (
              <button
                key={alternativa.id}
                onClick={() => handleOptionClick(index)}
                style={buttonStyle}
              >
                {alternativa.conteudo}
              </button>
            );
          })
        )}
      </div>

      {/* Botão de responder */}
      <button
        onClick={handleResponderClick}
        style={{
          width: '80%',
          padding: '12px',
          backgroundColor: '#FFD700',
          color: '#000',
          borderRadius: '25px',
          border: '1px solid #FFD700',
          fontSize: '1em',
          fontWeight: 'bold',
          margin: '40px 0',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        Responder
      </button>

      {/* Botão condicional de próxima questão ou tente novamente */}
      {buttonVisible && (
        <button
          onClick={isRespostaCorreta ? handleNextQuestion : handleRetry}
          style={{
            position: 'absolute',
            top: 'calc(100% - 165px)', // Coloca o botão logo acima do botão "Responder"
            right: '20px', // Ajuste para o lado direito
            width: '40%',
            padding: '12px',
            backgroundColor: '#FFD700',
            color: '#000',
            borderRadius: '15px',
            border: '1px solid #FFD700',
            fontSize: '1em',
            fontWeight: 'bold',
            marginTop: '10px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          {isRespostaCorreta ? 'Próxima Questão' : 'Tente Novamente'}
        </button>
      )}

      {/* Exibição do feedback de resposta */}
      {respostaFeedback && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',  // Fixa o feedback no centro da tela
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',  // Centraliza o quadrado
          width: '80%',  // Ajuste o tamanho do quadrado
          height: '300px',
          backgroundColor: isRespostaCorreta ? 'rgba(76, 175, 80, 0.8)' : 'rgba(244, 67, 54, 0.8)', // Verde ou Vermelho com transparência
          color: '#fff',
          borderRadius: '10px',
          textAlign: 'center',
          padding: '20px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',  // Sombra suave
        }}>
          <div style={{ textAlign: 'center' }}>
            {/* Imagem do mascote */}
            <img src={isRespostaCorreta ? CalabresoFeliz : CalabresoTriste} alt="Mascote" style={{ width: '120px', height: '120px', marginBottom: '15px' }} />
            <h3 style={{ fontSize: '1.5em', marginTop: '0' }}>{respostaFeedback}</h3>
          </div>
        </div>
      )}

      <Navegacao />
    </Container>
  );
};

export default TelaQuestao;
