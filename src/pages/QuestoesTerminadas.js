// src/pages/Entrada.js
import React, { useState, useEffect } from 'react';
import Container from '../styles/telaCheia';
import { useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import mascote from '../assets/mascote.png'

export const TelaHeader = styled.div`
   height: 10%;
   width: 100%;
   background-color: #fee101;
`

export const CampoResultado = styled.div`
   height: 60%;
   margin-top: 7%;
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
`

export const AreaMascote = styled.div`
   height: 70%;
   width: 30%;
   background-color: red;
`

export const IconeMascote = styled.img`
   height: 100%;
   width: 100%;
`
const QuestoesTerminadas = () => {

    const isDesktop = useMediaQuery('(min-width: 768px)');

  const { id } = useParams();  // Pega o ID da atividade da URL
  const atividade_id = id
  const [questoes, setQuestoes] = useState([]);
  const [loadingQuestoes, setLoadingQuestoes] = useState(true);

  return (
    <>
       { isDesktop ? (
        <Container style={{backgroundColor: 'white', flexDirection: 'column', alignItems: 'center'}}>
            <TelaHeader/>
            <CampoResultado>
                <AreaMascote>
                <IconeMascote src={mascote}/>
                </AreaMascote>
            </CampoResultado>
        </ Container>
      ) : (
        <>regergr</>
      )}
      {/* {isDesktop ? (
        // Renderizado para telas desktop
        <Container style={{ backgroundColor: 'white', flexDirection: 'column', alignItems: 'center' }}>
          {!loadingQuestoes && questoes.length > 0 && <CampoQuestao dadosQuestoes={questoes} />}
        </Container>
      ) : (
        // Renderizado para telas móveis/tablets
        <Container style={{ backgroundColor: 'white', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        </Container>
      )} */}
    </>
  );
};

export default QuestoesTerminadas;
