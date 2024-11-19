// src/pages/Entrada.js
import * as C from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faGraduationCap, faBullseye, faFire } from '@fortawesome/free-solid-svg-icons';

const Desempenho = () => {
  return (
    <C.CampoDesempenho>
      <C.TituloCampo>Desempenho</C.TituloCampo>
      <C.DesempenhoDiv>
        <C.Desempenho>
         <C.IconeDesempenho icon={faTrophy}></C.IconeDesempenho>
         <C.DesempenhoInfo>
          <C.DesempenhoTitulo>Rank recorde</C.DesempenhoTitulo>
          <C.DesempenhoDesc>Bronze III</C.DesempenhoDesc>
         </C.DesempenhoInfo>
        </C.Desempenho>
        <C.Desempenho>
        <C.IconeDesempenho icon={faBullseye}></C.IconeDesempenho>
        <C.DesempenhoInfo>
          <C.DesempenhoTitulo>Rank recorde</C.DesempenhoTitulo>
          <C.DesempenhoDesc>Bronze III</C.DesempenhoDesc>
         </C.DesempenhoInfo>
        </C.Desempenho>
        <C.Desempenho>
        <C.IconeDesempenho icon={faFire}></C.IconeDesempenho>
        <C.DesempenhoInfo>
          <C.DesempenhoTitulo>Rank recorde</C.DesempenhoTitulo>
          <C.DesempenhoDesc>Bronze III</C.DesempenhoDesc>
         </C.DesempenhoInfo>
        </C.Desempenho>
        <C.Desempenho>
        <C.IconeDesempenho icon={faGraduationCap}></C.IconeDesempenho>
        <C.DesempenhoInfo>
          <C.DesempenhoTitulo>Rank recorde</C.DesempenhoTitulo>
          <C.DesempenhoDesc>Bronze III</C.DesempenhoDesc>
         </C.DesempenhoInfo>
        </C.Desempenho>
      </C.DesempenhoDiv>
    </C.CampoDesempenho>
  );
};

export default Desempenho;
