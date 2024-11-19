// src/pages/Entrada.js
import * as C from './style';
import rankIcone from '../../assets/Bronze III.png'
import Mentor from '../../assets/Ellipse (1).png'

const RankMaisAjudadosPerfil = () => {

    return (
<C.CampoRankMaisAjudadosPerfil>
        <C.TabelaRank>
           <C.Mentor style={{borderBottom: 'solid 1px #d9d9d9'}}>
            <C.Colocacao>#1</C.Colocacao>
            <C.InfoMentor>
                <C.IconeMentor src={Mentor}/>
                <C.NomeMentor>Matheus Noronha da Silva e amorie...</C.NomeMentor>
            </C.InfoMentor>
            <C.Pontuacao>251Pts</C.Pontuacao>
           </C.Mentor>
           <C.Mentor style={{borderBottom: 'solid 1px #d9d9d9'}}>
           <C.Colocacao>#1</C.Colocacao>
            <C.InfoMentor>
                <C.IconeMentor src={Mentor}/>
                <C.NomeMentor>Matheus Noronha da Silva e amorie...</C.NomeMentor>
            </C.InfoMentor>
            <C.Pontuacao>251Pts</C.Pontuacao>
            </C.Mentor> 
           <C.Mentor>
            <C.Colocacao>#1</C.Colocacao>
            <C.InfoMentor>
                <C.IconeMentor src={Mentor}/>
                <C.NomeMentor>Matheus Noronha da Silva e amorie...</C.NomeMentor>
            </C.InfoMentor>
            <C.Pontuacao>251Pts</C.Pontuacao></C.Mentor> 
        </C.TabelaRank>
    </C.CampoRankMaisAjudadosPerfil>
    );
};

export default RankMaisAjudadosPerfil;
