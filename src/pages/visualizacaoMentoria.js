// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'
import { useMediaQuery } from '@mui/material';
import VisualizarGrupos from '../components/VisualizarGrupos';
import VisualizarGruposIncluidos from '../components/VisualizarGruposIncluidos';

const VisualizacaoMentorias = () => {

    const isDesktop = useMediaQuery('(min-width: 768px)');

  return (

    <>
    {isDesktop ? (
      // Este bloco será renderizado em telas desktop (>= 768px)
      <Container style={{backgroundColor: 'white', alignItems: 'center'}}>
        <Navegacao />
        <VisualizarGrupos />
        <VisualizarGruposIncluidos/>
      </Container>
    ) : (
      // Este bloco será renderizado em telas menores (móveis/tablets < 768px)
      <Container style={{ backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh' }}>
        <span>Grupo de mentoria</span>
        <Navegacao></Navegacao>
      </Container>
    )}
  </>
  );
};

export default VisualizacaoMentorias;
