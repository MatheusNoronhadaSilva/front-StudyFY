import { style } from "@mui/system";
import styled from "styled-components";

export const RankMaisAjudados = styled.div`
   display: flex;
   flex-direction: column;
   border: solid #d9d9d9 3px;
   min-height: 38.2%;
   max-height: 44vh;
   overflow-y: auto;
   margin-top: 10%;

   @media(min-width: 768px){
      margin-top: 5%;
      width: 80%;
      place-self: center;
   }
`

export const MentorRank = styled.div`
   display: flex;
   width: 100%;
   min-height: 8vh;
   border-bottom: solid #d9d9d9 3px;
   border-top: solid #d9d9d9 3px;

`

export const ColocacaoDiv = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
   width: 15%;

   @media(min-width: 768px){
      width: 12%;
   }
`

export const ColocacaoMedalha = styled.img`
   height: 50%;
   width: 60%;

   @media(min-width: 768px){
      width: 45%;
   }
`

export const Colocacao = styled.span`
   font-size; 2vw;
`

export const AreaImg = styled.div`
   height: 100%;
   width: 18%;
   align-items: center;
   justify-content: center;
   display: flex;

   @media(min-width: 768px){
      width: 12%;
   }
`

export const FtPerfil = styled.img`
   height: 80%;
   width: 80%;
`

export const AreaNome = styled.div`
   height: 100%;
   width: 45%;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const AreaPontos = styled.div`
   flex-grow: 1;
   align-items: center;
   justify-content: center;
   display: flex;
`

export const SubirRankAlunos = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
`

export const SubirRank = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   margin-block: 5%;
`

export const DescerRankAlunos = styled.div`
   display: flex;
   margin-block: 5%;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
`

export const DescerRank = styled.div`
   display: flex;
   margin-block: 5%;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   margin-block: 5%;
`

export const NavegacaoRank = styled.div`
   width: 100%;
   min-height:6%;
   display: flex;
   border-bottom: solid 3px #d9d9d9;
   border-left: solid 3px #d9d9d9;
   border-right: solid 3px #d9d9d9;
   width: 80%;
   place-self: center;
   align-items: center;
   justify-content: center;
   gap: 6%;
`

export const Seta = styled.img`
   height: 40%;
   width: 3%;
`

export const SetaTudo = styled.img`
   height: 40%;
   width: 5%;
`

export const NumeroPagina= styled.span`
   font-size: 1rem;
`
