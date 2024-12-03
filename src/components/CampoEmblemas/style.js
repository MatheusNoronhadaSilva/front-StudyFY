import styled from "styled-components";

export const CampoEmblemas = styled.div`
   width: 100%;
   max-height: 85%;
   height: 100%;
   padding-bottom: 20%;
   overflow-y: auto;
   display: flex;
   flex-direction: column;

   @media (min-width: 768px) {
      max-height: 100%;
      padding-top: 4%;
      padding-bottom: 5%;
      gap: 8%;
   }
`
export const Emblemas = styled.div`
   display: flex;
   flex-direction: column;
   height: auto;
   width: 100%;
   padding-inline: 5vw;
   gap: 2vh;
`

export const Titulo = styled.span`
   font-size: 5vw;
   font-weight: bold;

   @media (min-width: 768px) {
      font-size: 1.5vw;
   }
`

export const Emblema = styled.div`
   width: 100%;
   height: 100vh;
   max-height: 10vh;
   display: flex;
   gap: 5%;

   @media (min-width: 768px){
      min-height: 2vh;
      max-height: 12vh;
      width: 55%;
      justify-content: flex-start;
      gap: 5%;
   }
`

export const AreaIcone = styled.div`
   min-height: 100%;
   width: 25%;
   border-radius: 8px;
   background-color: ${(props) => props.cor || '#d9d9d9'}; /* Cor padrão se não for fornecida */
   display: flex;
   flex-direction: column;
   align-items:center;
   justify-content: space-evenly;

   &.nPossui {
    opacity: 0.5;
    }

    @media (min-width: 768px){
      width: 15%;
   }
`

export const Icone = styled.img`
   height: 60%;
   width: 60%;

   @media (min-width: 768px){
      width: 55%;
   }
`

export const Nivel = styled.span`
   font-size: 4vw;
   font-weight: 600;

   @media (min-width: 768px){
      font-size: 0.8vw;
   }
`

export const AreaInfo = styled.div`
   display: flex;
   flex-direction: column;
   flex-grow: 1;
   justify-content: space-around;
`

export const AreaDescricao = styled.div`
   display: flex;
   flex-direction: column;
   height: 50%;
   width: 100%;
`

export const TituloEmblema = styled.span`
   font-size: 4vw;
   font-weight: bold;

   @media (min-width: 768px){
      font-size: 1.2vw;
   }
`

export const Descricao = styled.span`
   font-size: 2.5vw;

   @media (min-width: 768px){
      font-size: 0.8vw;
   }
`

export const AreaProgresso = styled.div`
   height: 12%;
   border-radius: 8px;
   width: 100%;
   background-color: #f2f0f0;
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
`

export const Progresso = styled.div`
   height: 100%;
   width: 20%;
   border-radius: 8px;
   background-color: #fee101;
   position: absolute;
   left: 0;
`

export const Andamento = styled.span`
   font-size: 2.5vw;
   font-weight: bold;
   z-index: 1;

   @media (min-width: 768px){
      font-size: 0.7vw;
   }
`