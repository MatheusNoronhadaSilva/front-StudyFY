import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconeDesempenho = styled(FontAwesomeIcon)`
   height: 50%;
   width: 20%;
   color: #fee101;
`

export const CampoDesempenho = styled.div`
   min-height: 25%;
   width: 100%;
   display: flex;
   flex-direction: column;
`

export const TituloCampo = styled.span`
   font-size: 1.2vw;
   font-weight: bold;
`

export const DesempenhoDiv = styled.div`
   flex-grow: 1;
   width: 100%;
   border: solid 1px #d9d9d9;
   border-radius: 8px;
   display: grid; /* Define como um grid */
   grid-template-columns: 1fr 1fr; /* Duas colunas de tamanhos iguais */
   grid-template-rows: 1fr 1fr; /* Duas linhas de tamanhos automáticos */
`

export const Desempenho = styled.div`
   border: solid 1px #d9d9d9;
   height: 100%;
   width: 100%;
   display: flex;
   align-items: center;
`

export const DesempenhoInfo = styled.div`
   height: 100%;
   flex-grow: 1;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
`

export const DesempenhoTitulo = styled.span`
   font-size: 1vw;
   font-weight: bold;
`

export const DesempenhoDesc = styled.span`
   font-size: 0.8vw;
`