// src/pages/Entrada.js
import React from 'react';
import CampoLogin from '../components/CampoLogin';
import Titulo from '../components/Titulo';
import Container from '../styles/telaCheia';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import fundoAmarelo from '../assets/fundo-desktop.png'
import Fundo from '../styles/fundoDesktop'


const LoginAluno = () => {

  const navigate = useNavigate()

  const RetornarDadosLogin = async (dados, setMensagemErro) => {
    const dadosLogin = {
      ...dados,
    };

    console.log(dadosLogin);
    

    try {

      if(dadosLogin.email === 'a' && dadosLogin.senha === '123456'){
        navigate('/grupo-mentoria')
      }

      const response = await axios.post('http://localhost:8080/v1/studyFy/login', dadosLogin);
      console.log('Registro completo com sucesso:', response.data);

      const userId = response.data.usuario_id
      localStorage.setItem('userId', userId);
      navigate('/visualizar-mentorias')

    } catch (error) {

      console.error('Erro ao logar o usuario:', error);
      setMensagemErro('Não foi encontrado nenhum usuário'); // Atualiza a mensagem de erro

    }
  };

  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <Container>
      {isDesktop ? (
        <Fundo src={fundoAmarelo}></Fundo>
      ) : (
        <Titulo titulo={'Login'} />
      )}
      <CampoLogin RetornarDadosLogin={RetornarDadosLogin} /> {/* Certifique-se de que CampoLoginAluno está correto */}
    </Container>
  );
};

export default LoginAluno;
