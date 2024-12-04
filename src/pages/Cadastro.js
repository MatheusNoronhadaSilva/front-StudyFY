// src/pages/Entrada.js
import React from 'react';
import CampoCadastro from '../components/CampoCadastro';
import Titulo from '../components/Titulo';
import { useNavigate } from 'react-router-dom';
import Container from '../styles/telaCheia';
import axios from 'axios';
import { useMediaQuery } from '@mui/material';
import fundoAmarelo from '../assets/fundo-desktop.png'
import Fundo from '../styles/fundoDesktop'

const CadastroAluno = () => {

  const navigate = useNavigate()
  let url = ""

  const RegistroCompleto = async (usuario, dadosAluno, data_nascimento, materiaSelecionada) => {
    const dadosCompletos = {
      ...dadosAluno,
      ...data_nascimento,
      serie: 1,
      foto: 1,
      materia_id: materiaSelecionada,
    };

    console.log(dadosCompletos);
    

    if(usuario === 'aluno'){
      url = 'http://localhost:8080/v1/studyFy/aluno'
    } else if (usuario === 'professor'){
      url = 'http://localhost:8080/v1/studyFy/professor'
    }

    try {

      console.log(url);
      console.log(dadosCompletos);
      // Fazendo um post com os dados completos do aluno
      const response = await axios.post(url, dadosCompletos);
      console.log('Registro completo com sucesso:', response.data);

      navigate('/')
      // Coloque aqui a lógica adicional após o registro, como redirecionamento ou mensagem de sucesso
    } catch (error) {
      console.error('Erro ao registrar o aluno:', error);
      // Coloque aqui a lógica para lidar com erros, como exibir uma mensagem para o usuário
    }
  };

  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <Container>
      {isDesktop ? (
        <Fundo src={fundoAmarelo}></Fundo>
      ) : (
        <Titulo titulo={'Cadastre-se'} />
      )}
      <CampoCadastro RegistroCompleto={RegistroCompleto} />
    </Container>
  );
};

export default CadastroAluno;
