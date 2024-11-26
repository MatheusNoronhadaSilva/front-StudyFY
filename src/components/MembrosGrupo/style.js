import styled from "styled-components";

export const AbaMembros = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   overflow-y: auto;
`

export const Area = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
width: 100%;
overflow-y: auto;
position: relative;

@media(min-width: 768px){
   max-height: 100%;
}
`

export const SemMembros = styled.span`
   position: absolute;
   font-size: 2vw;
   width: 30%;
   text-align: center;
   place-self: center;
   right: 35%;
   top: 45%;
`

export const Membro = styled.div`
   display: flex;
   width: 100%;
   min-height: 17%;
   background: linear-gradient(to bottom, #ffffff 50%, #f9f9f9); // Branco ocupa 70% do gradiente
   border-radius: 2px;

   &:hover {
      background-color: #d9d9d9 !important; // Cor ao passar o mouse
   }

   @media(min-width: 768px){
      min-height: 35%;
   }
`;



export const AreaImg = styled.div`
   height: 100%;
   width: 18%;
   align-items: center;
   justify-content: center;
   display: flex;

   @media (min-width: 768px){
      width: 9%;
   }
`

export const FtPerfil = styled.img`
   height: 80%;
   width: 80%;
`

export const Apresentacao = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 45%;
   max-width: 45%;
   justify-content: space-evenly;
`

export const NomeMembro = styled.span`
   font-size: 3.5vw;
   font-weight: bold;

   @media(min-width: 768px){
      font-size: 1.1vw;
   }
`

export const EstudandoDiv = styled.div`
   display: flex;
   flex-direction: column;
`

export const Estudando = styled.span`
   font-weight: bold;
   font-size: 2.5vw;
   
   @media (min-width: 768px){
      font-size: 1vw;
   }
`

export const Materias = styled.span`
   font-size: 2vw;

   @media(min-width: 768px){
      font-size: 0.7vw;
   }
`

export const InfoDiv = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   align-items: start;
   justify-content: center;
   width: 37%;
`

export const Info = styled.div`
   font-size: 2.5vw;

   @media(min-width:768px){
      font-size: 0.8vw;
   }
`
