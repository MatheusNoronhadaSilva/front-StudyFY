import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Campo = styled.div`
   flex-grow: 1;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   padding: 5% 25%;
   overflow-y: auto;
   gap: 5%;
   position: relative;
`

export const Engrenagem = styled(FontAwesomeIcon)`
   position: absolute;
   height: 2.5%;
   width: 2.5%;
   top: 5%;
   right: 29.4%;
   cursor: pointer
`

export const Campos = styled.div`
   min-height: 28%;
   display: flex;
   flex-direction: column;
   gap: 5%;
`

export const CampoInfoUsuario = styled.div`
   width: 100%;
   min-height: 60%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`
export const CampoInfoPrincipal = styled.div`
   width: 100%;
   min-height: 33%;
   padding-top: 3%;
   gap: 5%;
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
`

export const IconePerfil = styled.img`
   width: 26%;
   height: 70%;
   z-index: 1;
`

export const NomeUsuario = styled.span`
   font-size: 2vw;
   font-weight: bold;
   z-index: 1;
`

export const DataEntrada = styled.span`
   font-size: 1.5vw;
   font-weight: bold;
   z-index: 1;
`

export const FundoAmarelo = styled.div`
   height: 70%;
   width: 100%;
   z-index: 0;
   background-color: #fee101;
   position: absolute;
   bottom: 0;
   border-radius: 8px;
`

export const EntradaInfo = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
   padding-left: 5%;
   border: solid 1px #d9d9d9;
   border-radius: 8px; 

   @media (min-width: 768px) {
      padding-left: 5%;
   }
`;

export const Label = styled.label`
   position: absolute;
   left: 5%;
   top: 25%;
   font-size: 4vw;
   color: #d9d9d9;
   transition: all 0.3s ease;
   pointer-events: none; /* Para que o label não interfira nos cliques do input */

   @media (min-width: 768px) {
      font-size: 1.3vw;
   }
`;

export const Input = styled.input`
   font-size: 3vw;
   border: none;
   outline: none;
   background-color: transparent;
   width: 100%;
   height: 100%;
   box-sizing: border-box;

   @media (min-width: 768px) {
      font-size: 1vw;
   }

   &:focus + ${Label},
   &:valid + ${Label} {
      top: -20%;
      left: 3%;
      font-size: 3vw;
      color: #FEE101;
      background: white;
      padding: 0 2%;
      z-index: 1; /* Para que o label fique acima do input */

      @media (min-width: 768px) {
         font-size: 1vw;
      }
   }
`;

export const CampoGeral = styled.div`
   min-height: 25%;
   width: 100%;
   display: flex;
   flex-direction: column;
   margin-top: 5%;
   gap: 10%;
`

export const CampoTitulo = styled.span`
   font-size: 1.5vw;
   font-weight: bold;
`

export const ConfiguracoesDiv = styled.div`
   height: auto;
   width: 100%;
   border-radius: 32px;
   display: grid;
   grid-template-columns: 1fr;
   grid-auto-rows: 1fr;
   border: solid 1px #d9d9d9;
`

export const Configuracao = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding-inline: 5%;
   min-height: 7vh; 
`

export const ConfiguracaoDesc = styled.span`
   font-size: 1.5vw;
`

export const CampoNotificacao = styled.div`
   min-height: 40%;
   width: 100%;
   display: flex;
   flex-direction: column;
   margin-top: 5%;
   gap: 10%;
`

export const CampoLembretes = styled.div`
   min-height: 55%;
   width: 100%;
   display: flex;
   flex-direction: column;
   margin-top: 5%;
   gap: 10%;
`

export const ConfiguracaoLembreteDesc = styled.span`
   font-size: 1vw;
   width: 50%
`