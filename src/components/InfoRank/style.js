import { toBePartiallyChecked } from "@testing-library/jest-dom/matchers";
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

   @media(min-width: 768px){
      font-size: 2vw;
   }
`

export const IconeRank = styled.img`
   height: 80%;
   width: 28%;

   @media(min-width: 768px){
      width: 20%;
   }
`

export const NomeRank = styled.span`
   fontSize: 5vw;
   fontWeight: bold;
   color: #CDA572;

   @media(min-width:768px){
      font-size: 2vw;
   }
`

export const DescTemporada = styled.span`
   fontSize: 3vw;

   @media(min-width:768px){
      font-size: 1vw;
   }
`