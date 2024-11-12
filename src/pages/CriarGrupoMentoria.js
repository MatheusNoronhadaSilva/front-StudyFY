// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'
import { useMediaQuery } from '@mui/material';
import CampoCriarGrupoMentoria from '../components/CampoCriarGrupoMentoria';
const CriarGrupoMentoria = () => {

  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
    {isDesktop ? (
      // Este bloco será renderizado em telas desktop (>= 768px)
      <Container style={{backgroundColor: 'white', alignItems: 'center'}}>
        <Navegacao />
        <CampoCriarGrupoMentoria/>
      </Container>
    ) : (
      // Este bloco será renderizado em telas menores (móveis/tablets < 768px)
      <Container style={{ backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh' }}>
      </Container>
    )}
  </>
  );
};

export default CriarGrupoMentoria;
