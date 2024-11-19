// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'
import { useMediaQuery } from '@mui/material';
import CampoQuestao from '../components/CampoQuestoes';
import { Campo } from '../components/CadastrarInfo/style';

const Atividades = () => {

  const isDesktop = useMediaQuery('(min-width: 768px)'); // Corrigir a sintaxe do useMediaQuery

  return (
    <>
    {isDesktop ? (
      // Este bloco será renderizado em telas desktop (>= 768px)
      <Container style={{ backgroundColor: 'white', alignItems: 'center'}}>
        <Navegacao/>
        <CampoQuestao />
      </Container>
    ) : (
      // Este bloco será renderizado em telas menores (móveis/tablets < 768px)
      <Container style= {{backgroundColor: 'white', gap: '2vh', alignItems: 'center', paddingTop: '1vh'}}>
        <Navegacao></Navegacao>
      </Container>
    )}
  </>
  );
};

export default Atividades;
