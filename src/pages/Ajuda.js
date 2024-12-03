// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'
import { useMediaQuery } from '@mui/material';
import CampoAjuda from '../components/CampoAjuda';

const Ajuda = () => {

  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
      {isDesktop ? (
        <Container style={{ backgroundColor: 'white', alignItems: 'center'}}>
          <Navegacao></Navegacao>
          <CampoAjuda />
        </Container>
      ) : (
        <Container style={{ backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh' }}>
          <span>Ajuda</span>
          <CampoAjuda />
          <Navegacao></Navegacao>
        </Container>
      )}
    </>
  );
};

export default Ajuda;
