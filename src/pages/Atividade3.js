import React, { useState, useEffect } from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';
import Calabreso from '../assets/mascote.png'; // Imagem do mascote
import { useNavigate } from 'react-router-dom';

const TelaOrganizarFrases = () => {
  const [enunciado, setEnunciado] = useState('');
  const [ordens, setOrdens] = useState([]);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);
  const [isOrderedCorrectly, setIsOrderedCorrectly] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  const navigate = useNavigate();
  const idQuestao = 4;

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
      // Embaralha as ordens ao carregar
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

  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };

  const handleDrop = (index) => {
    if (draggedItemIndex === null) return;

    const newOrder = [...ordens];
    const [movedItem] = newOrder.splice(draggedItemIndex, 1);
    newOrder.splice(index, 0, movedItem);
    setOrdens(newOrder);
    setDraggedItemIndex(null);
  };

  const handleResponderClick = () => {
    const isCorrect = ordens.every((item, index) => item.posicao === index + 1);
    setIsOrderedCorrectly(isCorrect);
    setButtonVisible(true);
  };

  const handleCloseClick = () => {
    navigate('/tela-atividades');
  };

  const handleNextQuestion = () => {
    navigate('/atividade/2');
  };

  const handleRetry = () => {
    fetchOrdens();
    setButtonVisible(false);
  };

  return (
    <Container style={{ backgroundColor: 'white', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      {/* Barra superior com o mascote e botão fechar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        width: '100%', padding: '10px', backgroundColor: '#FFD700', borderBottom: '1px solid black'
      }}>
        <AiOutlineClose size={30} color="#FFFFFF" onClick={handleCloseClick} />
        <img src={Calabreso} alt="Mascote" style={{ width: '50px', height: '50px' }} />
      </div>

      {/* Texto "ORGANIZE AS FRASES" */}
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <h2 style={{
          fontSize: '1.2em', textTransform: 'uppercase', color: '#FFD700', margin: '0px 10px 0'
        }}>Organize as Frases</h2>
      </div>

      {/* Enunciado */}
      <div style={{
        width: '90%', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(255, 215, 0, 0.5)', border: '1px solid #FFD700', marginTop: '20px',
        textAlign: 'center'
      }}>
        <h4>{enunciado}</h4>
      </div>

      {/* Área de organização das frases */}
      <div style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
        {ordens.map((ordem, index) => (
          <div
            key={ordem.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
            style={{
              width: '90%', padding: '10px', margin: '10px auto', backgroundColor: '#FFFFFF',
              color: '#000', borderRadius: '10px', border: '1px solid #000', textAlign: 'center',
              fontSize: '1em', fontWeight: 'bold', cursor: 'move', minHeight: '50px'
            }}
          >
            {ordem.conteudo}
          </div>
        ))}
      </div>

      {/* Botão de responder */}
      <button
        onClick={handleResponderClick}
        style={{
          width: '80%', padding: '12px', backgroundColor: '#FFD700', color: '#000', borderRadius: '25px',
          border: '1px solid #FFD700', fontSize: '1em', fontWeight: 'bold', margin: '40px 0',
          cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        Responder
      </button>

      {/* Feedback e botão condicional */}
      {buttonVisible && (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'
        }}>
          <p style={{
            fontSize: '1.2em', color: isOrderedCorrectly ? '#4CAF50' : '#f44336'
          }}>
            {isOrderedCorrectly ? 'Parabéns, você ordenou corretamente!' : 'Ordem incorreta, tente novamente!'}
          </p>
          <button
            onClick={isOrderedCorrectly ? handleNextQuestion : handleRetry}
            style={{
              padding: '12px', backgroundColor: '#FFD700', color: '#000', borderRadius: '15px',
              border: '1px solid #FFD700', fontSize: '1em', fontWeight: 'bold', marginTop: '10px',
              cursor: 'pointer', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
            }}
          >
            {isOrderedCorrectly ? 'Próxima Questão' : 'Tente Novamente'}
          </button>
        </div>
      )}

      {/* Footer fixo */}
      <div style={{ position: 'fixed', bottom: 0, width: '100%' }}>
        <Navegacao />
      </div>
    </Container>
  );
};

export default TelaOrganizarFrases;
