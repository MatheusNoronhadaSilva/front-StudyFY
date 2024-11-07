import React, { useState, useEffect } from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
import Calabreso from '../assets/mascote.png'; // Imagem do mascote padrão
import CalabresoFeliz from '../assets/mascote feliz.png'; // Imagem do mascote feliz
import CalabresoTriste from '../assets/pinguim irritado.png'; // Imagem do mascote triste
import { useNavigate } from 'react-router-dom';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const TelaOrganizarFrases = () => {
  const [enunciado, setEnunciado] = useState('');
  const [ordens, setOrdens] = useState([]);
  const [isOrderedCorrectly, setIsOrderedCorrectly] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [mascoteImage, setMascoteImage] = useState(null);

  const navigate = useNavigate();
  const idQuestao = 5;

  const fetchEnunciado = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/v1/studyfy/questao/${idQuestao}`);
      setEnunciado(response.data.questao[0].enunciado);
    } catch (error) {
      console.error('Erro ao buscar o enunciado:', error);
    }
  };

  const fetchOrdens = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/v1/studyfy/ordens-palavra`);
      const shuffledOrdens = response.data.ordens.sort(() => Math.random() - 0.5);
      setOrdens(shuffledOrdens);
    } catch (error) {
      console.error('Erro ao buscar as ordens:', error);
    }
  };

  useEffect(() => {
    fetchEnunciado();
    fetchOrdens();
  }, []);

  const moveUp = (index) => {
    if (index === 0) return;
    const newOrdens = [...ordens];
    const [movedItem] = newOrdens.splice(index, 1);
    newOrdens.splice(index - 1, 0, movedItem);
    setOrdens(newOrdens);
  };

  const moveDown = (index) => {
    if (index === ordens.length - 1) return;
    const newOrdens = [...ordens];
    const [movedItem] = newOrdens.splice(index, 1);
    newOrdens.splice(index + 1, 0, movedItem);
    setOrdens(newOrdens);
  };

  const handleResponderClick = () => {
    
    const isCorrect = ordens.every((item, index) => item.posicao === index + 1);
    setIsOrderedCorrectly(isCorrect);
    setButtonVisible(true);

    setFeedbackMessage(isCorrect ? 'Parabéns, você ordenou corretamente!' : 'Ordem incorreta, tente novamente!');
    setMascoteImage(isCorrect ? CalabresoFeliz : CalabresoTriste);
  };

  const handleCloseClick = () => {
    navigate('/tela-atividades');
  };

  const handleNextQuestion = () => {
    navigate('/atividade/4');
  };

  const handleRetry = () => {
    fetchOrdens();
    setButtonVisible(false);
  };

  return (
    <Container style={{ backgroundColor: 'white', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        width: '100%', padding: '10px', backgroundColor: '#FFD700', borderBottom: '1px solid black'
      }}>
        <AiOutlineClose size={30} color="#FFFFFF" onClick={handleCloseClick} />
        <img src={Calabreso} alt="Mascote" style={{ width: '50px', height: '50px' }} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <h2 style={{
          fontSize: '1.2em', textTransform: 'uppercase', color: '#FFD700', margin: '20px 10px 0'
        }}>Organize as Frases</h2>
      </div>

      <div style={{
        width: '90%', padding: '40px', backgroundColor: 'white', borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(255, 215, 0, 0.5)', border: '1px solid #FFD700', marginTop: '20px',
        textAlign: 'center'
      }}>
        <h4>{enunciado}</h4>
      </div>

      <div style={{ width: '100%', textAlign: 'center', marginTop: '30px' }}>
        {ordens.map((ordem, index) => (
          <div
            key={ordem.id}
            style={{
              width: '90%', padding: '30px', margin: '10px auto', backgroundColor: '#FFFFFF',
              color: '#000', borderRadius: '10px', border: '1px solid #000', textAlign: 'center',
              fontSize: '1em', fontWeight: 'bold', cursor: 'pointer', minHeight: '70px',
              position: 'relative', marginBottom: '30px'
            }}
          >
            {ordem.conteudo}
            <div style={{
              display: 'flex', flexDirection: 'column', position: 'absolute', top: '50%', right: '10px',
              transform: 'translateY(-50%)', gap: '10px'
            }}>
              <FaArrowUp
                onClick={() => moveUp(index)}
                style={{
                  cursor: 'pointer',
                  color: '#FFD700',
                  fontSize: '24px',
                }}
              />
              <FaArrowDown
                onClick={() => moveDown(index)}
                style={{
                  cursor: 'pointer',
                  color: '#FFD700',
                  fontSize: '24px',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleResponderClick}
        style={{
          width: '80%', padding: '12px', backgroundColor: '#FFD700', color: '#000', borderRadius: '25px',
          border: '1px solid #FFD700', fontSize: '1em', fontWeight: 'bold', margin: '20px 0',
          cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        Responder
      </button>

      {buttonVisible && (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px',
          position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '80%', height: '300px', backgroundColor: isOrderedCorrectly ? 'rgba(76, 175, 80, 0.8)' : 'rgba(244, 67, 54, 0.8)',
          color: '#fff', borderRadius: '10px', textAlign: 'center', padding: '20px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
        }}>
          <img src={mascoteImage} alt="Mascote" style={{ width: '120px', height: '120px', marginBottom: '15px' }} />
          <h3 style={{ fontSize: '1.5em', marginTop: '0' }}>{feedbackMessage}</h3>
        </div>
      )}

      {buttonVisible && (
        <button
          onClick={isOrderedCorrectly ? handleNextQuestion : handleRetry}
          style={{
            width: '80%', padding: '12px', backgroundColor: '#FFD700', color: '#000', borderRadius: '25px',
            border: '1px solid #FFD700', fontSize: '1em', fontWeight: 'bold', margin: '20px 0',
            cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
          }}
        >
          {isOrderedCorrectly ? 'Próxima Questão' : 'Tente Novamente'}
        </button>
      )}

      <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
        <Navegacao />
      </div>
    </Container>
  );
};

export default TelaOrganizarFrases;
