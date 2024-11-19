// src/pages/Entrada.js
import React from 'react';
import * as C from './style';
import IconePerfil from '../../assets/Ellipse (1).png';

const InfoUsuario = () => {

  const idMentor = localStorage.getItem("id_mentor")

  return (
    <C.CampoInfoUsuario>
      <C.CampoInfoPrincipal>
        <C.FundoAmarelo />
        <C.IconePerfil src={IconePerfil} />
        <C.NomeUsuario> alololollo</C.NomeUsuario>
        <C.DataEtrada>10/10/1000</C.DataEtrada>
      </C.CampoInfoPrincipal>
      <C.CampoInfoAdicionais>
        <C.InfoAdicionaisP1>
          <C.InfoDiv>
            <C.InfoTitulo>Estudando</C.InfoTitulo>
            <C.Info>História</C.Info>
          </C.InfoDiv>
          <C.InfoDiv>
            <C.InfoTitulo>Série</C.InfoTitulo>
            <C.Info>3º fund1</C.Info>
          </C.InfoDiv>
          <C.InfoDiv>
            <C.InfoTitulo>Atividade atual</C.InfoTitulo>
            <C.Info>Bahche</C.Info>
          </C.InfoDiv>
        </C.InfoAdicionaisP1>
        <C.InfoAdicionaisP2>
          <C.Identificacao>Aluno/mentor</C.Identificacao>
          {idMentor != 0 ? (
            <C.VerGrupoMentoria>Ver mentoria</C.VerGrupoMentoria>
          ) : (
            <></>
          )}
        </C.InfoAdicionaisP2>
      </C.CampoInfoAdicionais>
    </C.CampoInfoUsuario >
  );
};

export default InfoUsuario;
