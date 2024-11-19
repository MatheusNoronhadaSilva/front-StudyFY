import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Campo = styled.div`
   flex-grow: 1;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   padding: 5% 25%;
   overflow-y: auto;
   gap: 5%;
   position: relative;
`

export const Configuracao = styled(FontAwesomeIcon)`
   position: absolute;
   height: 2.5%;
   width: 2.5%;
   top: 5%;
   right: 29.4%;
   cursor: pointer
`