// src/pages/Entrada.js
import React, { useState, useEffect } from 'react';
import Container from '../styles/telaCheia';
import axios from 'axios';
import { useMediaQuery } from '@mui/material';
import CampoQuestao from '../components/CampoQuestoes';
import { useParams } from 'react-router-dom';
import { Campo } from '../components/CadastrarInfo/style';

const Questoes = () => {
  const { id } = useParams();  // Pega o ID da atividade da URL
  const atividade_id = id
  const [questoes, setQuestoes] = useState([]);
  const [loadingQuestoes, setLoadingQuestoes] = useState(true);

  useEffect(() => {
    console.log(`Carregando questões para a atividade: ${atividade_id}`);
  }, [atividade_id]);
  

  useEffect(() => {
    const fetchQuestoes = async () => {
      try {
        setLoadingQuestoes(true);
  
        // Busca os dados da API
        const response = await axios.get(`http://localhost:8080/v1/studyfy/questoesPorAtividade/${atividade_id}`);
        
        // Verifica se as questões realmente mudaram antes de setar o estado
        const fetchedQuestoes = response.data.questoes || [];
        if (JSON.stringify(fetchedQuestoes) !== JSON.stringify(questoes)) {
          setQuestoes(fetchedQuestoes);
        }
  
        setLoadingQuestoes(false);
      } catch (error) {
        console.error('Erro ao buscar questões:', error);
      }
    };
  
    fetchQuestoes();
  }, [atividade_id]); // Certifique-se de que apenas `atividade_id` é uma dependência válida.

  const isDesktop = useMediaQuery('(min-width: 768px)');

  console.log('ioioiioioio');
  

  return (
    <>
    { loadingQuestoes ? (
      <span>Carregando</span>
    ) : (
       isDesktop ? (
        <Container style={{backgroundColor: 'white', flexDirection: 'column', alignItems: 'center'}}>
          <CampoQuestao dadosQuestoes={questoes} />
        </ Container>
      ) : (
        <>regergr</>
      )
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

export default Questoes;
