import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Header = styled.header`
  text-align: center;
  margin-bottom: 6%;

  h1 {
    font-size: 2.5em;
    color: #444;
  }

  p {
    font-size: 1.1em;
    color: #666;
  }
`;

export const AjudaDiv = styled.div`
  padding-top: 5vh;
  width: 100%;
  flex-grow: 1;
  align-items: center;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Solicitacoes = styled.div`
   display: flex;
   flex-direction: column;
   height: 80%;
   width: 50%;
   gap: 5%;
`

export const NaoMentor = styled.div`
flex-grow: 1;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;

img{
   height: 30%;
   width: 35%;
}

span{
   font-size: 1.5rem;
   text-align: center;
   width: 65%;
   }
`

export const Solicitacao = styled.div`
   width: 100%;
   min-height: 20%;
   border-radius: 8px;
   box-shadow: 0px 4px 0px #d9d9d9;
   border: solid 2px #d9d9d9;
   padding: 1% 3%;
   display: flex;
`

export const NomeAluno = styled.span`
   font-size: 1.5rem;
   font-weight: bold;
`

export const InfoAlunoDiv = styled.div`
   height: 100%;
   width: 60%;
   display: flex;
   gap: 5%;
   align-items: center;

   img{
      height: 80%;
      width: 22%;
    }
`
export const InfoAluno = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   justify-content: space-evenly;

   div{
        display: flex;
        flex-direction: column;

        div{
            display: flex;
            flex-direction: row;
        }
    }
`

export const Serie = styled.span`
   flex-grow: 1;
   width: 100%;
   font-size: 0.8rem;
   
   span{
      font-weight: bold;
    }`

export const AtividadeAtual = styled.span`
   flex-grow: 1;
   width: 100%;
   font-size: 0.8rem;
   
   span{
      font-weight: bold;
    }`

export const Opcoes = styled.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 5%;
`

export const Opcao = styled(FontAwesomeIcon)`
   color: #fee101;
   height: 40%;
   width: 20%;
`

export const Materia = styled.span`
   width: 100%;
   font-size: 0.8rem;
   
   span{
      font-weight: bold;
    }`