import React, { useState, useEffect } from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai'; // Ícone de fechar
import { FaArrowsAltH } from 'react-icons/fa'; // Ícone de múltipla escolha

const TelaQuestao = () => {
  const [enunciado, setEnunciado] = useState('');
  const [alternativas, setAlternativas] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loadingEnunciado, setLoadingEnunciado] = useState(true);
  const [loadingAlternativas, setLoadingAlternativas] = useState(true);

  const idQuestao = 1;

  const fetchEnunciado = async () => {
    try {
      setLoadingEnunciado(true);
     const response = await axios.get(`http://localhost:8080/v1/studyfy/questao/${idQuestao}`)
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
    setSelectedOption(index);
  };

  return (
    <Container style={{ backgroundColor: 'white', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      {/* Barra superior */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '10px', borderBottom: '1px solid #ccc' }}>
        <AiOutlineClose size={30} color="#FFD700" />
      </div>

      {/* Enunciado dentro de um card */}
      <div style={{
        width: '90%',
        padding: '15px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
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
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <FaArrowsAltH size={20} color="black" />
        <h2 style={{ fontSize: '1.2em', marginLeft: '5px' }}>Múltipla escolha</h2>
      </div>

      {/* Alternativas */}
      <div style={{ width: '100%', textAlign: 'center', marginTop: '30px' }}>
        {loadingAlternativas ? (
          <p>Carregando alternativas...</p>
        ) : (
          alternativas.map((alternativa, index) => (
            <button
              key={alternativa.id}
              onClick={() => handleOptionClick(index)}
              style={{
                display: 'block',
                width: '90%',
                padding: '15px',
                margin: '10px auto',
                backgroundColor: selectedOption === index ? '#ffeb3b' : '#fff',
                color: '#000',
                borderRadius: '10px',
                border: selectedOption === index ? '3px solid black' : '1px solid #ccc',
                textAlign: 'left',
                fontSize: '1em',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              <span style={{ marginRight: '10px' }}>A</span>
              {alternativa.conteudo}
            </button>
          ))
        )}
      </div>

      {/* Botão de responder com borda forte embaixo */}
      <button style={{
        width: '90%',
        padding: '15px',
        backgroundColor: '#FFD700',
        color: '#000',
        borderRadius: '10px',
        border: '1px solid #ccc',
        borderBottom: '4px solid black',
        fontSize: '1.1em',
        fontWeight: 'bold',
        margin: '20px 0',
        cursor: 'pointer'
      }}>
        Responder
      </button>

      <Navegacao />
    </Container>
  );
};

export default TelaQuestao;










//const response = await axios.get(`http://localhost:8080/v1/studyfy/questao/${idQuestao}`)


//const response = await axios.get(`http://localhost:8080/v1/studyfy/resposta-multipla`);