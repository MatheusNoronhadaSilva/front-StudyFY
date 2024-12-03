import styled from 'styled-components';

// Contêiner principal
export const AppContainer = styled.div`
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

// Quadrado fixo (Série + Assunto)
export const FixedBox = styled.div`
  min-height: 10%;
  max-height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.7vw;
  font-weight: bold;
  padding: 0.5% 5%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CampoAtividades = styled.div`
   flex-grow: 1;
   width: 100%;
   overflow-y: auto;
`

export const Topic = styled.div`
  font-size: 1.5vw;
  color: #333;
  margin-top: 5%;
  width: 30%;
  place-self: center;
  border-radius: 12px;
  padding: 1% 1%;
  min-height: 6vh;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Sub-assunto
export const SubTopicDiv = styled.div`
  background-color: #fff;
  color: #333;
  margin: 15px 0;
  width: 60%;
  place-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3%; 
`;

// Contêiner de quadradinhos de atividades (zig-zag)
export const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-block: 5%;
  width: 100%;
`;

export const CampoQuadradinhos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: ${(props) => (props.zigzag ? '10%' : '-10%')};
  margin-bottom: 15px;
`;



const hexToRgba = (hex, alpha = 0.3) => {
  
    const match = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
    if (!match) return hex;
    const [_, r, g, b] = match;
    return `rgba(${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}, ${alpha})`;
  };
  
  // Função para escurecer uma cor (tornar mais escura)
  const darkenHex = (hex, amount = 0.2) => {
    const match = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
    if (!match) return hex;
  
    let [_, r, g, b] = match;
    r = Math.max(0, parseInt(r, 16) - amount * 255).toString(16).padStart(2, '0');
    g = Math.max(0, parseInt(g, 16) - amount * 255).toString(16).padStart(2, '0');
    b = Math.max(0, parseInt(b, 16) - amount * 255).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
  };
  
  // Quadradinho de atividade
  export const ActivityCard = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
  
    // Background color com a cor original
    background-color: ${(props) => hexToRgba(props.topicColor, 1) || '#ffffff'};
  
    // Borda e box-shadow mais escuros
    border: solid 3px ${(props) => darkenHex(props.topicColor, 0.2) || '#d9d9d9'};
    box-shadow: 0 0.5vh 0 0 ${(props) => darkenHex(props.topicColor, 0.2) || '#d9d9d9'};
  
    &:hover {
      transform: scale(1.1);
    }
  `;
  

// Menu suspenso da atividade
export const ActivityDetails = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
  position: absolute;
  top: 70%;
  left: -140%;
  z-index: 100;
  display: ${(props) => (props.visible ? 'block' : 'none')};
`;

// Botão para começar
export const StartButton = styled.button`
  background-color: #6a1b9a;
  color: white;
  padding: 10px 20px;
  border-radius: 30px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #9c4e97;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;

export const Linha = styled.div`
   flex-grow: 1;
   min-height: 0.1vh;
   max-height: 0.1vh;
   background-color: #afafaf;
`

export const SubTopic = styled.span`
   font-size: 1vw;
   width: auto;
   text-align: center;
   color: #afafaf;
   font-weight: bold;
`

export const TopicoDiv = styled.div`
   width: 100%;
   height: auto;
   margin-bottom: 3%;
`

export const campoSubAssunto = styled.div`
   width: 100%;
`

export const Loading = styled.div`
   position: absolute;
   background-color: rgba(0,0,0, 0.5)
   width: 100%;
   height: 100%;
`

export const MateriaDiv = styled.div`
   height: 100%;
   background-color: white;
   border-radius: 8px;
   width: 20%;
   display: flex;
   gap: 10%;
   align-items:center;
`

export const IconeMateriaDiv = styled.div`
   display: flex;
   flex-direction: column;
   height: 90%;
   width: 25%;
   padding: 4%;
   background-color: white;
   border-radius: 360px;
`

export const IconeMateria = styled.img`
   height: 100%;
   width: 100%;
  `

export const NomeMateria = styled.span`
   font-size: 1.5vw;
`

export const DescMateria = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   height: 100%;
   flex-grow: 1;
   align-items: center;
  `

export const TrocarMateria = styled.span`
   font-size: 0.8vw;
   cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
//--------------------
//Swal personalizado
//--------------------



export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 40vh;
`

export const CardMateria = styled.div`
  flex: 0.25 0 10%;
  height: 80%;
  display: flex;
  flex-direction: column;
  padding-inline: 5%;
  box-shadow: 0px 3px 0px #d9d9d9;
  border: solid 2px #d9d9d9;
  border-radius: 8px;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
`

export const CardIconeMateria = styled.img`
  height: 40%;
   width: 65%;
   background-color: white;
`

export const CardMateriaNome = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
`

export const SerieAtual = styled.div`
  display: flex;
  font-size: 1.5rem;
`

export const InfoSerie = styled.div`
   height: 30%;
   width: 90%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;`


export const SeriesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
    height: 35vh;
`;

export const SeriesCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 3%;
    width: 30%;
    height: 100%;
    border: 3px solid ${({ selected }) => (selected ? '#fee101' : '#d9d9d9')};
    background-color: ${({ locked }) => (locked ? '#f0f0f0' : '#ffffff')};
    box-shadow: ${({ selected }) => (selected ? '0px 4px 0px #fee101' : 'none')};
    pointer-events: ${({ locked }) => (locked ? 'none' : 'auto')};
    opacity: ${({ locked }) => (locked ? '0.6' : '1')};
    transition: all 0.3s ease-in-out;
    border-radius: 10px;
`;

export const SerieItem = styled.div`
    font-size: 1rem;
    font-weight: bold;
    color: ${({ locked }) => (locked ? '#cccccc' : '#000000')};
    text-decoration: ${({ locked }) => (locked ? 'line-through' : 'none')};
    cursor: ${({ locked }) => (locked ? 'not-allowed' : 'pointer')};

    &:hover {
        color: ${({ locked }) => (locked ? '#cccccc' : '#007BFF')};
    }

    ${({ selected }) =>
        selected &&
        `
        color: #fee101;
        font-weight: 900;
    `}
`;

export const IconeSerie = styled.img`
width: 40%;
height: 70%;
`

export const SemAtividade = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   span{
    width: 50%;
    text-align: center;
    font-size: 2rem;
   }
  `

export const Ensino = styled.span`
`