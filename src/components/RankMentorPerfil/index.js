// src/pages/Entrada.js
import * as C from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faGraduationCap, faBullseye, faFire } from '@fortawesome/free-solid-svg-icons';
import rankIcone from '../../assets/Bronze III.png'
import aluno from '../../assets/Ellipse (1).png'
import RankMaisAjudadosPerfil from '../RankMaisAjudadosPerfil'
import RankMelhorAvaliado from '../RankMelhorAvaliadoPerfil'
import AvaliacaoMentorPerfil from '../AvaliacaoMentorPerfil';

const RankMentorPerfil = () => {
    return (
        <C.CampoRankMentorPerfil>
            <C.TituloCampo>Rank - mentor</C.TituloCampo>
            <C.InfoRank>
                <AvaliacaoMentorPerfil />
                <C.RankDiv>
                    <RankMaisAjudadosPerfil />
                    <RankMelhorAvaliado />
                </C.RankDiv>
            </C.InfoRank>
        </C.CampoRankMentorPerfil>
    );
};

export default RankMentorPerfil;
