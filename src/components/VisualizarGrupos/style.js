import styled from "styled-components";

export const CampoVisualizarGrupos = styled.div`

   @media(min-width:768px){
      width: 55%;
      height: 100%;
      padding-block: 3vh;
      padding-top: 4%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
`

export const Descricao = styled.div`
   
   @media(min-width:768px){
      font-size: 1.5vw;
      width: 70%;
      text-align: center;
      place-self: center;
      padding-bottom: 4%;
   };
   `

export const Pesquisa = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   width: 100%;
   height: 20%;
   max-height: 20%;

   @media(min-width: 768px){
      max-height: none;
      height: 7%;
      width: 70%;
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

   @media(min-width:768px){
      height: 100%;
      gap: 1vw
    }
`

export const InputPesquisa = styled.input`
   border: none;
   background-color: transparent;
   width: 100%;
   height: 100%;
   font-size: 1.2vw;
   outline: none; // Remove a borda de foco preta
`;


export const Lupa = styled.img`
   height: 60%;
   width: 10%;

   @media(min-width: 768px){
      height: 60%;
      width: 7%;
   }
`

export const Filtro = styled.img` 
   
   @media(min-width:768px){
      height: 50%;
      width: 4%;
    }
`

export const GruposOrganizados = styled.div`
  flex-grow: 1;
  width: 80%;
  overflow-y: auto;
  display: grid;
  padding-top: 5%;
  gap: 5% 0%;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: minmax(15%, auto); /* Faz o grid adaptar as linhas */
`;

export const GrupoMentoria = styled.div`
  border: solid 1px #d9d9d9;
  width: 90%;
  min-height: ${({ expanded }) => (expanded ? '22vh' : '10vh')}; // Expande ao clicar
  max-height: ${({ expanded }) => (expanded ? '10vh' : '12vh')};
  border-radius: 8px;
  box-shadow: 0 0.5vh 0 0 #d9d9d9;
  padding-inline: 0.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  cursor: pointer;
  transition: max-height 0.3s ease, min-height 0.3s ease;

  ${({ expanded }) =>
    expanded &&
    `
    border: 1px solid #E9CE03;
    box-shadow: 0 0.5vh 0 0 #e9ce03;
    z-index: 100;
    flex-direction: column;
  `}
`;

export const ExpandedInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;


export const InfoDiv = styled.div`
   display: flex;
   flex-direction: column;
   gap: 5%;
   height: 100%;
   width: 20%;
   justify-content: center;
   align-items: center;
`

export const Icone = styled.img`
   height: 50%;
   width: 70%;
`

export const IconeMembros = styled.img`
   height: 50%;
   width: 60%;
`

export const IconeMentoria = styled.img`
   height: 40%;
   width: 30%;
`

export const ExpandendSpan = styled.span`
   font-size: 1vw;
   font-weight: bold;
`

export const VerGrupoDiv = styled.div`
   width: 40%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;
`

export const VerGrupo = styled.span`
   font-size: 0.7vw;
   font-weight: bold;
`



export const InfoGrupo = styled.div`

   @media(min-width:768px){
      width: 70%;
      height: 100%;
      display: flex; 
      align-items: center;
      gap: 1vw;
    }
`

export const FotoGrupo = styled.img`
   @media(min-width: 768px){
      height: 70%;
      max-height: 12vh;
      min-width: 28%;
    }`

export const NomeGrupo = styled.span`
   @media(min-width:768px){
      font-size: 1vw;
    }`

export const MateriaGrupo = styled.div`
   @media(min-width: 768px){
      height: 100%;
      width: 20%;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }`

export const NomeMateria = styled.span`
   @media(min-width: 768px){
      font-size: 0.8vw;
    }`

export const IconeMateria = styled.img`
   @media(min-width: 768px){
      height: 100%;
      width: 100%;
    }
`

export const FotoMateriaDiv = styled.div`
   height: 60%;
   max-height: 6vh;
   width: 55%;
   background-color: white;
   border-radius: 360px;
   border: solid 1px black;
   padding: 10% 10%;
`

