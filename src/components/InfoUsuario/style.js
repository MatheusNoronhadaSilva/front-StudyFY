import styled from "styled-components";


export const CampoInfoUsuario = styled.div`
   width: 100%;
   min-height: 60%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`
export const CampoInfoPrincipal = styled.div`
   width: 100%;
   height: 55%;
   display: flex;
   flex-direction: column;
   align-items: center;
   position: relative;
`

export const IconePerfil = styled.img`
   width: 23%;
   height: 60%;
   z-index: 1;
`

export const NomeUsuario = styled.span`
   font-size: 2vw;
   font-weight: bold;
   z-index: 1;
`

export const DataEtrada = styled.span`
   font-size: 1vw;
   font-weight: bold;
   z-index: 1;
`

export const FundoAmarelo = styled.div`
   height: 70%;
   width: 100%;
   z-index: 0;
   background-color: #fee101;
   position: absolute;
   bottom: 0;
   border-radius: 8px;
`

export const CampoInfoAdicionais = styled.div`
   width: 100%;
   height: 38%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
`

export const InfoAdicionaisP1 = styled.div`
   height: 100%;
   width: 60%;
   display: flex; 
   flex-direction: column;
   justify-content: space-evenly;
`

export const InfoDiv = styled.div`
   display: flex; 
   flex-direction: column;
`

export const InfoTitulo = styled.span`
   font-size: 1vw;
   font-weight: bold;
`

export const Info = styled.span`
   font-size: 0.8vw;
`

export const InfoAdicionaisP2 = styled.div`
   height: 100%;
   width: 30%;
   display: flex; 
   flex-direction: column;
   align-items: end;
   gap: 10%;
`

export const VerGrupoMentoria = styled.div`
   height: 20%;
   width: 80%;
   border-radius: 8px;
   font-size: 1vw;
   font-weight: bold;
   background-color: #fee101;
   display: flex;
   align-items: center;
   justify-content: center;
`

export const Identificacao = styled.span`
   font-size: 1vw;
   font-weight: bold;`