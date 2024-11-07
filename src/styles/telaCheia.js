import styled from 'styled-components';

const TelaCheia = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0; /* Cor de fundo como exemplo */
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    background-color: #ffffff;
    flex-direction: row;
    overflow: hidden;
  }
`;

export default TelaCheia;