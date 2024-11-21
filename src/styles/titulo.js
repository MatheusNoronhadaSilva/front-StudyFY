import styled from 'styled-components';

export const Titulo = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   min-height: 7%;
   justify-content: center;
   align-items: center;
   margin-top: 10%;

   @media(min-width: 768px){
      span{
         font-size: 2vw;
      }
   }
`

export default Titulo