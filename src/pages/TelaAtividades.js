import React, { useState, useEffect } from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TelaAtividades = () => {
  const [questao, setQuestao] = useState(null);
  const [enunciado, setEnunciado] = useState('');
  const [selectedButtons, setSelectedButtons] = useState(Array(12).fill(false));
  const [idQuestao, setIdQuestao] = useState(1);
  const navigate = useNavigate();

  const fetchQuestao = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/v1/studyfy/questao/${id}`);
      const questaoData = response.data.questao[0];
      setQuestao(questaoData);
      setEnunciado(questaoData.enunciado);
    } catch (error) {
      console.error('Erro ao buscar a questão', error);
    }
  };

  useEffect(() => {
    fetchQuestao(idQuestao);
  }, [idQuestao]);

  const handleButtonClick = (index) => {
    const newId = index + 1;
    setIdQuestao(newId);

    setSelectedButtons((prev) => {
      const newSelectedButtons = [...prev];
      newSelectedButtons[index] = !newSelectedButtons[index];
      return newSelectedButtons;
    });
  };

  const handleStartActivity = (activity, index) => {
    alert(`Atividade "${activity}" iniciada!`);
    if (index === 0) {
      navigate('/atividade/1'); // O primeiro botão leva para Atividades.js
    } else if (index === 1) {
      navigate('/atividade/2'); // O segundo botão leva para Atividade2.js
    } else if (index === 2) {
      navigate('/atividade/3'); // O terceiro botão leva para Atividade3.js
    } else if (index === 3) {
      navigate('/atividade/4')
    }
  };
  

  useEffect(() => {
    const lastCardIndex = selectedButtons.length - 1;
    if (selectedButtons[lastCardIndex]) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }, [selectedButtons]);

  return (
    <Container style={{ backgroundColor: 'white', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <div style={{ width: '100%', flexGrow: '1', overflowY: 'auto', textAlign: 'center', marginTop: '10%' }}>
        <div style={{
          display: 'flex', position: 'fixed', zIndex: '100', width: '100%', height: '5%',
          backgroundColor: 'white', top: 0, alignItems: 'center', justifyContent: 'center', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{
            fontSize: '1.0em',
            textShadow: '1px 1px 5px rgba(0, 0, 0, 0.2)'
          }}>
            Matemática 4º - Fund1
          </h2>
        </div>

        <div style={{
          backgroundColor: '#ffeb3b', padding: '5%', color: '#000000', width: '100%',
          textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.0em'
        }}>
          Assunto 1 - Soma e subtração
        </div>

        <h3 style={{
          marginTop: '5%', fontSize: '1.5em', backgroundColor: '#007bbf', color: '#fff',
          padding: '1% 5%', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', display: 'inline-block'
        }}>
          Soma simples
        </h3>

        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '15%',
          width: '60%', marginLeft: '10%'
        }}>
          {[1, 2, 3, 4].map((activity, index) => (
            <div key={index} style={{
              textAlign: 'center', marginBottom: '10%', alignSelf: index % 2 === 1 ? 'flex-end' : 'flex-start'
            }}>
              <button
                style={{
                  width: '60px', height: '60px', backgroundColor: '#ffeb3b', border: '2px solid #e9ce03',
                  borderRadius: '10%', cursor: 'pointer', boxShadow: '0 0.5vh 0 0 #E9CE03', marginLeft: index % 2 === 1 ? '20%' : '0',
                }}
                onClick={() => handleButtonClick(index)}
              ></button>

              {selectedButtons[index] && (
                <div style={{
                  marginTop: '10%', padding: '8%', border: '1px solid #ccc', borderRadius: '20px',
                  width: '100%', backgroundColor: 'white', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                  <h4 style={{ marginBottom: '5px' }}>{enunciado || 'Carregando enunciado...'} </h4>
                  <button
                    style={{
                      backgroundColor: '#ffeb3b', border: 'none', padding: '7% 10%', borderRadius: '15%',
                      color: '#000', cursor: 'pointer',
                    }}
                    onClick={() => handleStartActivity(`Atividade ${activity}`, index)}  // Passa o índice do botão
                  >
                    Começar
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{
          backgroundColor: '#007bbf', padding: '5%', color: '#ffffff', width: '100%',
          textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.0em'
        }}>
          Assunto 2 - Subtração
        </div>

        <h3 style={{
          marginTop: '5%', fontSize: '1.5em', backgroundColor: '#ffeb3b', color: '#000',
          padding: '1% 5%', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', display: 'inline-block'
        }}>
          Subtração simples
        </h3>

        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '15%',
          width: '60%', marginLeft: '10%'
        }}>
          {[5, 6, 7, 8].map((activity, index) => (
            <div key={index} style={{
              textAlign: 'center', marginBottom: '10%', alignSelf: index % 2 === 1 ? 'flex-end' : 'flex-start'
            }}>
              <button
                style={{
                  width: '60px', height: '60px', backgroundColor: '#007bbf', border: '2px solid #005f8d',
                  borderRadius: '10%', cursor: 'pointer', boxShadow: '0 0.5vh 0 0 #005f8d', marginLeft: index % 2 === 1 ? '20%' : '0',
                }}
                onClick={() => handleButtonClick(index + 4)}
              ></button>

              {selectedButtons[index + 4] && (
                <div style={{
                  marginTop: '10%', padding: '8%', border: '1px solid #ccc', borderRadius: '20px',
                  width: '100%', backgroundColor: 'white', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                  <h4 style={{ marginBottom: '5px' }}>{enunciado || 'Carregando enunciado...'} </h4>
                  <button
                    style={{
                      backgroundColor: '#007bbf', border: 'none', padding: '7% 10%', borderRadius: '15%',
                      color: '#ffffff', cursor: 'pointer',
                    }}
                    onClick={() => handleStartActivity(`Atividade ${activity}`, index + 4)}
                  >
                    Começar
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Navegacao />
    </Container>
  );
};

export default TelaAtividades;
