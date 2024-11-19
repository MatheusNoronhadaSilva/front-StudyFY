// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';
import TituloTela from '../styles/tituloTela';
import { useMediaQuery } from '@mui/material';
import CampoTelaAtividade from '../components/CampoTelaAtividades';

const TelaAtividades = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)'); // Corrigir a sintaxe do useMediaQuery

  return (
    <>
      {isDesktop ? (
        // Este bloco será renderizado em telas desktop (>= 768px)
        <Container style={{backgroundColor: 'white', alignItems: 'center'}}>
          <Navegacao />
          <CampoTelaAtividade/>
        </Container>
      ) : (
        // Este bloco será renderizado em telas menores (móveis/tablets < 768px)
        <Container style={{ backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh' }}>
          <TituloTela>Emblemas</TituloTela>
          <></>
          <Navegacao />
        </Container>
      )}
    </>
  );
};

export default TelaAtividades;
