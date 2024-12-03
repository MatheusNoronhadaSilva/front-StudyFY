import styled from "styled-components";

export const CampoAlternativas = styled.div`
  display: grid;
  width: 100%;
  height: 30%;
  grid-template-columns: 1fr 1fr; /* Duas colunas */
  gap: 5% 2%; /* Espaçamento entre os itens */
`;

export const ItemColuna = styled.div`
  padding: 5%;
  border: 2px solid #d9d9d9;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: ${({ isSelected }) => (isSelected ? "solid 1px #E9CE03" : "solid 1px #d9d9d9")};
  background-color: ${({ isSelected }) => (isSelected ? "#fee1015A" : "white")};
  box-shadow: ${({ isSelected }) => (isSelected ? "0 3px 0px #E9CE03" : "0 3px 0px #d9d9d9")};

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? "#fee1015A" : "#eeeeee")};
  }
`;


export const CampoTexto = styled.span`
  margin-right: 10px;
  font-size: 1vw;
`;
