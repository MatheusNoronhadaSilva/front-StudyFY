import * as C from './style';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MudarSenha from '../../styles/campoDados';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useMediaQuery } from '@mui/material';
import mascote from '../../assets/mascote.png'



const CampoMudarSenha = () => {
  const [senhaAlterada, setSenhaAlterada] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState('');
  const [id, setIdUsuario] = useState('');
  const [email, setEmailUsuario] = useState('');
  const [token, setTokenUsuario] = useState('');
  const navigate = useNavigate();

  // Função para obter os parâmetros da URL
  const obterParametros = () => {
    const params = new URLSearchParams(window.location.search);
    const idParam = params.get('id');
    const emailParam = params.get('email');
    const tokenParam = params.get('token');

    if (idParam) {
      setIdUsuario(idParam);
      setEmailUsuario(emailParam);
      setTokenUsuario(tokenParam);
    }
  };

  useEffect(() => {
    obterParametros();
  }, []);

  const atualizarSenhaAlterada = (evento) => setSenhaAlterada(evento.target.value);
  const atualizarConfirmarSenha = (evento) => setConfirmarSenha(evento.target.value);

  const mudarSenha = async () => {
    if (validarSenha()) {
      setMensagemErro('');
      if(await alterarSenha()){
        navigate('/login');
      }
    }
  };

  const alterarSenha = async () => {

    const senhaJSON = {
      novaSenha: senhaAlterada
    }

    console.log(senhaAlterada);
    console.log(senhaJSON);
    console.log(id);
    
    try {
      await axios.put(`http://localhost:8080/v1/studyFy/aluno-senha/${id}`, senhaJSON);
      console.log('Senha alterada com sucesso');
      navigate('/login');
    } catch (error) {
      console.error('Erro ao alterar senha:', error);
      setMensagemErro('Houve um erro ao alterar a senha');
    }
  };

  const validarSenha = () => {

    if (senhaAlterada === '') {
      setMensagemErro('Não deve haver campos vazios');
      return false
    } else if (senhaAlterada.length > 25) {
      setMensagemErro('O campo Senha excedeu o limite de 25 caracteres.');
      return false
    } else if (senhaAlterada.length < 4) {
      setMensagemErro('O campo Senha possui menos de 6 caracteres.');
      return false
    } else if (senhaAlterada.includes('"') || senhaAlterada.includes("'")) {
      setMensagemErro('Não deve haver o uso de aspas nos campo');
      return false
    }

    if (confirmarSenha === '') {
      setMensagemErro('Não deve haver campos vazios');
      return false
    } else if (confirmarSenha.length > 25) {
      setMensagemErro('O campo Senha excedeu o limite de 25 caracteres.');
      return false
    } else if (confirmarSenha.length < 4) {
      setMensagemErro('O campo Senha possui menos de 6 caracteres.');
      return false
    } else if (confirmarSenha.includes('"') || confirmarSenha.includes("'")) {
      setMensagemErro('Não deve haver o uso de aspas nos campo');
      return false
    } else if (confirmarSenha !== senhaAlterada) {
      setMensagemErro('Os campos possuem senhas diferentes')
      return false
    }

    return true;
  };

  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <MudarSenha style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    {isDesktop ? (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '20%', alignItems: 'start', gap: '10px'}}>
          <div style={{ display: 'flex', width: '100%', height: '70%', alignItems: 'center'}}>
            <img src={mascote} alt="mascote" style={{ width: '15%', height: '100%' }} />
            <span style={{ fontSize: '2.5vw' }}>Mudar senha</span>
          </div>
          <C.Descricao>Altere a senha da sua conta</C.Descricao>
        </div>
      ) : (
        <C.Descricao>Altere a senha da sua conta</C.Descricao>
      )}
      <C.CampoPreencher>
        <C.CampoSenha>
          <FontAwesomeIcon icon={faLock} style={{ height: '40%', width: '10%', marginRight: '0', color: '#FEE101' }} />
          <C.EntradaInfo>
            <C.Input 
              type="password" 
              id="senhaAlterada" 
              name="senhaAlterada" 
              onChange={atualizarSenhaAlterada} 
              required 
              maxLength={25}
            />
            <C.Label htmlFor="senhaAlterada">Nova Senha</C.Label>
          </C.EntradaInfo>
        </C.CampoSenha>
        <C.CampoSenha>
          <FontAwesomeIcon icon={faLock} style={{ height: '40%', width: '10%', marginRight: '0', color: '#FEE101' }} />
          <C.EntradaInfo>
            <C.Input 
              type="password" 
              id="confirmarSenha" 
              name="confirmarSenha" 
              onChange={atualizarConfirmarSenha} 
              required 
              maxLength={25}
            />
            <C.Label htmlFor="confirmarSenha">Confirmar Nova Senha</C.Label>
          </C.EntradaInfo>
        </C.CampoSenha>
        <C.MensagemErro>{mensagemErro}</C.MensagemErro>
      </C.CampoPreencher>
      <C.CampoEnvioFormulario>
        <C.BotaoMudar onClick={mudarSenha}>
          <span>Mudar Senha</span>
        </C.BotaoMudar>
      </C.CampoEnvioFormulario>
    </MudarSenha>
  );
};

export default CampoMudarSenha;
