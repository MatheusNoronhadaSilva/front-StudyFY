import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ContainerNavegacao = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 7vh;
  min-width: 100%;
  background-color: white;
  border-top: solid #d9d9d9 2px;
  align-items: center;
  justify-content: space-between;
  position: relative; /* Altera de relative para fixed */
  bottom: 0; /* Mantém na parte inferior da tela */
  z-index: 100;

  @media(min-width: 768px) {
   flex-direction: column;
   height: 100%;
   min-width: 16%;
   border-right: 1px solid #d9d9d9;
   border-top: none;
   justify-content: flex-start;
   padding-top: 2%;
   gap: 5%;
   padding-left: 2%;

  }
`;

export const nomeApp = styled.span`
   font-size: 2vw;
   font-weight: bold;
   width: 100%;
   text-align: start;
   padding-left: 5%;

`

export const nomeAppAmarelo = styled.span`
   color: #fee101;
`

export const CampoIcone = styled(Link)`
   height: 100%;
   width: 100%;
   align-items: center;
   justify-content: center;
   display: flex;
   cursor: pointer; /* Mantém o comportamento de link */
   border-radius: 8px;

   
   ${({ imgAtiva, index }) => imgAtiva !== index && `
      &:hover {
         color: gray; /* Cor opcional para o estado de hover */
      }
   `}

     @media (min-width: 768px) {
      text-decoration: none;
      padding-left: 5%;
      gap: 0.5vw;
   }
`

export const imgIcone = styled.img`
   height: 70%;
   width: 60%;

   @media(min-width: 768px){
      height: 60%;
      width: 65%;
   }
`

export const AreaImg = styled.div`
   width: 20%;
   height: 100%;
   align-items: center;
   display: flex;
`

export const AreaDescricao = styled.div`
   display: flex;
   flex-grow: 1;
`

export const DescricaoIcone = styled.span`
   font-size: 0.9vw;
   color: black;
   font-weight: bold;
   
`

// O restante do seu estilo não precisa ser alterado


// Definindo o ImgDiv com hover e lógica condicional dentro do styled-components
export const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 15%;
  border-radius: 8px;

  &:hover {
    background-color: #f2f0f0 !important; /* Cor de fundo ao passar o mouse */
  }

  @media (min-width: 768px) {
    height: 10%;
    width: 90%;
    border-radius: 12px;
    background-color: ${({ imgAtiva, index }) => (imgAtiva === index ? '#FFFCE6' : 'transparent')};
    border: ${({ imgAtiva, index }) => (imgAtiva === index ? 'solid 1px #fee101' : 'transparent')};
  }
`;



export const ImgDivExtras = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 80%;
   width: 75%;
   border-radius: 8px;
   background-color: #666260;
`;

export const DivImgs = styled.div`
   display: flex;
   align-items: start;
   justify-content: space-evenly;
   height: 75%;
   width: 80%;

   @media (min-width: 768px) {
      flex-direction: column;
      height: 60%;
      width: 100%;
      justify-content: flex-start;
      padding-bottom: 10%;
      gap: 1vh;
   }
`;

export const DivImagensExtras = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   height: 330%;
   width:18%;
   position: absolute; /* Posiciona em relação a DivImgs */
   bottom: 100%; /* Alinhamento com a parte superior de DivImgs */
   right: 0; /* Alinhamento com a parte esquerda de DivImgs */
   background-color: white;
   border-left: solid 2px #d9d9d9;
   border-top: solid 2px #d9d9d9;
   transform: scaleY(${props => props.mostrar ? 1 : 0}); /* Animação de crescimento */
   transform-origin: bottom; /* Origem da transformação */
   transition: transform 0.3s ease-in-out; /* Tempo da animação */
`;
