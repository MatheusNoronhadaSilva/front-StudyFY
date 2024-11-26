import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconeFechar = styled(FontAwesomeIcon)`
   height: 100%; 
   width: 100%;
   color: white;
`
export const TelaHeader = styled.div`
   height: 10%;
   width: 100%;
   background-color: #fee101;
   margin-bottom: 4%;
`

export const Contagem = styled.span`
   font-size: 1.5vw;
   font-weight: bold;
`

export const TituloAtividade = styled.span`
   font-size: 2vw;
`

export const CampoQuestoesDiv = styled.div`
   flex-grow: 1;
   width: 50%;
   gap:5%;
   display: flex;
   flex-direction: column;
`

export const Questao = styled.div`
   height: 65%;
   width: 100%;
`

export const HeaderQuestao = styled.div`
   width: 100%;
   height: 10%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`

export const Fechar = styled.div`
   height: 80%;
   width: 6%;
   padding: 1%;
   border-radius: 12px;
   background-color: red;
   cursor: pointer;
`