// src/pages/Entrada.js
import * as C from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import rankIcone from '../../assets/Bronze III.png'
import aluno from '../../assets/Ellipse (1).png'

const AvaliacaoMentorPerfil = () => {
    return (
        <C.CampoAvaliacaoMentorPerfil>
            <C.AvaliacaoInfo>
                <C.Estrelas>
                    <C.IconeEstrelas icon={faStar} />
                    <C.IconeEstrelas icon={faStar} />
                    <C.IconeEstrelas icon={faStar} />
                    <C.IconeEstrelas icon={faStar} />
                    <C.IconeEstrelas icon={faStarHalf} />
                </C.Estrelas>
                <C.TotalAvaliacoes>231 avaliações</C.TotalAvaliacoes>
            </C.AvaliacaoInfo>
            <C.AvaliacoesGeral>
                <C.Avaliacao>
                    <C.NumeroAvaliacao>5</C.NumeroAvaliacao>
                    <C.BarraProgresso>
                        <C.Progresso />
                    </C.BarraProgresso>
                    <C.QuantidadeAvaliacao>20%</C.QuantidadeAvaliacao>
                </C.Avaliacao>
                <C.Avaliacao>
                    <C.NumeroAvaliacao>4</C.NumeroAvaliacao>
                    <C.BarraProgresso>
                        <C.Progresso />
                    </C.BarraProgresso>
                    <C.QuantidadeAvaliacao>20%</C.QuantidadeAvaliacao>
                </C.Avaliacao>
                <C.Avaliacao>
                    <C.NumeroAvaliacao>3</C.NumeroAvaliacao>
                    <C.BarraProgresso>
                        <C.Progresso />
                    </C.BarraProgresso>
                    <C.QuantidadeAvaliacao>20%</C.QuantidadeAvaliacao>
                </C.Avaliacao>
                <C.Avaliacao>
                    <C.NumeroAvaliacao>2</C.NumeroAvaliacao>
                    <C.BarraProgresso>
                        <C.Progresso />
                    </C.BarraProgresso>
                    <C.QuantidadeAvaliacao>20%</C.QuantidadeAvaliacao>
                </C.Avaliacao>
                <C.Avaliacao>
                    <C.NumeroAvaliacao>1</C.NumeroAvaliacao>
                    <C.BarraProgresso>
                        <C.Progresso />
                    </C.BarraProgresso>
                    <C.QuantidadeAvaliacao>20%</C.QuantidadeAvaliacao>
                </C.Avaliacao>
            </C.AvaliacoesGeral>
        </C.CampoAvaliacaoMentorPerfil>
    );
};

export default AvaliacaoMentorPerfil;
