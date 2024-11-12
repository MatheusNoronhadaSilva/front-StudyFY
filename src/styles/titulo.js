import styled from 'styled-components';

export const Titulo = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   min-height: 7%;
   justify-content: center;
   align-items: center;
   margin-top: 10%;
   font-weight: bold; 
   font-size: 7vw;
   
   @media(min-width:768px){
      font-size: 3vw;
   }
`

export default Titulo