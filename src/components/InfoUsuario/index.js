// src/pages/Entrada.js
import React from 'react';
import * as C from './style';
import IconePerfil from '../../assets/Ellipse (1).png'; // Imagem de exemplo

const InfoUsuario = ({ dados }) => {  // Recebe os dados como props

  const aluno = dados  
    
  console.log(aluno);
  
  return (
    <C.CampoInfoUsuario>
      <C.CampoInfoPrincipal>
        <C.FundoAmarelo />
        {/* Usando a foto do aluno se disponível */}
        <C.IconePerfil src={aluno.foto_aluno || IconePerfil} />
        <C.NomeUsuario>{aluno.nome_aluno}</C.NomeUsuario>
        <C.DataEtrada>Ingressou em: {aluno.data_criacao_conta}</C.DataEtrada>
      </C.CampoInfoPrincipal>
      <C.CampoInfoAdicionais>
        <C.InfoAdicionaisP1>
          <C.InfoDiv>
            <C.InfoTitulo>Estudando</C.InfoTitulo>
            {/* Exibindo as matérias associadas */}
            <C.Info>{aluno.materias_associadas}</C.Info>
          </C.InfoDiv>
          <C.InfoDiv>
            <C.InfoTitulo>Série</C.InfoTitulo>
            <C.Info>{aluno.nome_serie}</C.Info>
          </C.InfoDiv>
        </C.InfoAdicionaisP1>
        <C.InfoAdicionaisP2>
          <C.Identificacao>{aluno.tipo_aluno}</C.Identificacao>
        </C.InfoAdicionaisP2>
      </C.CampoInfoAdicionais>
    </C.CampoInfoUsuario >
  );
};

export default InfoUsuario;
