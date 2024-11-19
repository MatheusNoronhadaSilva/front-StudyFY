import styled from "styled-components";

export const CampoEmblemasPerfil = styled.div`
   min-height: 25%;
   width: 100%;
   display: flex;
   flex-direction: column;
`

export const TituloCampo = styled.span`
   font-size: 1.2vw;
   font-weight: bold;
`

export const VerTodos = styled.span`
   font-size: 1vw;
   cursor: pointer;
`

export const Emblemas = styled.div`
   width: 100%;
   flex-grow: 1;
   display: flex;
   gap: 3%;
   padding-top: 2%;
`

export const Emblema = styled.div`
   height: 100%;
   width: 20%;
   border-radius: 8px;
   background-color: red;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

export const IconeEmblema = styled.img`
   width: 50%;
   height: 60%;
`

export const NivelEmblema = styled.span`
   font-size: 1vw;
   font-weight: bold;
   color: white;
`