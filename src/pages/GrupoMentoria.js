import React from 'react';
import { useParams } from 'react-router-dom'; // Para pegar o parâmetro da URL
import Container from '../styles/telaCheia';
import InfoGrupoMentoria from '../components/InfoGrupoMentoria';
import AbasGrupoMentoria from '../components/AbasGrupoMentoria'
import Navegacao from '../components/Navegacao'
import { useMediaQuery } from '@mui/material';
import { useLocation } from 'react-router-dom';


const GrupoMentoria = () => {
  const location = useLocation();
  const { id } = useParams(); // Pega o id da URL
  const queryParams = new URLSearchParams(location.search);
  const status = queryParams.get('status') || 'default';
  const isDesktop = useMediaQuery('(min-width: 768px)');

  console.log(status);
  

  return (
    <>
      {isDesktop ? (
        <Container style={{backgroundColor: 'white', alignItems: 'center'}}>
          <Navegacao />
          <div style={{height: '100%', width: '100%', flexDirection: 'column'}}>
            <InfoGrupoMentoria id={id} status={status} /> {/* Passa o id para o componente */}
            <AbasGrupoMentoria grupoId={id}/>
          </div>
        </Container>
      ) : (
        <Container style={{ backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh' }}>
          <span>Grupo de mentoria</span>
          <InfoGrupoMentoria id={id} status={status} /> {/* Passa o id para o componente */}
          <AbasGrupoMentoria />
          <Navegacao></Navegacao>
        </Container>
      )}
    </>
  );
};

export default GrupoMentoria;
