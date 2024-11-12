import styled from "styled-components";

export const RankAlunos = styled.div`
   display: flex;
   flex-direction: column;
   border: solid #d9d9d9 3px;
   min-height: 40%;
   max-height: 44vh;
   overflow-y: auto;

   @media(min-width: 768px){
      min-height: 18%;
      max-height: 25%;
      width: 50%;
   }
`

export const AlunoRank = styled.div`
   display: flex;
   width: 100%;
   min-height: 7.5vh;
   max-height: 7.5vh;
   border-bottom: solid #d9d9d9 3px;
   border-top: solid #d9d9d9 3px;

`

export const Colocacao = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
   width: 15%;
`

export const AreaImg = styled.div`
   height: 100%;
   width: 18%;
   align-items: center;
   justify-content: center;
   display: flex;
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
