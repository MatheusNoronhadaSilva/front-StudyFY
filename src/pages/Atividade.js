import React, { useState, useEffect } from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
import { FaArrowsAltH } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Calabreso from '../assets/mascote.png';
import CalabresoFeliz from '../assets/mascote feliz.png';
import CalabresoTriste from '../assets/pinguim irritado.png';

const TelaQuestao = () => {
  const [enunciado, setEnunciado] = useState('');
  const [alternativas, setAlternativas] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loadingEnunciado, setLoadingEnunciado] = useState(true);
  const [loadingAlternativas, setLoadingAlternativas] = useState(true);
  const [respostaFeedback, setRespostaFeedback] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);
  const [isRespostaCorreta, setIsRespostaCorreta] = useState(null);
  const [buttonVisible, setButtonVisible] = useState(false);

  const idQuestao = 1;
  const navigate = useNavigate();

  useEffect(() => {
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

    fetchEnunciado();
    fetchAlternativas();
  }, [idQuestao]);

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
      return;
    }

    const alternativaSelecionada = alternativas[selectedOption];
    const isCorreta = alternativaSelecionada.autenticacao === 1;
    setIsAnswered(true);
    setIsRespostaCorreta(isCorreta);

    setRespostaFeedback(isCorreta ? 'PARABÉNS, VOCÊ ACERTOU!' : 'Errado, mas não desista, você consegue!');
    setButtonVisible(true);
  };

  const handleNextQuestion = () => {
    navigate('/atividade/2');
  };

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <Container style={{ backgroundColor: 'white', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '10px',
        backgroundColor: '#FFD700', borderBottom: '1px solid black'
      }}>
        <AiOutlineClose size={30} color="#FFFFFF" onClick={handleCloseClick} />
        <img src={Calabreso} alt="Mascote" style={{ width: '50px', height: '50px' }} />
      </div>

      <div style={{ flexGrow: '1', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{
          width: '90%', padding: '55px', backgroundColor: '#f9f9f9', borderRadius: '10px',
          boxShadow: '0px 4px 8px rgba(255, 215, 0, 0.5)', border: '1px solid #FFD700', marginTop: '20px', textAlign: 'center'
        }}>
          {loadingEnunciado ? <p>Carregando enunciado...</p> : <h4 style={{ fontSize: '1.1em', margin: '0' }}>{enunciado}</h4>}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginTop: '40px' }}>
          <FaArrowsAltH size={20} color="black" />
          <h2 style={{ fontSize: '1.2em', textTransform: 'uppercase', color: '#FFD700', margin: '0px 10px 0' }}>Múltipla escolha</h2>
        </div>

        <div style={{ width: '100%', textAlign: 'center', marginTop: '15px' }}>
          {loadingAlternativas ? <p>Carregando alternativas...</p> : (
            alternativas.map((alternativa, index) => {
              // Estilo das alternativas
              const buttonStyle = {
                display: 'block',
                width: '90%',
                padding: '15px 10px',
                margin: '35px auto',
                color: '#000',
                borderRadius: '20px',
                border: '1px solid #000',
                textAlign: 'center',
                fontSize: '1em',
                fontWeight: 'bold',
                cursor: 'pointer',
                minHeight: '50px',
                backgroundColor: selectedOption === index ? '#FFEB3B' : '#FFFFFF', // Cor amarela para a opção selecionada
              };

              // Exibir feedback visual após o usuário responder
              if (isAnswered) {
                if (alternativa.autenticacao === 1 && isRespostaCorreta) {
                  buttonStyle.backgroundColor = '#4CAF50'; // Verde para correta (quando acerta)
                } else if (selectedOption === index && alternativa.autenticacao === 0) {
                  buttonStyle.backgroundColor = '#f44336'; // Vermelho para errada (se a opção escolhida for errada)
                } else if (alternativa.autenticacao === 0 && !isRespostaCorreta) {
                  buttonStyle.backgroundColor = '#FFFFFF'; // Branco para alternativas não selecionadas quando o usuário erra
                }
              }

              return (
                <button key={alternativa.id} onClick={() => handleOptionClick(index)} style={buttonStyle}>
                  {alternativa.conteudo}
                </button>
              );
            })
          )}
        </div>

        <button
          onClick={handleResponderClick}
          style={{
            width: '80%', padding: '12px', backgroundColor: '#FFD700', color: '#000', borderRadius: '25px', border: '1px solid #FFD700',
            fontSize: '1em', fontWeight: 'bold', margin: '40px 0', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        >
          Responder
        </button>

        {buttonVisible && (
          <button
            onClick={isRespostaCorreta ? handleNextQuestion : handleRetry}
            style={{
              position: 'absolute', top: 'calc(100% - 165px)', right: '20px', width: '40%', padding: '12px', backgroundColor: '#FFD700', color: '#000',
              borderRadius: '15px', border: '1px solid #FFD700', fontSize: '1em', fontWeight: 'bold', cursor: 'pointer', transition: 'all 0.3s ease',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            {isRespostaCorreta ? 'Próxima Questão' : 'Tente Novamente'}
          </button>
        )}

        {respostaFeedback && (
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '80%', height: '300px', backgroundColor: isRespostaCorreta ? 'rgba(76, 175, 80, 0.8)' : 'rgba(244, 67, 54, 0.8)', color: '#fff',
            borderRadius: '10px', textAlign: 'center', padding: '20px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <img src={isRespostaCorreta ? CalabresoFeliz : CalabresoTriste} alt="Mascote" style={{ width: '120px', height: '120px', marginBottom: '15px' }} />
              <h3 style={{ fontSize: '1.5em', marginTop: '0' }}>{respostaFeedback}</h3>
            </div>
          </div>
        )}
      </div>
      <Navegacao />
    </Container>
  );
};

export default TelaQuestao;
