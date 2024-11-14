import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';
import calabresoIrritado from '../assets/calabresoIrritado.png';
import bronzeI from '../assets/Bronze I.png';

const DesceuRank = () => {
  return (
    <Container style={{ backgroundColor: '#FFD700', alignItems: 'center', justifyContent: 'center', padding: '5%' }}>
      <div style={{
        backgroundColor: 'white',
        width: '80%',
        borderRadius: '10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '65% 5% 15% 5%',
        boxShadow: '0 2% 4% rgba(0, 0, 0, 0.2)',
        position: 'relative',
      }}>
        <img src={calabresoIrritado} alt="Calabreso Irritado" style={{
          width: '35%', 
          height: 'auto', 
          position: 'absolute', 
          top: '-10%'  // Ajusta a posição para que o pinguim fique sobre a borda superior
        }} />

        <h1 style={{
          fontSize: '6vw', 
          marginTop: '15%',  // Alinha o texto no topo do quadrado branco
          fontFamily: 'Arial, sans-serif', 
          textAlign: 'center'
        }}>
          Que pena !!!
        </h1>
        
        <img src={bronzeI} alt="Rank Bronze I" style={{ width: '20%', height: 'auto', margin: '5% 0' }} />
        
        <h2 style={{ fontSize: '5vw', color: '#CDA572', fontFamily: 'Arial, sans-serif', margin: '2% 0' }}>Ouro II</h2>
        
        <p style={{ fontSize: '3.5vw', color: 'black', textAlign: 'center', marginTop: '2%' }}>
          Você caiu para o rank Ouro II
        </p>
        
        <button style={{
          marginTop: '5%',
          padding: '3% 5%',
          fontSize: '4vw',
          color: 'black',
          backgroundColor: '#FFD700',
          border: '2px solid #CDA572',
          borderRadius: '10%',
          boxShadow: '0 2% 3% rgba(0, 0, 0, 0.1)',
          cursor: 'pointer'
        }}>
          Voltar
        </button>
      </div>
      
      <div style={{
        position: 'fixed', bottom: 0, left: 0, width: '100%', boxShadow: '0px -2% 4% rgba(0, 0, 0, 0.2)',
      }}>
        <Navegacao />
      </div>
    </Container>
  );
};

export default DesceuRank;
