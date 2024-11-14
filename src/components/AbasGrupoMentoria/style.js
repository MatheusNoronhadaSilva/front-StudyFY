import styled from "styled-components";

export const AbasGrupo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   height: 60%;
   max-height: 60%;
   padding: 0% 5% 0% 5%;
   margin-top: 2vh;
   gap: 2vh;
   width: 100%;

   @media(min-width: 768px){
      padding-right: 0%;
      width: 69.5%;
   }
`;

export const Abas = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   min-height: 10%;
   height: 10%;
   width: 100%;

   @media (min-width: 768px){
      width: 70%;
   }
`;

export const Aba = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   border-radius: 8px;
   border: solid 3px #E9CE03;
   box-shadow: 0 0.5vh 0 0 #E9CE03;
   height: 100%;
   width: 30%;
   background-color: #fee101;
`;

export const CampoAba = styled.div`
   display: flex;
   flex-direction: column;
   border: solid 3px #d9d9d9;
   min-height: 50%;
   max-height: 50%;
   width: 100%;
   overflow-y: auto;

   @media(min-width: 768px){
      overflow-y: hidden;
   }
`;

export const Pesquisa = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   width: 100%;
   height: 20%;
   max-height: 20%;

   @media(min-width: 768px){
      max-height: none;
      height: 30%;
   }
`

export const BarraPesquisa = styled.div`
   display: flex;
   align-items: center;
   width: 80%;
   height: 70%;
   border: solid 1px #d9d9d9;
   border-radius: 12px;
   box-shadow: 0 0.5vh 0 0 #d9d9d9;
   padding-inline: 5%;
`

export const InputPesquisa = styled.input`
   border: none;
   background-color: transparent;
   width: 100%;
   height: 100%;
`

export const Lupa = styled.img`
   height: 60%;
   width: 10%;

   @media(min-width: 768px){
      height: 20%;
   }
`

export const Filtro = styled.img`
   height: `