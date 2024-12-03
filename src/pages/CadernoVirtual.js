// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'
import { useMediaQuery } from '@mui/material';
import CampoCadernoVirtual from '../components/CampoCadernoVirtual';

const CadernoVirtual = () => {

  const isDesktop = useMediaQuery('(min-width: 768px)'); // Corrigir a sintaxe do useMediaQuery


  return (
    <>
    { isDesktop ? (
      <Container style={{backgroundColor: 'white', alignItems: 'center'}}>
      <Navegacao />
      <CampoCadernoVirtual/>
      </Container>
    ) : (
      <Container style={{backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh'}}>
      <span>Caderno virtual</span>
      <Navegacao></Navegacao>
  </Container>
    )}
    </>
  );
};

export default CadernoVirtual;
