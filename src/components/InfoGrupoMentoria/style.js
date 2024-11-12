import styled from "styled-components";

export const InfoGrupo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   min-height: 32%;
   padding: 5% 5% 0% 5%;
   margin-top: 5vh;
   gap: 2vh;
   width: 100%;

   @media(min-width: 768px){
      width: 80%;
      gap: 6%;
      height: 42%;
      min-height: 32%;
      padding-top: 3%;
      padding-right: 0%;
      align-items: start;
      flex-direction: row;
   }
`;

export const IntroducaoGrupo = styled.div`
   display: flex;
   flex-direction: row;
   height: 50%;
   width: 100%;
   justify-content: space-between;

   @media(min-width: 768px){
      height: 100%;
      width: 50%;
      flex-direction: column;
      gap: 3vh;
   }
`

export const MentorDiv = styled.div`
   display: flex;
   flex-direction: column;
   height: 45%;
   width: 100%;
   justify-content: space-between;

   @media (min-width: 768px){
      width: 100%;
   }
`

export const MentorGrupo = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   height: 30%;
   width: 45%;
   justify-content: space-between;

   @media(min-width: 768px){
   justify-content: flex-start;
   gap: 1vw;
}
`

export const CampoInfoMentor = styled.div`
   display: flex;
   flex-direction: row;
   height: 62%;
   width: 100%;
   border-radius: 8px;
   border: solid 3px #d9d9d9;
   box-shadow: 0 0.5vh 0 0 #d9d9d9;
   padding-inline: 1vw;

   @media(min-width: 768px){
   flex-grow: 1;
}
`

export const InfoMentor = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 60%;
   padding-top: 1vh;

   @media(min-width: 768px){
      width: 70%;
      padding-top: 0vh;
      justify-content: center;
      max-width: 70%; 
   }
`

export const DadosMentor = styled.div`
   display: flex;
   flex-direction: row;
   height: 100%;
   width: 70%;
   align-items: center;
   justify-content: space-evenly;
`

export const InfoDetalheGrupo = styled.div`
   display: flex;
   flex-direction: column;
   background-color: #fee101;
   border-radius: 8px;
   border: solid 3px #E9CE03;
   box-shadow: 0 0.5vh 0 0 #E9CE03;
   width: 36%;
   height: 100%;
   justify-content: space-evenly;
   align-items: center;

   @media(min-width: 768px) {
      box-shadow: none;
      background-color: transparent;
      border-radius:0px;
      border: none;
      position: relative;
      width: 50%;
      gap: 1vh;
   }
`

export const FotoGrupoDiv = styled.div`
display: flex;
flex-direction: column;
background-color: #fee101;
border-radius: 8px;
border: solid 3px #E9CE03;
box-shadow: 0 0.5vh 0 0 #E9CE03;
width: 36%;
height: 100%;
justify-content: space-evenly;
align-items: center;

@media(min-width: 768px) {
   box-shadow: none;
   background-color: transparent;
   border-radius:0px;
   border: none;
   position: relative;
   width: 30%;
   z-index: 100;
   gap: 1vh;
}
`

export const DescricaoDiv = styled.div`
   display: flex;
   width: 55%;
   height: 100%;

   @media(min-width: 768px){
      width: 100%;
      height: 75%;
   }
`;

export const Descricao = styled.div`
   display: flex;
   padding: 5% 5% 5% 5%;
   border-radius: 8px;
   border: solid 3px #d9d9d9;
   box-shadow: 0 0.5vh 0 0 #d9d9d9;
   height: 100%;
   width: 100%;
`;

export const AvaliacaoMentor = styled.div`
   display: flex;
   flex-direction: row
   height: 100%;
   width: 30%;
   align-items: center;
   gap: 5%;
`

export const Barra = styled.div`
   height: 70%;
   width: 2%;
   background-color: black;

   @media(min-width: 768px){
      min-width: 2%;
   }
`

export const Avaliacao = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 100%;
   justify-content: center;
   gap: 1vh;
   align-items: center;
`

export const Estrelas = styled.div`
   display: flex;
   flex-direction: row;
   height: 20%;
   width: 100%;
   justify-content: center;
`

