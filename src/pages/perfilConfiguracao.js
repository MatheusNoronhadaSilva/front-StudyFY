// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'
import CampoPerfilConfiguracao from '../components/CampoPerfilConfiguracao';
import { useMediaQuery } from '@mui/material';


const PerfilConfiguracao = () => {

  const isDesktop = useMediaQuery('(min-width: 768px)');


  return (
    <>
    {isDesktop ? (
      <Container style={{backgroundColor: 'white', alignItems: 'center'}}>
      <Navegacao></Navegacao>
      <CampoPerfilConfiguracao />
  </Container>
    ) : (
      <></>
    )}
    </>
  );
};

export default PerfilConfiguracao;
