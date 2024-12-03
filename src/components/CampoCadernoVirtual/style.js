import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const BlocoDeNotas = styled.div`

    height: 70%;
    max-width: 35vw;
    .ql-container {
        height: 30vh; /* Define a altura do editor */
    }
    .ql-editor {
        font-size: 0.9em; /* Ajusta o tamanho da fonte do conteúdo */
        line-height: 1.5; /* Define o espaçamento entre linhas */
        padding: 3%; /* Define o espaçamento interno */
    }
    .ql-toolbar {
        height: 7vh;
        width: 100%;
    }
`;

export const Container = styled.div`
  font-family: 'Arial', sans-serif;
  width: 100%;
  height: 100%;
  padding-inline: 10%;
  padding-block: 2%;
`;

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

export const Main = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: 70%;
`;

export const NotesList = styled.div`
  flex: 1;
  width:20%;
  background: #fee101;
  border-radius: 10px;
  padding: 2%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;

  h3{
  margin-bottom: 3%;
  }
`;

export const NotePreview = styled.div`
  position: relative; /* Necessário para posicionar o menu */
  border: 1px solid #ddd;
  padding: 3%;
  margin-bottom: 2%;
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f8ff;
  }

  p {
    margin: 0;
    font-size: 0.9em;
    color: #555;
    white-space: nowrap; /* Evita quebra de texto */
    overflow: hidden; /* Oculta o texto excedente */
    text-overflow: ellipsis; /* Adiciona reticências */

        * {
      font-size: inherit; /* Força todos os elementos internos a usar o tamanho do parágrafo */
      line-height: inherit;
      color: inherit;
    }
  }

  span {
    display: block;
    font-size: 0.8em;
    color: #aaa;
    margin-top: 2%;
  }
`;



export const NoteEditor = styled.div`
  flex: 2;
  height: 100%;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 2%;
    font-size: 1.5em;
    color: #444;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 3%;
`;

export const Button = styled.button`
  padding: 2% 4%;
  background-color: ${(props) => props.bg || '#007bff'};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;

  &:hover {
    background-color: ${(props) => props.hover || '#0056b3'};
  }
`;

export const DeleteButton = styled(FontAwesomeIcon)`
   height: 100%;
   width: 5%;
`