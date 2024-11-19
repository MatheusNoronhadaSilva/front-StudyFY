import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CampoAvaliacaoMentorPerfil = styled.div`
   height: 100%;
   width: 40%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 5%;
`

export const Estrelas = styled.div`
   display: flex;
   width: 100%;
   height: 55%;
`

export const IconeEstrelas = styled(FontAwesomeIcon)`
   height: 100%;
   width: 20%;
   color: #fee101;
`

export const AvaliacaoInfo = styled.div`
   display: flex;
   flex-direction: column;
   height: 25%;
   width: 100%;
   justify-content: space-between;
   align-items: center;
`

export const TotalAvaliacoes = styled.span`
   font-size: 0.7vw;
`

export const AvaliacoesGeral = styled.div`
   height: 40%;
   width: 100%;
   display: flex;
   flex-direction: column;
`

export const Avaliacao = styled.div`
   display: flex;
   width: 100%;
   height 20%;
   justify-content: space-between;
   align-items: center;
`

export const NumeroAvaliacao = styled.span`
   font-size: 1vw;
   font-weight: bold;
`

export const BarraProgresso = styled.div`
   width: 75%;
   height: 60%;
   background-color: #d9d9d9;
   z-index: 0;
   position: relative;
   border-radius: 8px;
`

export const Progresso = styled.div`
   height: 100%;
   width: 20%;
   border-radius: 8px;
   background-color: #302F2F;
   position: absolute;
   left: 0;
`

export const QuantidadeAvaliacao = styled.span`
   font-size: 1vw;
   font-weight: bold;`