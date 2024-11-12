import React, { useState, useEffect } from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Calabreso from '../assets/mascote.png';
import CalabresoFeliz from '../assets/mascote feliz.png';
import CalabresoTriste from '../assets/pinguim irritado.png';

const Atividade5 = () => {
  const [enunciado, setEnunciado] = useState('');
  const [alternativas, setAlternativas] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loadingEnunciado, setLoadingEnunciado] = useState(true);
  const [loadingAlternativas, setLoadingAlternativas] = useState(true);
  const [respostaFeedback, setRespostaFeedback] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isRespostaCorreta, setIsRespostaCorreta] = useState(null);
  const [buttonVisible, setButtonVisible] = useState(false);

  const navigate = useNavigate();

  const fetchEnunciado = async () => {
    try {
      setLoadingEnunciado(true);
      const response = await axios.get('http://localhost:8080/v1/studyfy/questao/5');
      setEnunciado(response.data.questao[0].enunciado);
      setLoadingEnunciado(false);
    } catch (error) {
      console.error('Erro ao buscar o enunciado:', error);
    }
  };

  const fetchAlternativas = async () => {
    try {
      setLoadingAlternativas(true);
      const response = await axios.get('http://localhost:8080/v1/studyfy/resposta-vf');
      setAlternativas(response.data.respostas || []);
      setLoadingAlternativas(false);
    } catch (error) {
      console.error('Erro ao buscar alternativas:', error);
    }
  };

  useEffect(() => {
    fetchEnunciado();
    fetchAlternativas();
  }, []);

  const handleOptionClick = (index) => {
    if (!isAnswered) {
      setSelectedOption(index);
    }
  };

  const handleCloseClick = () => {
    navigate('/tela-atividades');
  };

  const handleResponderClick = () => {
    if (selectedOption === null) {
      setRespostaFeedback('Por favor, selecione uma alternativa.');
  
      // Após 3 segundos, limpa a mensagem de feedback
      setTimeout(() => {
        setRespostaFeedback('');
      }, 2000);
  
      return;
    }

    const alternativaSelecionada = alternativas[selectedOption];
    const isCorreta = alternativaSelecionada.autenticacao === 1;

    setIsAnswered(true);
    setIsRespostaCorreta(isCorreta);

    if (isCorreta) {
      setRespostaFeedback('PARABÉNS, VOCÊ ACERTOU!');
    } else {
      setRespostaFeedback('Errado, mas não desista, você consegue!');
    }

    setButtonVisible(true);
  };

  const handleNextQuestion = () => {
    // Redireciona para a tela de atividades
    navigate('/atividade/6');
  };

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <Container style={{ backgroundColor: 'white', alignItems: 'center', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: '100%', 
        padding: '10px', 
        backgroundColor: '#FFCC00',  // Cabeçalho com amarelo mais claro
        borderBottom: '1px solid #FEE101' // Linha de separação em amarelo forte
      }}>
        <AiOutlineClose size={25} color="white" onClick={handleCloseClick} />  {/* Ícone do "X" em preto */}
        <img src={Calabreso} alt="Mascote" style={{ width: '50px', height: '50px' }} />
      </div>
      
      <div style={{ flexGrow: '1', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '40px' }}>
        
        <h2 style={{
          fontSize: '1.5em',
          textTransfogirm: 'uppercase',
          color: '#FFCC00',  // Amarelo forte no título
          margin: '40px 0 25px 0'
         // Efeito de sombra no título
        }}>
          Verdadeiro ou Falso
        </h2>

        <div style={{
          width: '90%',
          padding: '55px',
          backgroundColor: '#f9f9f9',
          borderRadius: '10px',
          boxShadow: '0px 4px 8px rgba(255, 215, 0, 0.5)',
          border: '1px solid #FEE101',  // Amarelo mais forte nas bordas
          marginTop: '10px',
          textAlign: 'center'
        }}>
          {loadingEnunciado ? (
            <p>Carregando enunciado...</p>
          ) : (
            <h4 style={{ fontSize: '1.1em', margin: '0' }}>{enunciado}</h4>
          )}
        </div>

        <div style={{ width: '100%', textAlign: 'center', marginTop: '30px' }}>
          {loadingAlternativas ? (
            <p>Carregando alternativas...</p>
          ) : (
            alternativas.map((alternativa, index) => {
              let buttonStyle = {
                display: 'block',
                width: '90%',
                padding: '15px 10px',
                margin: '25px auto',
                backgroundColor: selectedOption === index ? '#FFCC00' : '#FFFFFF',  // Cor do botão em amarelo
                color: '#000',  // Texto em preto
                borderRadius: '20px',
                border: '1px solid #000',
                textAlign: 'center',
                fontSize: '1em',
                fontWeight: 'bold',
                cursor: 'pointer',
                minHeight: '50px',
              };

              if (isAnswered) {
                buttonStyle.backgroundColor = alternativa.autenticacao === 1 ? '#4CAF50' : '#f44336';
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

        <button
          onClick={handleResponderClick}
          style={{
            width: '80%',
            padding: '15px',
            backgroundColor: '#FFCC00',  // Botão de responder com amarelo
            color: '#000',
            borderRadius: '25px',
            border: '1px solid white',  // Bordas do botão em amarelo
            fontSize: '1.2em',
            fontWeight: 'bold',
            margin: '100px 0 20px 0',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            transform: isAnswered ? 'none' : 'scale(1)',
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Responder
        </button>

        {buttonVisible && (
          <button
            onClick={isRespostaCorreta ? handleNextQuestion : handleRetry}
            style={{
              width: '80%',
              padding: '12px',
              backgroundColor: '#FFCC00',  // Amarelo forte
              color: '#000',
              borderRadius: '15px',
              border: '1px solid #FEE101',  // Amarelo forte
              fontSize: '1em',
              fontWeight: 'bold',
              marginTop: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            {isRespostaCorreta ? 'Próxima Questão' : 'Tente Novamente'}
          </button>
        )}

        {respostaFeedback && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '300px',
            backgroundColor: isRespostaCorreta ? 'rgba(76, 175, 80, 0.8)' : 'rgba(244, 67, 54, 0.8)',
            color: '#fff',
            borderRadius: '10px',
            textAlign: 'center',
            padding: '20px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
          }}>
            <div style={{ textAlign: 'center' }}>
              <img src={isRespostaCorreta ? CalabresoFeliz : CalabresoTriste} alt="Mascote" style={{ 
                width: '120px', 
                height: '120px', 
                marginBottom: '15px', 
                animation: 'shake 1s ease' // Shake mais suave
              }} />
              <h3 style={{ fontSize: '1.5em', marginTop: '0' }}>{respostaFeedback}</h3>
            </div>
          </div>
        )}
      </div>

      <Navegacao />
    </Container>
  );
};

export default Atividade5;