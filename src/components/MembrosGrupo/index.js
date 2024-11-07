// src/components/Box.js
//import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as C from './style';
import ftPerfil from '../../assets/Ellipse (1).png';

const AbaMembros = () => {
  const [nomesMembros, setNomesMembros] = useState([]);
  const grupoId = 1;

  useEffect(() => {
    const fetchNomesMembros = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/v1/studyfy/membros/grupo/${grupoId}`);
        setNomesMembros(response.data.grupo.map(membro => membro.aluno_nome));
      } catch (error) {
        console.error('Erro ao buscar os nomes dos membros:', error);
      }
    };

    fetchNomesMembros();
  }, []);

  return (
    <C.Area>
      {nomesMembros.map((nome, index) => (
        <C.Membro key={index}>
          <C.AreaImg>
            <C.FtPerfil src={ftPerfil} alt="Foto de perfil" />
          </C.AreaImg>
          <C.Apresentacao>
            <C.NomeMembro>{nome}</C.NomeMembro>
            <C.Info>
              <b>Série:</b> 2º - Fund 1
            </C.Info>
          </C.Apresentacao>
          <C.InfoDiv>
            <C.Info>
              <b>Atividade:</b> 2ª Guerra Mundial: O Fim do Brasil
            </C.Info>
          </C.InfoDiv>
        </C.Membro>
      ))}
    </C.Area>
  );
};

export default AbaMembros;
