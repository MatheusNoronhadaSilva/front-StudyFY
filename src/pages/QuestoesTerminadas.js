// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import { useMediaQuery } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import mascote from '../assets/mascote.png'
import Alvo from '../assets/Alvo.png'
import pontuacao from '../assets/Pontuação.png'

export const TelaHeader = styled.div`
   height: 10%;
   width: 100%;
   background-color: #fee101;
`

export const CampoResultado = styled.div`
   height: 100%;
   width: 60%;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   padding-block: 3%;
`

export const IconeMascote = styled.img`
   height: 60%;
   width: 15%;
`

export const Concluiu = styled.div`
   flex: 0.5;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 15%;
`

export const AtividadeConcluida = styled.span`
   color: #fee101;
   font-size: 3rem;
   font-weight: bold;
`

export const Confira = styled.span`
   color: 000000;
   font-size: 1.3rem;
`

export const Resultado = styled.div`
   flex: 3;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 70%;
   gap: 5%;
  `

export const AreaMascote = styled.div`
  flex: 1 1 10%;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5%;
  align-items: center;
`

export const Detalhamento = styled.div`
  font-size: 1.3rem;
  width: 70%;
  text-align: center;
  font-family: 'poppins', sans-serif;
`

export const Estatisticas = styled.div`
   flex: 1;
   display: flex;
   justify-content: space-evenly;
`

export const Quadro = styled.div`
   flex: 0.4;
   height: 70%;
   display: flex;
   flex-direction: column;
   border: solid 2px #E9CE03;
   border-radius: 8px;
   box-shadow: 0px 3px 0px #E9CE03;

`

export const TituloQuadro = styled.div`
   width: 100%;
   height: 20%;
   display: flex;
   align-items: center;
   justify-content: center;
   color: rgba(0, 0, 0, 0.6); /* Cor do texto */
   font-weight: bold;
   font-size: 1.2rem;
   background-color: #E9CE03;
`;


export const DadosQuadro = styled.div`
   flex: 1;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 5%;
`

export const IconeDados = styled.img`
   height: 70%;
   width: 23%;
`

export const Dados = styled.span`
   font-size: 2rem;
   font-weight: bold;
`

export const BotaoTelaAtividades = styled.div`
   border: solid 4px #d9d9d9;
   box-shadow: 0px 4px 0px #d9d9d9;
   display: flex;
   align-items: center;
   justify-content: center;
   flex: 0.4;
   width: 30%;
   font-size: 1.5rem;
   font-weight: bold;
   border-radius: 8px;
   cursor: pointer;

   &:hover {
      background-color: #eeeeee;
    }
`

const QuestoesTerminadas = () => {

    const isDesktop = useMediaQuery('(min-width: 768px)');

    const navigate = useNavigate()

    const location = useLocation();
    const geralAtividade = location.state.geralAtividade || {};
    const corAtual = location.state.corAtual || {}
    console.log(geralAtividade);
    console.log(corAtual);
    

    const questoesAcertadas = geralAtividade.questoesAcertadas
    const questoesErradas = geralAtividade.questoesErradas

    function CalcularPorcentagem() {

      const total = questoesAcertadas + questoesErradas

      if (total === 0) {
        return 0;
      }

      const porcentagem = (questoesAcertadas / total) * 100
      return porcentagem.toFixed(0);
    }

    console.log(questoesErradas);

    const voltarTelaAtividade = () => {

      navigate('/tela-atividades')
    }
    
  return (
    <>
       { isDesktop ? (
        <Container style={{backgroundColor: 'white', flexDirection: 'column', alignItems: 'center'}}>
            <CampoResultado>
                <Concluiu>
                  <AtividadeConcluida>Atividade Concluída</AtividadeConcluida>
                  <Confira>Confira seu resultado</Confira>
                </Concluiu>
                <Resultado>
                  <AreaMascote>
                    <IconeMascote src={mascote}/>
                    { questoesErradas === 0 ? (
                      <Detalhamento>Você acertou todas as questões</Detalhamento>
                    ) : (
                      <Detalhamento>Acerte todas as questões para ganhar pontos e passar de atividade</Detalhamento>
                    )}
                  </AreaMascote>
                  <Estatisticas>
                    <Quadro>
                      <TituloQuadro>Acertos / erros</TituloQuadro>
                      <DadosQuadro>
                        <IconeDados src={Alvo} />
                        <Dados>{CalcularPorcentagem()}%</Dados>
                      </DadosQuadro>
                    </Quadro>
                    <Quadro>
                      <TituloQuadro>Pontuação</TituloQuadro>
                      <DadosQuadro>
                        <IconeDados src={pontuacao} />
                        { questoesErradas !== 0 ? (
                          <Dados>0 Pts</Dados>
                        ) : (
                          <Dados>15 Pts</Dados>
                        )}
                      </DadosQuadro>
                    </Quadro>
                  </Estatisticas>
                </Resultado>
                <BotaoTelaAtividades onClick={() => voltarTelaAtividade()}>Continuar</BotaoTelaAtividades>
            </CampoResultado>
        </ Container>
      ) : (
        <>regergr</>
      )}
      {/* {isDesktop ? (
        // Renderizado para telas desktop
        <Container style={{ backgroundColor: 'white', flexDirection: 'column', alignItems: 'center' }}>
          {!loadingQuestoes && questoes.length > 0 && <CampoQuestao dadosQuestoes={questoes} />}
        </Container>
      ) : (
        // Renderizado para telas móveis/tablets
        <Container style={{ backgroundColor: 'white', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
        </Container>
      )} */}
    </>
  );
};

export default QuestoesTerminadas;
