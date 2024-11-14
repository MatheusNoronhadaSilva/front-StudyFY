import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Fechar = styled(FontAwesomeIcon)`
    color: black;
    height: 100%;
    width: 4%;
`;

export const CampoVisualizarGruposIncluidos = styled.div`
   @media(min-width:768px){
      flex-grow: 1;
      max-width: 29%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-left: ${({ showBorder }) => (showBorder ? '1px solid #d9d9d9' : 'none')}; // Borda condicional
    }
`;

export const GrupoMentoria = styled.div`
   background-color: #fee101;
   border-radius: 8px;
   box-shadow: 0 0.5vh 0 0 #E9CE03;
   border: solid 1px #E9CE03;
   position: relative;
   height: 10%;
   width: 70%;
   padding-left: 20%;
   display: flex;
   align-items: center;
`

export const IconeGrupo = styled.img`
   position: absolute;
   height: 150%;
   left: -5%;
   top: -28%;`

   export const IconeMateria = styled.img`
   @media(min-width: 768px){
      height: 100%;
      width: 100%;
    }
`

export const FotoMateriaDiv = styled.div`
   height: 60%;
   width: 12%;
   background-color: white;
   border-radius: 360px;
   border: solid 1px black;
   padding: 2% 2%;
   position: absolute;
   left: 4%;
   top: 85%;
`
export const NomeGrupo = styled.span`
   font-size: 1vw;
   font-weight: bold;
`

export const VisualizacaoGrupos = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-block: 8vh;
   gap: 12vh;
`


export const VerGruposDiv = styled.div`
   display: flex;
   width: 80%;
   flex-direction: column;
   align-items: center;
   height: 30%;
   justify-content: center;
`

export const Descricao = styled.span`
   font-size: 1.3vw;
   text-align: center;
   width: 80%;
`

export const DescricaoVisualizacao = styled.span`
   font-size: 1vw;
   font-weight: bold;
`

export const VerGrupo = styled.div`
   background-color: #fee101;
   border: solid 1px #e9ce03;
   border-radius: 12px;
   box-shadow: 0 0.5vh 0 0 #e9ce03;
   width: 50%;
   height: 30%;
   align-items: center;
   display: flex;
   justify-content: center;
   font-weight: bold;
`