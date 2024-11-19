// src/pages/Entrada.js
import * as C from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faGraduationCap, faBullseye, faFire } from '@fortawesome/free-solid-svg-icons';
import rankIcone from '../../assets/Bronze III.png'
import aluno from '../../assets/Ellipse (1).png'
const RankAlunosPerfil = () => {
  return (
    <C.CampoRankAlunoPerfil>
        <C.TituloCampo>Rank - alunos</C.TituloCampo>
        <C.InfoRankAluno>
        <C.FotoRankDiv>
            <C.IconeRank src={rankIcone} />
            <C.NomeRank>Bronze III</C.NomeRank>
        </C.FotoRankDiv>
        <C.TabelaRank>
           <C.Aluno style={{borderBottom: 'solid 1px #d9d9d9'}}>
            <C.Colocacao>#1</C.Colocacao>
            <C.InfoAluno>
                <C.IconeAluno src={aluno}/>
                <C.NomeAluno>Matheus Noronha da Silva e amorie...</C.NomeAluno>
            </C.InfoAluno>
            <C.Pontuacao>251Pts</C.Pontuacao>
           </C.Aluno>
           <C.Aluno style={{borderBottom: 'solid 1px #d9d9d9'}}>
           <C.Colocacao>#1</C.Colocacao>
            <C.InfoAluno>
                <C.IconeAluno src={aluno}/>
                <C.NomeAluno>Matheus Noronha da Silva e amorie...</C.NomeAluno>
            </C.InfoAluno>
            <C.Pontuacao>251Pts</C.Pontuacao>
            </C.Aluno> 
           <C.Aluno>
            <C.Colocacao>#1</C.Colocacao>
            <C.InfoAluno>
                <C.IconeAluno src={aluno}/>
                <C.NomeAluno>Matheus Noronha da Silva e amorie...</C.NomeAluno>
            </C.InfoAluno>
            <C.Pontuacao>251Pts</C.Pontuacao></C.Aluno> 
        </C.TabelaRank>
        </C.InfoRankAluno>
    </C.CampoRankAlunoPerfil>
  );
};

export default RankAlunosPerfil;
