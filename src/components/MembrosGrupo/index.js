// src/components/Box.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as C from './style';
import ftPerfil from '../../assets/Ellipse (1).png';

const AbaMembros = (grupoId) => {
  const [Membros, setMembros] = useState([]);
  console.log('id do grupo:', JSON.stringify(grupoId, null, 2));
  const idGrupo = grupoId.grupoId.grupoId
  console.log(idGrupo);
  
  

  useEffect(() => {
    const fetchNomesMembros = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/v1/studyfy/membros/grupo/${idGrupo}`);
        console.log(response.data.grupo);
        console.log('id do grupo:', JSON.stringify(response.data.grupo, null, 2));

        setMembros(response.data.grupo);

      } catch (error) {
        console.error('Erro ao buscar os nomes dos membros:', error);
      }
    };

    fetchNomesMembros();
  }, []);

  return (
    <C.Area>
      {Membros === null ? (
  <C.SemMembros>Não há membros no grupo</C.SemMembros>
) : (
  Membros.map((membro, index) => (
    <C.Membro key={index}>
      <C.AreaImg>
        <C.FtPerfil src={membro.aluno_imagem} alt="Foto de perfil" />
      </C.AreaImg>
      <C.Apresentacao>
        <C.NomeMembro>{membro.aluno_nome}</C.NomeMembro>
        <C.Info>
          <b>Série:</b> {membro.serie_nome}
        </C.Info>
      </C.Apresentacao>
      <C.InfoDiv>
        <C.Info>
          <b>Atividade:</b> 2ª Guerra Mundial: O Fim do Brasil
        </C.Info>
      </C.InfoDiv>
    </C.Membro>
  ))
)}
    </C.Area>
  );
};

export default AbaMembros;
