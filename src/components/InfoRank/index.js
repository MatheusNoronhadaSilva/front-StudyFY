// src/pages/Entrada.js
import * as C from './style';
import bronzeI from '../../assets/Bronze I.png'

const InfoRank = () => {
  return (
    <C.CampoInfoRank>
        <C.InfoRank>
            <C.IconeRank src={bronzeI}></C.IconeRank>
            <C.NomeRank>Bronze I</C.NomeRank>
            <C.Temporada>
                <C.DescTemporada>A temporada encerrará daqui a:</C.DescTemporada>
                <C.Duracao>7 Dias</C.Duracao>
            </C.Temporada>
        </C.InfoRank>
    </C.CampoInfoRank>
  );
};

export default InfoRank;
