import React, { useState, useEffect } from 'react';
import ftPerfil from '../../assets/Ellipse (1).png';
import questionIcon from '../../assets/question 1.png';
import questionIconClicked from '../../assets/question (1) 1.png';

const AbaDuvidas = () => {
  const [duvidas, setDuvidas] = useState([]);
  const [clickedStates, setClickedStates] = useState({}); // Estado para armazenar os cliques de cada dúvida
  const [showForm, setShowForm] = useState(false);
  const [newDuvida, setNewDuvida] = useState({
    conteudo_duvida: '',
  });

  const fetchDuvidas = async () => {
    try {
      const response = await fetch('http://localhost:8080/v1/studyfy/duvidaCompartilhada/grupo/1');
      const data = await response.json();
      setDuvidas(data.duvidas || []);
    } catch (error) {
      console.error('Erro ao buscar as dúvidas:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDuvida((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const today = new Date().toISOString().split('T')[0]; // Data de hoje no formato YYYY-MM-DD
      const response = await fetch('http://localhost:8080/v1/studyfy/duvidaCompartilhada', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conteudo_duvida: newDuvida.conteudo_duvida,
          data_envio: today,
          membro_id: 1,
        }),
      });

      if (response.ok) {
        const createdDuvida = await response.json();
        setDuvidas((prev) => [...prev, createdDuvida]);
        setNewDuvida({ conteudo_duvida: '' });
        setShowForm(false);
        console.log('Dúvida criada com sucesso!');
      } else {
        console.error('Erro ao criar dúvida');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  const handleIconClick = (id_duvida) => {
    setClickedStates((prev) => ({
      ...prev,
      [id_duvida]: !prev[id_duvida], // Alterna o estado do ícone da dúvida clicada
    }));
  };

  useEffect(() => {
    fetchDuvidas();
  }, []);

  return (
    <div style={{
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      maxHeight: '80vh',
      overflowY: 'auto',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    }}>
      <h3 style={{
        margin: '10px 0',
        fontSize: '1.2rem',
        color: '#333',
      }}>Dúvidas</h3>

      <div style={{ width: '95%', padding: '10px' }}>
        {duvidas.map((duvida) => (
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
              backgroundColor: duvida.respondida === 1 ? 'yellow' : 'gray',
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
                }}>{duvida.nome_aluno || 'Aluno Anônimo'}</span>
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
                {duvida.conteudo_duvida || 'Sem conteúdo'}
              </p>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginLeft: '10px',
            }}>
              <button 
                onClick={() => handleIconClick(duvida.id_duvida)}
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
                  src={clickedStates[duvida.id_duvida] ? questionIconClicked : questionIcon} 
                  alt="Resposta" 
                  style={{
                    width: '25px',
                    height: '25px',
                    marginBottom: '2px'
                  }} 
                />
                {clickedStates[duvida.id_duvida] && (
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

      <button 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: 'yellow',
          border: 'none',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.5rem',
          color: 'black',
        }}
        onClick={() => setShowForm(true)}
      >
        +
      </button>

      {showForm && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
          zIndex: 1000,
        }}>
          <h3>Nova Dúvida</h3>
          <form onSubmit={handleFormSubmit}>
            <div style={{ marginBottom: '10px' }}>
              <label>Conteúdo:</label>
              <textarea
                name="conteudo_duvida"
                value={newDuvida.conteudo_duvida}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  height: '80px',
                  marginTop: '5px',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
                required
              />
            </div>
            <button type="submit" style={{
              width: '100%',
              padding: '10px',
              backgroundColor: 'yellow',
              color: 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}>
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AbaDuvidas;