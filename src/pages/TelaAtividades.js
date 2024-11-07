// src/pages/Entrada.js
import React, { useState, useEffect } from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';

const TelaAtividades = () => {
  const [selectedButtons, setSelectedButtons] = useState(Array(12).fill(false)); // Inclui os novos botões

  const handleButtonClick = (index) => {
    setSelectedButtons((prev) => {
      const newSelectedButtons = [...prev];
      newSelectedButtons[index] = !newSelectedButtons[index];
      return newSelectedButtons;
    });
  };

  const handleStartActivity = (activity) => {
    alert(`Atividade "${activity}" iniciada!`);
  };

  // Efeito para rolar para baixo quando o último card é aberto
  useEffect(() => {
    const lastCardIndex = selectedButtons.length - 1;
    if (selectedButtons[lastCardIndex]) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }, [selectedButtons]);

  return (
    <Container style={{ backgroundColor: 'white', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      {/* Título centralizado com sombra */}
      <div style={{ 
        width: '100%', 
        flexGrow: '1', 
        overflowY: 'auto', 
        textAlign: 'center', 
        marginTop: '10%' 
      }}>
        <div style={{
          display: 'flex', 
          position: 'fixed', 
          zIndex: '100', 
          width: '100%', 
          height: '5%', 
          backgroundColor: 'white', 
          top: 0, 
          alignItems: 'center', 
          justifyContent: 'center',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{
            fontSize: '1.0em', 
            textShadow: '1px 1px 5px rgba(0, 0, 0, 0.2)'
          }}>
            Matemática 4º - Fund1
          </h2>
        </div>

        {/* Assunto 1 - Soma */}
        <div style={{ 
          backgroundColor: '#ffeb3b', 
          padding: '5%', 
          color: '#000000', 
          width: '100%', 
          textAlign: 'center', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontSize: '1.0em' 
        }}>
          Assunto 1 - Soma e subtração
        </div>

        <h3 style={{
          marginTop: '5%',
          fontSize: '1.5em',
          backgroundColor: '#007bbf', // Azul mais escuro
          color: '#fff',
          padding: '1% 5%',
          borderRadius: '8px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
          display: 'inline-block'
        }}>
          Soma simples
        </h3>

        {/* Botões de Atividades - Assunto 1 */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          marginTop: '15%', 
          width: '60%',  
          marginLeft: '10%'  
        }}>
          {[1, 2, 3, 4].map((activity, index) => (
            <div key={index} style={{ 
              textAlign: 'center', 
              marginBottom: '10%', 
              alignSelf: index % 2 === 1 ? 'flex-end' : 'flex-start'  
            }}>
              <button
                style={{
                  width: '60px',        
                  height: '60px',       
                  backgroundColor: '#ffeb3b', 
                  border: '2px solid #e9ce03', // Contorno forte
                  borderRadius: '10%',
                  cursor: 'pointer',
                  boxShadow: '0 0.5vh 0 0 #E9CE03',
                  marginLeft: index % 2 === 1 ? '20%' : '0', 
                }}
                onClick={() => handleButtonClick(index)}
              ></button>

              {selectedButtons[index] && (
                <div style={{ 
                  marginTop: '10%', 
                  padding: '8%', 
                  border: '1px solid #ccc', 
                  borderRadius: '20px', 
                  width: '100%', 
                  backgroundColor: 'white', 
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                  <h4 style={{ marginBottom: '5px' }}>Informação da Atividade {activity}</h4>
                  <p style={{ marginBottom: '10px' }}>Detalhes sobre a atividade {activity}...</p>
                  <button
                    style={{
                      backgroundColor: '#ffeb3b', 
                      border: 'none',
                      padding: '7% 10%',
                      borderRadius: '15%',
                      color: '#000',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleStartActivity(`Atividade ${activity}`)}
                  >
                    Começar
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Assunto 2 - Subtração */}
        <div style={{ 
          backgroundColor: '#007bbf', 
          padding: '5%', 
          color: '#ffffff', 
          width: '100%', 
          textAlign: 'center', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontSize: '1.0em' 
        }}>
          Assunto 2 - Subtração
        </div>

        <h3 style={{
          marginTop: '5%',
          fontSize: '1.5em',
          backgroundColor: '#ffeb3b', 
          color: '#000',
          padding: '1% 5%',
          borderRadius: '8px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
          display: 'inline-block'
        }}>
          Subtração simples
        </h3>

        {/* Botões de Atividades - Assunto 2 */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          marginTop: '15%', 
          width: '60%',  
          marginLeft: '10%'  
        }}>
          {[5, 6, 7, 8].map((activity, index) => (
            <div key={index} style={{ 
              textAlign: 'center', 
              marginBottom: '10%', 
              alignSelf: index % 2 === 1 ? 'flex-end' : 'flex-start'  
            }}>
              <button
                style={{
                  width: '60px',        
                  height: '60px',       
                  backgroundColor: '#007bbf', 
                  border: '2px solid #005f8d', 
                  borderRadius: '10%',
                  cursor: 'pointer',
                  boxShadow: '0 0.5vh 0 0 #005f8d',
                  marginLeft: index % 2 === 1 ? '20%' : '0', 
                }}
                onClick={() => handleButtonClick(index + 4)}
              ></button>

              {selectedButtons[index + 4] && (
                <div style={{ 
                  marginTop: '10%', 
                  padding: '8%', 
                  border: '1px solid #ccc', 
                  borderRadius: '20px', 
                  width: '100%', 
                  backgroundColor: '#ffffff', 
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                  <h4 style={{ marginBottom: '5px' }}>Informação da Atividade {activity}</h4>
                  <p style={{ marginBottom: '10px' }}>Detalhes sobre a atividade {activity}...</p>
                  <button
                    style={{
                      backgroundColor: '#007bbf', 
                      border: 'none',
                      padding: '7% 10%',
                      borderRadius: '15%',
                      color: '#ffffff', 
                      cursor: 'pointer',
                    }}
                    onClick={() => handleStartActivity(`Atividade ${activity}`)}
                  >
                    Começar
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Assunto 3 - Multiplicação */}
        <div style={{ 
          backgroundColor: '#34FF30', 
          padding: '5%', 
          color: '#000', 
          width: '100%', 
          textAlign: 'center', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontSize: '1.0em' 
        }}>
          Assunto 3 - Multiplicação
        </div>

        <h3 style={{
          marginTop: '5%',
          fontSize: '1.5em',
          backgroundColor: '#34FF30', 
          color: 'black',
          padding: '1% 5%',
          borderRadius: '8px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
          display: 'inline-block'
        }}>
          Multiplicação simples
        </h3>

        {/* Botões de Atividades - Assunto 3 */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          marginTop: '15%', 
          width: '60%',  
          marginLeft: '10%'  
        }}>
          {[9, 10, 11, 12].map((activity, index) => (
            <div key={index} style={{ 
              textAlign: 'center', 
              marginBottom: '10%', 
              alignSelf: index % 2 === 1 ? 'flex-end' : 'flex-start'  
            }}>
              <button
                style={{
                  width: '60px',        
                  height: '60px',       
                  backgroundColor: '#34FF30', 
                  border: '2px solid #2ac028', 
                  borderRadius: '10%',
                  cursor: 'pointer',
                  boxShadow: '0 0.5vh 0 0 #2ac028',
                  marginLeft: index % 2 === 1 ? '20%' : '0', 
                }}
                onClick={() => handleButtonClick(index + 8)}
              ></button>

              {selectedButtons[index + 8] && (
                <div style={{ 
                  marginTop: '10%', 
                  padding: '8%', 
                  border: '1px solid #ccc', 
                  borderRadius: '20px', 
                  width: '100%', 
                  backgroundColor: '#ffffff', 
                  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                  <h4 style={{ marginBottom: '5px' }}>Informação da Atividade {activity}</h4>
                  <p style={{ marginBottom: '10px' }}>Detalhes sobre a atividade {activity}...</p>
                  <button
                    style={{
                      backgroundColor: '#34FF30', 
                      border: 'none',
                      padding: '7% 10%',
                      borderRadius: '15%',
                      color: '#000', 
                      cursor: 'pointer',
                    }}
                    onClick={() => handleStartActivity(`Atividade ${activity}`)}
                  >
                    Começar
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Componente de Navegação */}
      <Navegacao />
    </Container>
  );
};

export default TelaAtividades;
