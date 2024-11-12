// style.js
import styled from "styled-components";

export const CampoCriar = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1.5vw;
  margin-bottom: 4%;
  text-align: center;
`;

export const Avatar = styled.div`
  width: 12%;
  min-height: 20%;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4%;
`;

export const AvatarIcon = styled.div`
  font-size: 2vw;
  color: #aaa;
`;

export const MenuSuspenso = styled.div`
  position: absolute;
  background-color: white;
  box-shadow: 0 0 1vw rgba(0, 0, 0, 0.1);
  border-radius: 0.8vw;
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  width: 20%;
  height: 20%;
  top: 20%;
`;

export const ImagemItem = styled.div`
  width: 20%;
  height: 50%;
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 50%;
  gap: 2%;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  gap: 5%;
`;

export const imagemSelecionada = styled.img`
   height: 100%;
   width: 100%;
`

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  gap: 5%;
`;

export const Label = styled.label`
  font-size: 1vw;
  margin-bottom: 2%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 1.5%;
  font-size: 1.2vw;
  border-radius: 0.5vw;
  border: 1px solid #ccc;
`;

export const Textarea = styled.textarea`
  padding: 1.5%;
  font-size: 1.2vw;
  border-radius: 0.5vw;
  border: 1px solid #ccc;
  resize: none;
  height: 15vh;
`;

export const Select = styled.select`
  padding: 1.5%;
  font-size: 1vw;
  border-radius: 0.5vw;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  margin-top: 4%;
  padding: 2% 5%;
  font-size: 1.5vw;
  color: black;
  background-color: #fee101;
  border: solid 3px #E9CE03;
  box-shadow: 0 0.5vh 0 0 #E9CE03;
  border: none;
  border-radius: 0.5vw;
  cursor: pointer;
`;
