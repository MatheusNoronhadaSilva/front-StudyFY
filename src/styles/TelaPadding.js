import styled from 'styled-components';

export const TelaPadding = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
   padding-inline: 7vw;
   overflow-y: auto;

   @media(min-width: 768px){
      padding-inline: 20%;
   }
`

export default TelaPadding;