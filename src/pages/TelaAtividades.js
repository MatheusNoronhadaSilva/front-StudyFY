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

    console.log(activity);
    console.log(index);
    // Alterar a lógica de navegação para os quadrados azuis
    if (index < 4) {  // Quadrados amarelos
      switch (index) {
        case 0:
          navigate('/atividade/1');
          break;
        case 1:
          navigate('/atividade/2');
          break;
        case 2:
          navigate('/atividade/3');
          break;
        case 3:
          navigate('/atividade/4');
          break;
        default:
          break;
      }
    } else {  // Quadrados azuis (a partir do índice 4)
      const blueIndex = index - 4; // Ajusta o índice para os quadrados azuis
      switch (blueIndex) {
        case 0:
          navigate('/atividade/5');
          break;
        case 1:
          navigate('/atividade/6');
          break;
        case 2:
          navigate('/atividade/7');
          break;
        case 3:
          navigate('/atividade/8');
          break;
        default:
          break;
      }
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
            Conhecimentos Gerais - EF 1 e 2
          </h2>
        </div>

        <div style={{
          backgroundColor: '#ffeb3b', padding: '5%', color: '#000000', width: '100%',
          textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.0em'
        }}>
          Assunto 1 - História e geografia
        </div>

        <h3 style={{
          marginTop: '5%', fontSize: '1.5em', backgroundColor: '#007bbf', color: '#fff',
          padding: '1% 5%', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', display: 'inline-block'
        }}>
          Guerras e Capitais
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
                  width: '300px', minHeight: '150px', maxHeight: '300px', backgroundColor: 'white',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                  overflowY: 'auto',
                  // Condicional para mover os cards para a direita
                  marginLeft: index % 2 === 1 ? '25%' : '0',  // Mover para a direita se for um botão ímpar
                  transition: 'margin-left 0.3s ease',  // Transição suave
                }}>
                  <h4 style={{
                    marginBottom: '10px', fontSize: '1em', textAlign: 'center', lineHeight: '1.4em',
                    whiteSpace: 'pre-wrap', wordWrap: 'break-word'  // Garante que o texto se quebre corretamente
                  }}>
                    {enunciado || 'Carregando enunciado...'}
                  </h4>
                  <button
                    style={{
                      backgroundColor: '#ffeb3b', border: 'none', padding: '7% 10%', borderRadius: '15%',
                      color: '#000', cursor: 'pointer', marginTop: '10px'
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
          Assunto 2 - Matemática
        </div>

        <h3 style={{
          marginTop: '5%', fontSize: '1.5em', backgroundColor: '#ffeb3b', color: '#000',
          padding: '1% 5%', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', display: 'inline-block'
        }}>
          Subtração e Soma
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
                onClick={() => handleButtonClick(index + 4)}  // Ajusta o índice para o Assunto 2
              ></button>

              {selectedButtons[index + 4] && (
                <div style={{
                  marginTop: '10%', padding: '8%', border: '1px solid #ccc', borderRadius: '20px',
                  width: '300px', minHeight: '150px', maxHeight: '300px', backgroundColor: 'white',
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                  overflowY: 'auto',
                  marginLeft: (index + 4) % 2 === 1 ? '25%' : '0',
                  transition: 'margin-left 0.2s ease',
                }}>
                  <h4 style={{
                    marginBottom: '10px', fontSize: '1em', textAlign: 'center', lineHeight: '1.4em',
                    whiteSpace: 'pre-wrap', wordWrap: 'break-word'
                  }}>
                    {enunciado || 'Carregando enunciado...'}
                  </h4>
                  <button
                    style={{
                      backgroundColor: '#007bbf', border: 'none', padding: '7% 10%', borderRadius: '15%',
                      color: '#ffffff', cursor: 'pointer', marginTop: '10px'
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
