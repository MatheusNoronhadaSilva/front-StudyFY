import styled from "styled-components";

export const TelaRank = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 100%;
`
export const CampoInfoRank = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 30%;
   width: 100%;
   margin-top: 5%;

   @media(min-width: 768px){
      min-height: 18%;
      max-height: 25%;
      width: 100%;
   }
`

export const imgRank = styled.img`
   height: 80%;
   width: 28%;

   @media(min-width: 768px){
      height: 80%;
      width: 10%;
   }
`

export const descRank = styled.span`
   font-size: 5vw;
   font-weight: bold;
   color: #CDA572;

   @media(min-width: 768px){
      font-size: 2vw;
   }
`

export const descTemporada = styled.span`
   font-size: 3vw;

   @media(min-width: 768px){
      font-size: 1.5vw;
   }
`

export const InfoRank = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 66%;
   gap: 6%
`

export const Temporada = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const Duracao = styled.span`
   font-size: 4vw;
   font-weight: bold;

   @media
`