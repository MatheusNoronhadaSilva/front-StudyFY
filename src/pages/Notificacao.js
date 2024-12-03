// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'
import TituloTela from '../styles/tituloTela';
import bronzeIII from '../assets/Bronze III.png'
import bronzeII from '../assets/Bronze II.png'
import mascote from '../assets/mascote.png'
import capaHistoria from '../assets/Ellipse (1).png'
import { useMediaQuery } from '@mui/material';
import CampoNotificacao from '../components/CampoNotificacao';


// Componente principal
const Notificacao = () => {

  const isDesktop = useMediaQuery('(min-width: 768px)');


  return (
    <>
    { isDesktop ? (
      <Container>
        <Navegacao/>
        <CampoNotificacao/>
        </Container>
    ) : (
      <Container>
      <TituloTela>Notificação</TituloTela>
      <CampoNotificacao/>
      <Navegacao/>
      </Container>
    )}
    </>
  );
};

export default Notificacao;