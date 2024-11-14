// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'
import DuvidaAba from '../assets/duvida.png'
import ApresentacaoAba from '../styles/apresentacaoAba';
import InfoRank from '../components/InfoRank'
import TelaPadding from '../styles/TelaPadding';
import RankAlunos from '../components/RankAlunos';
import Titulo from '../styles/titulo';
import FaixaAmarela from '../styles/faixaAmarela';
import RankMaisAjudados from '../components/RankMaisAjudados';
import { useMediaQuery } from '@mui/material';


const Rank = () => {

    const isDesktop = useMediaQuery('(min-width: 768px)');


    return (
        <Container style={{ backgroundColor: 'white', alignItems: 'center'}}>
            {isDesktop ? (
                <>
                    <Navegacao></Navegacao>

                    <TelaPadding>
                        <ApresentacaoAba>
                            <span>Rank</span>
                            <img src={DuvidaAba}></img>
                        </ApresentacaoAba>

                        <Titulo>
                            <span>Seu Rank</span>
                            <FaixaAmarela />
                        </Titulo>

                        <InfoRank />
                        <RankAlunos />

                        <Titulo>
                            <span style={{ fontWeight: 'bold', fontSize: '7vw' }}>Rank de mentores</span>
                            <FaixaAmarela />

                            <span>Mentores que mais ajudam</span>
                        </Titulo>

                        <RankMaisAjudados />

                        <Titulo>
                            <span>Mentores com melhores avaliações</span>
                        </Titulo>
                        
                        <RankMaisAjudados />
                    </TelaPadding>
                </>
            ) : (
                <>
                <TelaPadding>
                    <ApresentacaoAba>
                        <span>Rank</span>
                        <img src={DuvidaAba}></img>
                    </ApresentacaoAba>
                    <Titulo>
                        <span style={{ fontWeight: 'bold', fontSize: '7vw' }}>Seu Rank</span>
                        <FaixaAmarela />
                    </Titulo>
                    <InfoRank />
                    <RankAlunos />
                    <Titulo>
                        <span style={{ fontWeight: 'bold', fontSize: '7vw' }}>Rank de mentores</span>
                        <FaixaAmarela />

                        <span>Mentores que mais ajudam</span>
                    </Titulo>
                    <RankMaisAjudados />

                    <Titulo>
                        <span>Mentores com melhores avaliações</span>
                    </Titulo>
                    <RankMaisAjudados />
                </TelaPadding>
                <Navegacao></Navegacao>

            </>
        )}
        </Container>
    );
};

export default Rank;
