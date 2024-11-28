import React, { useState, useEffect } from 'react';
import ftPerfil from '../../assets/Ellipse (1).png';
import questionIcon from '../../assets/question.png';
import questionIconClicked from '../../assets/question (1).png';

const AbaDuvidas = () => {
  const [duvidas, setDuvidas] = useState([]);
  const [showResposta, setShowResposta] = useState({}); // Estado para exibir a resposta de cada dúvida
  const [showForm, setShowForm] = useState(false);
  const [newDuvida, setNewDuvida] = useState({
    conteudo_duvida: '',
  });
  const [clickedIcons, setClickedIcons] = useState({}); // Estado para controlar quais ícones foram clicados

  const fetchDuvidas = async () => {
    try {
      const response = await fetch('http://localhost:8080/v1/studyfy/duvidaCompartilhada/grupo/1');
      const data = await response.json();
      setDuvidas(data.duvidas || []);
    } catch (error) {
      console.error('Erro ao buscar as dúvidas:', error);
    }
  };

  const fetchResposta = async (duvidaId) => {
    try {
      const response = await fetch(`http://localhost:8080/v1/studyFy/respostas/${duvidaId}`);
      const data = await response.json();
      if (data.resposta) {
        return data.resposta.conteudo;
      }
      return 'Nenhuma resposta disponível.';
    } catch (error) {
      console.error('Erro ao buscar a resposta:', error);
      return 'Erro ao carregar a resposta.';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDuvida((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const today = new Date().toISOString().split('T')[0];
      const response = await fetch('http://localhost:8080/v1/studyfy/duvidaCompartilhada', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conteudo: newDuvida.conteudo_duvida,
          data_envio: today,
          membro_id: 1, // Ajuste o ID conforme necessário
        }),
      });

      if (response.ok) {
        console.log('Dúvida criada com sucesso!');
        await fetchDuvidas(); // Recarrega a lista de dúvidas
        setNewDuvida({ conteudo_duvida: '' });
        setShowForm(false);
      } else {
        const errorResponse = await response.json();
        console.error('Erro ao criar dúvida:', errorResponse);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  const handleCancelClick = () => {
    setShowForm(false);
  };

  const toggleResposta = async (id_duvida) => {
    // Verifica se a resposta já foi carregada
    if (!showResposta[id_duvida]) {
      const resposta = await fetchResposta(id_duvida); // Busca a resposta da dúvida
      setShowResposta((prev) => ({
        ...prev,
        [id_duvida]: resposta, // Armazena a resposta no estado
      }));
    } else {
      setShowResposta((prev) => ({
        ...prev,
        [id_duvida]: null, // Remove a resposta do estado
      }));
    }
  };

  const handleIconClick = (id_duvida) => {
    setClickedIcons((prev) => {
      const newClickedIcons = { ...prev };
      newClickedIcons[id_duvida] = newClickedIcons[id_duvida] ? 0 : 1; // Alterna entre 0 e 1 para marcar/desmarcar
      return newClickedIcons;
    });
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
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: '100%',
            borderRadius: '8px',
            padding: '10px',
            backgroundColor: 'white',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            marginBottom: '10px',
            position: 'relative',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}>
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
                    marginBottom: '20px'
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
            </div>

            {/* Ícone de Pergunta e Contador à direita */}
            <div style={{ 
              position: 'absolute',
              top: '10px',
              right: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img 
                src={clickedIcons[duvida.id_duvida] ? questionIconClicked : questionIcon}
                alt="Ícone de Pergunta"
                onClick={() => handleIconClick(duvida.id_duvida)}
                style={{
                  width: '20px', // Tamanho reduzido
                  height: '20px', // Tamanho reduzido
                  cursor: 'pointer',
                  marginRight: '5px',
                  marginTop: '35px' // Espaçamento à direita
                }}
              />
              <span style={{
                fontSize: '1.0rem',
                color: '#666',
                marginTop: '80px'
              }}>
                {clickedIcons[duvida.id_duvida] ? 1 : 0} {/* Exibe 1 se clicado, 0 se não */}
              </span>
            </div>

            <button 
              style={{
                marginTop: '10px',
                backgroundColor: '#FEE101',
                color: 'black',
                border: 'none',
                padding: '4px 8px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
              }}
              onClick={() => toggleResposta(duvida.id_duvida)}
            >
              Ver Resposta
            </button>

            {showResposta[duvida.id_duvida] && (
              <div style={{
                marginTop: '10px',
                padding: '10px',
                borderRadius: '4px',
                backgroundColor: '#f1f1f1',
                color: '#333',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              }}>
                <strong>Resposta:</strong>
                <p>{showResposta[duvida.id_duvida]}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Botão flutuante para adicionar uma nova dúvida */}
      <button 
        style={{
          position: 'fixed',
          top: '82%',
          right: '32%',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#FEE101', // Mostarda
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
          top: '68%',
          left: '76%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Aumentado para maior destaque
          zIndex: 1000,
          width: '400px',
          maxHeight: 'auto',
          border: '2px solid #FEE101',
        }}>
          <h3 style={{ color: '#333' }}>Adicionar nova dúvida</h3>
          <form onSubmit={handleFormSubmit}>
            <textarea 
              name="conteudo_duvida" 
              value={newDuvida.conteudo_duvida} 
              onChange={handleInputChange} 
              placeholder="Digite sua dúvida..."
              rows="4"
              style={{
                width: '100%',
                padding: '10px',
                fontSize: '0.9rem',
                borderRadius: '8px',
                border: '1px solid #ddd',
                marginBottom: '10px',
                resize: 'none',
                boxSizing: 'border-box',
              }}
            />
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <button 
                type="submit"
                style={{
                  backgroundColor: '#FEE101', 
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                }}
              >
                Enviar
              </button>
              <button 
                type="button" 
                onClick={handleCancelClick} 
                style={{
                  backgroundColor: 'red',
                  border: 'none',
                  padding: '6px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  color: 'white'
                }}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AbaDuvidas;