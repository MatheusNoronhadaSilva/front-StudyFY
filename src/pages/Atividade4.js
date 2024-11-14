import React, { useState, useEffect } from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Calabreso from '../assets/mascote.png';
import CalabresoFeliz from '../assets/mascote feliz.png';
import CalabresoTriste from '../assets/pinguim irritado.png';

// Função para embaralhar o array
const shuffleArray = (array) => {
  const shuffledArray = [...array]; // Cria uma cópia para não modificar o original
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Troca os elementos
  }
  return shuffledArray;
};

const AtividadeCorrespondencia = () => {
  const [enunciado, setEnunciado] = useState('');
  const [correspondencias, setCorrespondencias] = useState([]);
  const [selectedCorrespondencias, setSelectedCorrespondencias] = useState({});
  const [respostaFeedback, setRespostaFeedback] = useState('');
  const [isRespostaCorreta, setIsRespostaCorreta] = useState(null);
  const [buttonVisible, setButtonVisible] = useState(false);

  const navigate = useNavigate();

  const fetchEnunciado = async () => {
    try {
      const response = await axios.get('http://localhost:8080/v1/studyfy/questao/4');
      setEnunciado(response.data.questao[0].enunciado);
    } catch (error) {
      console.error('Erro ao buscar o enunciado:', error);
    }
  };

  const fetchCorrespondencias = async () => {
    try {
      const response = await axios.get('http://localhost:8080/v1/studyfy/resposta-correspondencia');
      const todasCorrespondencias = response.data.respostas || [];
      
      // Filtra as correspondências com IDs de 1 a 5
      const correspondenciasFiltradas = todasCorrespondencias.filter((item) => item.id >= 1 && item.id <= 5);
      setCorrespondencias(correspondenciasFiltradas);
    } catch (error) {
      console.error('Erro ao buscar correspondências:', error);
    }
  };

  useEffect(() => {
    fetchEnunciado();
    fetchCorrespondencias();
  }, []);

  const handleOptionSelect = (country, capital) => {
    setSelectedCorrespondencias((prev) => ({
      ...prev,
      [country]: capital
    }));
  };

  const handleResponderClick = () => {
    // Verifica se todas as alternativas foram selecionadas
    if (Object.keys(selectedCorrespondencias).length !== correspondencias.length) {
      setRespostaFeedback('Por favor, selecione uma alternativa.');
      setTimeout(() => {
        setRespostaFeedback('');
      }, 2000);
      return;
    }

    const isCorrect = correspondencias.every(
      (item) => selectedCorrespondencias[item.resposta_correspondente] === item.palavra_correspondente
    );

    setIsRespostaCorreta(isCorrect);
    setRespostaFeedback(isCorrect ? 'PARABÉNS, VOCÊ PASSOU PARA O PRÓXIMO ASSUNTO!' : 'Errado, mas não desista, você consegue!');
    setButtonVisible(true);
  };

  const handleCloseClick = () => {
    navigate('/tela-atividades');
  };

  const handleNextChapter = () => {
    navigate('/tela-atividades'); // Aqui você deve mudar para a rota correspondente ao próximo capítulo
  };

  const handleRetry = () => {
    window.location.reload();
  };

  const shuffledCorrespondencias = shuffleArray(correspondencias);

  return (
    <Container style={{ 
        backgroundColor: 'white', 
        alignItems: 'center', 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        overflowY: 'auto'
      }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: '100%', 
        padding: '10px', 
        backgroundColor: '#FFD700', 
        borderBottom: '1px solid #FFD700',
        position: 'relative',
      }}>
        <AiOutlineClose size={30} color="white" onClick={handleCloseClick} />
        <img src={Calabreso} alt="Mascote" style={{ width: '50px', height: '50px' }} />
      </div>

      <div style={{ 
        flexGrow: '1', 
        width: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        paddingBottom: '20px',
        overflowY: 'auto',
      }}>
        <h2 style={{
          fontSize: '1.5em',
          textTransform: 'uppercase',
          color: '#FFD700', 
          margin: '15px 20px 25px 100px'  
        }}>
          Atividade de Correspondência
        </h2>

        <div style={{
          width: '90%',
          padding: '45px',
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0px 4px 8px rgba(255, 215, 0, 0.5)',
          border: '1px solid #FFD700',
          marginTop: '10px',
          textAlign: 'center'
        }}>
          <h4 style={{ fontSize: '1.1em', margin: '0' }}>{enunciado}</h4>
        </div>

        <div style={{ width: '100%', textAlign: 'center', marginTop: '30px' }}>
          {correspondencias.map((correspondencia, index) => (
            <div key={correspondencia.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '90%', margin: '10px auto' }}>
              <div style={{
                width: '45%',
                padding: '15px',
                backgroundColor: '#FFEB3B',
                borderRadius: '20px',
                textAlign: 'center',
                fontWeight: 'bold',
                border: '1px solid black'
              }}>
                {correspondencia.resposta_correspondente}
              </div>
              <select
                onChange={(e) => handleOptionSelect(correspondencia.resposta_correspondente, e.target.value)}
                style={{
                  width: '45%',
                  padding: '10px',
                  borderRadius: '10px',
                  border: '1px solid #FFD700',
                  backgroundColor: '#FFFFFF',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                <option value="">Selecione</option>
                {shuffledCorrespondencias.map((option) => (
                  <option key={option.id} value={option.palavra_correspondente}>
                    {option.palavra_correspondente}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <button
          onClick={handleResponderClick}
          style={{
            width: '80%',
            padding: '15px',
            backgroundColor: '#FFD700',
            color: '#000',
            borderRadius: '25px',
            border: '1px solid #FFD700',
            fontSize: '1.2em',
            fontWeight: 'bold',
            margin: '30px 0 20px 0',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          Responder
        </button>

        {buttonVisible && (
          <button
            onClick={isRespostaCorreta ? handleNextChapter : handleRetry}
            style={{
              width: '80%',
              padding: '12px',
              backgroundColor: '#FFD700',
              color: '#000',
              borderRadius: '15px',
              border: '1px solid #FFD700',
              fontSize: '1em',
              fontWeight: 'bold',
              marginTop: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            {isRespostaCorreta ? 'Próximo Assunto' : 'Tente Novamente'}
          </button>
        )}

        {respostaFeedback && (
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '300px',
            backgroundColor: isRespostaCorreta ? 'rgba(76, 175, 80, 0.8)' : 'rgba(244, 67, 54, 0.8)',
            borderRadius: '20px',
            padding: '20px',
            color: 'white',
            fontSize: '1.5em',
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
            <img
              src={isRespostaCorreta ? CalabresoFeliz : CalabresoTriste}
              alt={isRespostaCorreta ? 'Mascote Feliz' : 'Mascote Triste'}
              style={{ width: '100px', height: '100px', marginRight: '20px' }}
            />
            {respostaFeedback}
          </div>
        )}
      </div>

      <Navegacao />
    </Container>
  );
};

export default AtividadeCorrespondencia;
