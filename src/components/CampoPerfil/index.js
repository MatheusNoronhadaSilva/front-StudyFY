// src/pages/Entrada.js
import InfoUsuario from '../InfoUsuario';
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
  const idMentor = localStorage.getItem("id_mentor") 
  console.log(idMentor);

  const TelaConfiguracao = () => {
    navigate('/perfil-configuracao')
  }
  
  return (
    <C.Campo>
    <C.Configuracao onClick={TelaConfiguracao} icon={faGear}/>
    <InfoUsuario />
    <Desempenho />
    <RankAlunos />
    { idMentor != 0 ? (
      <RankMentor />
    ) : (
      <></>
    )}
    <Emblemas />
    </C.Campo>
  );
};

export default CampoPerfil;
