// src/pages/Entrada.js
import React, { useEffect, useState } from 'react';  // Importando hooks do React
import axios from 'axios'; // Importando axios para fazer requisições
import InfoUsuario from '../InfoUsuario';  // Apenas este componente receberá os dados
import Desempenho from '../Desempenho';
import Emblemas from '../EmblemasPerfil'
import RankAlunos from '../RankAlunosPerfil'
import RankMentor from '../RankMentorPerfil'
import * as C from './style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Importar o useNavigate

const CampoPerfil = () => {

  const navigate = useNavigate();
  const idMentor = localStorage.getItem("id_mentor");
  const idUsuario = localStorage.getItem("userId") 
  console.log(idUsuario);

  // Estado para armazenar os dados do aluno/mentor
  const [dadosPerfil, setDadosPerfil] = useState(null);

  // Função para buscar os dados do perfil usando o axios
  const fetchDadosPerfil = async () => {
    try {
      // Fazendo a requisição GET para o endpoint de dados do aluno/mentor
      const response = await axios.get(`http://localhost:8080/v1/studyFy/aluno/${idUsuario}`);
            
      // Armazenando os dados no estado
      setDadosPerfil(response.data.aluno);
      
    } catch (error) {
      console.error('Erro ao buscar dados do perfil:', error);
    }
  };

  // Usando useEffect para chamar a função de fetch quando o componente for montado
  useEffect(() => {
    if (idMentor) {
      fetchDadosPerfil();
    }
  }, [idMentor]); // Dependência para refazer a requisição caso o idMentor mude

  const TelaConfiguracao = () => {
    navigate('/perfil-configuracao');
  };

  return (
    <C.Campo>
      <C.Configuracao onClick={TelaConfiguracao} icon={faGear} />
      
      {/* Verificando se os dados do perfil foram carregados */}
      {dadosPerfil ? (
        <>
          <InfoUsuario dados={dadosPerfil} />  {/* Envia os dados somente para InfoUsuario */}
          <Desempenho />
          <RankAlunos />
          {idMentor !== '0' ? <RankMentor /> : <></>}
          <Emblemas />
        </>
      ) : (
        <p>Carregando dados do perfil...</p>
      )}
    </C.Campo>
  );
};

export default CampoPerfil;
