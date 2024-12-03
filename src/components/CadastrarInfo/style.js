import styled from "styled-components";

export const CampoCadastrar = styled.div`
   height: 100%;
   width: 100%;
   justify-content: left;
   display: flex;
   flex-direction: column;
   gap: 3vh;

   @media (min-width: 768px) {
      gap: 4vh;
   }
`

export const Descricao = styled.span`
   font-size: 5.5vw;
   display: flex;
   flex-direction: column;

   @media (min-width: 768px) {
      font-size: 1.3vw;
   }
`;

export const CampoPreencher = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   height: 45%;
   gap: 1vh;

   @media (min-width: 768px) {
      height: 50%;
      padding-top: 5%;

   }
`;

export const Campo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-inline: 3vw;
  width: 100%;
  height: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  position: relative; /* Para que o label posicionado absoluto funcione */
  border-color: ${props => (props.erro ? 'red' : '#d9d9d9')}; /* Borda vermelha se houver erro */

  &:focus-within {
    border-color: #FEE101; /* Cor desejada quando o input estiver focado */
  }

  @media (min-width: 768px) {
     height: 22%;
   }
`;

export const EsqueceuSenha = styled.span`
   font-size: 2vw;

   @media (min-width: 768px) {
      font-size: 1vw;
   }
`;

export const EntradaInfo = styled.div`
   position: relative;
   width: 100%;
   height: 100%;
   padding-left: 5%;

   @media (min-width: 768px) {
      padding-left: 5%;
   }
`;

export const Label = styled.label`
   position: absolute;
   left: 5%;
   top: 25%;
   font-size: 4vw;
   color: #d9d9d9;
   transition: all 0.3s ease;
   pointer-events: none; /* Para que o label não interfira nos cliques do input */

   @media (min-width: 768px) {
      font-size: 1.3vw;
   }
`;

export const Input = styled.input`
   font-size: 3vw;
   border: none;
   outline: none;
   background-color: transparent;
   width: 100%;
   height: 100%;
   box-sizing: border-box;

   @media (min-width: 768px) {
      font-size: 1vw;
   }

   &:focus + ${Label},
   &:valid + ${Label} {
      top: -20%;
      left: 0%;
      font-size: 3vw;
      color: #FEE101;
      background: white;
      padding: 0 2%;
      z-index: 1; /* Para que o label fique acima do input */

      @media (min-width: 768px) {
         font-size: 1vw;
      }
   }
`;

export const CadastroGoogle = styled.div`
   display: flex;
   align-items: center;
   flex-direction: row;
   gap: 4%;
`

export const DescricaoGoogle = styled.span`
   font-size: 3.5vw;

   @media (min-width: 768px) {
      font-size: 1vw;
   }
`

export const ImgGoogle = styled.img`
   width: 6vw; 
   height: 3vh;

   @media (min-width: 768px) {
      height: 3vh;
      width: 1.5vw;
   }
`

export const CampoBotao = styled.div`
   width: 100%
`

export const Botao = styled.div`
   background-color: #fee101;
   margin-left: auto;
   width: 50%;
   height: 75%;
   border-radius: 12px;
   display: flex;
   font-weight: bold;
   align-items: center;
   justify-content: center;
`

export const EnvioFormuario = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   justify-content: flex-end;
   gap: 1vh;
   height: 20%;
   margin-top: auto;
`

export const SemConta = styled.div`
  display: flex;
  gap: 3%;
  width: 100%;
  justify-content: right;
  font-size: 3vw; /* Define o tamanho da fonte para todo o texto na div */

  @media (min-width: 768px) {
     font-size: 1vw;
   }
`;

export const Erro = styled.span`
   font-size: 3.5vw;
   color: red;

   @media (min-width: 768px) {
      font-size: 1vw;
   }
`


