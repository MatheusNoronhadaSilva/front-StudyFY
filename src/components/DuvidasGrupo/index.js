import React, { useState, useEffect } from 'react';
import ftPerfil from '../../assets/Ellipse (1).png';
import questionIcon from '../../assets/question.png';
import questionIconClicked from '../../assets/question (1).png';

const AbaDuvidas = () => {
  const [clickedFirst, setClickedFirst] = useState(false);
  const [clickedSecond, setClickedSecond] = useState(false);
  const [duvidas, setDuvidas] = useState([]);

  const handleFirstClick = () => {
    setClickedFirst(!clickedFirst); // Alterna o estado ao clicar
  };

  const handleSecondClick = () => {
    setClickedSecond(!clickedSecond); // Alterna o estado ao clicar
  };

  useEffect(() => {
    // Função para buscar as dúvidas
    const fetchDuvidas = async () => {
      try {
        const response = await fetch('http://localhost:8080/v1/studyfy/duvidaCompartilhada/grupo/1');
        const data = await response.json();
        setDuvidas(data.duvidas || []);
      } catch (error) {
        console.error('Erro ao buscar as dúvidas:', error);
      }
    };

    fetchDuvidas();
  }, []);

  return (
    <div style={{
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    }}>
      {duvidas.map((duvida, index) => (
        <div key={duvida.id_duvida} style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          minHeight: '17%',
          borderRadius: '2px',
          padding: '10px',
          backgroundColor: 'white',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          marginBottom: '10px',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute',
            left: '0',
            top: '0',
            bottom: '0',
            width: '5px',
            backgroundColor: index % 2 === 0 ? 'yellow' : 'gray',
            borderTopLeftRadius: '2px',
            borderBottomLeftRadius: '2px',
          }}></div>
          <img 
            src={ftPerfil} 
            alt="Foto de perfil" 
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              marginRight: '10px',
              marginLeft: '10px',
            }} 
          />
          <div style={{ flex: 1 }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{
                fontWeight: 'bold',
                fontSize: '1rem',
              }}>{duvida.nome_aluno}</span>
              <span style={{
                fontSize: '0.8rem',
                color: '#666',
              }}>{duvida.data_envio}</span>
            </div>
            <p style={{
              fontSize: '0.9rem',
              color: '#333',
              marginTop: '5px',
            }}>
              {duvida.conteudo_duvida}
            </p>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: '10px',
          }}>
            <button 
              onClick={index === 0 ? handleFirstClick : handleSecondClick}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img 
                src={index === 0 ? (clickedFirst ? questionIconClicked : questionIcon) : (clickedSecond ? questionIconClicked : questionIcon)} 
                alt="Resposta" 
                style={{
                  width: '25px',
                  height: '25px',
                  marginBottom: '2px'
                }} 
              />
              {(index === 0 ? clickedFirst : clickedSecond) && (
                <span style={{
                  fontSize: '0.8rem',
                  color: '#666',
                  fontWeight: 'bold',
                }}>1</span>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AbaDuvidas;