export const fundoAmarelo = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   background-color: #fee101;
   border-radius: 8px;
   border: solid 3px #E9CE03;
   box-shadow: 0 0.5vh 0 0 #E9CE03;
   z-index: 0; /* Aumenta o z-index */
`;

export const Membros = styled.span`
   font-weight: bold;
   font-size: 3.5vw;

   @media(min-width: 768px){
      font-size: 1vw;
      z-index: 100;
   }
`

export const NomeGrupo = styled.span`
   font-weight: bold;
   @media (min-width: 768px){
      font-size: 1.3vw;
      text-align: start;
   }
`

export const FotoMateriaDiv = styled.div`
   height: 55%;
   width: 35%;
   background-color: white;
   border-radius: 360px;
   z-index: 100;
   bottom: 5%;
   border: solid 1px black;
   padding: 5% 5%;
   position: absolute;
`

export const FotoMateria = styled.img`
   height: 100%;
   width: 100%;

`

export const IntroGrupoDiv = styled.div`

   display: flex;
flex-direction: row;
background-color: #fee101;
border-radius: 8px;
border: solid 3px #E9CE03;
box-shadow: 0 0.5vh 0 0 #E9CE03;
width: 36%;
height: 100%;
justify-content: space-evenly;
align-items: center;

@media(min-width: 768px) {
   box-shadow: none;
   background-color: transparent;
   border-radius:0px;
   border: none;
   position: relative;
   width: 100%;
   height: 40%;
   max-height: 15vh;
   margin-top: 6vh;
   gap: 1vh;
}
`

export const IntroGrupo = styled.div`

   @media(min-width:768px){
      display: flex;
      flex-direction: column;
      z-index:100;
      height: 100%;
      min-width: 60%;
      max-width: 60%;
      background-color: trasnparent;
      justify-content: space-evenly;
      text-align: end;
      padding-right: 5%;  
   }
`

export const IconeGrupo = styled.img`
   width: 60%;
   height: 60%;

   @media(min-width: 768px){
      width: 80%;
      height: 120%;
      position: absolute;
      top: -40%;
      z-index:100;
   }
`

export const DescricaoTitulo = styled.span`
   @media(min-width: 768px){
      font-size: 1vw;
   }
`

export const IconeMentor = styled.img`
   height: 80%;
   width: 20%;

   @media(min-width: 768px){
      height: 75%;
      width: 11%;
   }
`

export const MentorGrupoTitulo = styled.span`
   font-size: 1vw;
`

export const FotoMentor = styled.img`
   height:80%;
   width: 22%;

   @media(min-width: 768px){
      width: 20%
   }
`

export const NomeMentor = styled.span`
   font-size: 3.5vw;
   font-weight: bold;
   
   @media(min-width: 768px){
      font-size: 1vw;
   }
`

export const TipoMentor = styled.span`
   font-size: 2.5vw;
   
   @media(min-width:768px){
      font-size: 0.8vw;
   }
`

export const AvaliacaoMedia = styled.span`
   font-size: 2.5vw;
   font-weight: bold;
   
   @media(min-width: 768px){
      font-size: 1.5vw
   }
`

export const Estrela = styled.img`
   height: 100%;
   width: 20%;

   @media (min-width: 768px){
      width: 16%;
   }
`

export const QuantidadeAvaliacao = styled.span`
   font-size: 2vw;
   
   @media(min-width: 768px){
      font-size: 0.7vw
   }
`

export const OpcoesGrupo = styled.div`

   @media(min-width:768px){
      width: 100%;
      justify-content: center;
      display: flex;
      gap: 8%;
   }
`

export const BotaoSair = styled.div`

   background-color: #FF3939;
   border: 3px solid #A30909;
   box-shadow: 0 0.5vh 0 0 #A30909;
   border-radius: 8px;
   align-items: center;
   justify-content: center;
   display: flex;
   cursor: pointer;

   @media (min-width: 768px){
      width: 45%;
      height: 100%;
      padding: 2% 2% 2% 2%;
   }
`

export const Sair = styled.span`

   text-align: center;
   color: white;
   @media(min-width: 768px){
      font-size: 1vw;
   }
`
