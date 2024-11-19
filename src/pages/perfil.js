// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'
import TituloTela from '../styles/tituloTela';
import CampoPerfil from '../components/CampoPerfil'
import { useMediaQuery } from '@mui/material';


const Perfil = () => {

  const isDesktop = useMediaQuery('(min-width: 768px)');


  return (
    <>
    {isDesktop ? (
      <Container style={{backgroundColor: 'white', alignItems: 'center'}}>
      <Navegacao></Navegacao>
      <CampoPerfil></CampoPerfil>
  </Container>
    ) : (
      <></>
    )}
    </>
  );
};

export default Perfil;
