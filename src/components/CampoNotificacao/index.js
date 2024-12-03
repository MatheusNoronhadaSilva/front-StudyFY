import * as C from './style';
import React from 'react';
import bronzeIII from '../../assets/Bronze III.png'
import bronzeII from '../../assets/Bronze II.png'
import mascote from '../../assets/mascote.png'
import capaHistoria from '../../assets/Ellipse (1).png'
import { useMediaQuery } from '@mui/material';

const CampoNotificacao = () => {

    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <C.DivNotificacao>
            <C.Header>
                <h1>Notificação</h1>
                <p>Fique por dentro do que esta acontecendo</p>
            </C.Header>
            <C.CartoesDiv>
                <C.Cartao>
                    <C.CabecalhoCartao>
                        <C.TextoCabecalho>Você subiu de rank!</C.TextoCabecalho>
                        <C.Indicador />
                    </C.CabecalhoCartao>
                    <C.CorpoCartao>
                        <C.TextoDiv>
                            <C.TextoCorpo>Você terminou a temporada com 420pts. <br /> Terminou em #1 lugar</C.TextoCorpo>
                            <C.TextoCorpo></C.TextoCorpo>
                            <C.TextoCorpo>22/08/2024</C.TextoCorpo>
                        </C.TextoDiv>
                        <C.DivImagens>
                            <C.Imagem src={bronzeIII} />
                            <C.Imagem src={bronzeII} />
                        </C.DivImagens>
                    </C.CorpoCartao>
                </C.Cartao>
                <C.Cartao>
                    <C.CabecalhoCartao>
                        <C.TextoCabecalho>Você subiu de rank!</C.TextoCabecalho>
                        <C.Indicador />
                    </C.CabecalhoCartao>
                    <C.CorpoCartao>
                        <C.TextoDiv>
                            <C.TextoCorpo>Você terminou a temporada com 420pts. <br /> Terminou em #1 lugar</C.TextoCorpo>
                            <C.TextoCorpo></C.TextoCorpo>
                            <C.TextoCorpo>22/08/2024</C.TextoCorpo>
                        </C.TextoDiv>
                        <C.DivImagens>
                            <C.Imagem src={bronzeIII} />
                            <C.Imagem src={bronzeII} />
                        </C.DivImagens>
                    </C.CorpoCartao>
                </C.Cartao>
                <C.Cartao>
                    <C.CabecalhoCartao>
                        <C.TextoCabecalho>Você subiu de rank!</C.TextoCabecalho>
                        <C.Indicador />
                    </C.CabecalhoCartao>
                    <C.CorpoCartao>
                        <C.TextoDiv>
                            <C.TextoCorpo>Você terminou a temporada com 420pts. <br /> Terminou em #1 lugar</C.TextoCorpo>
                            <C.TextoCorpo></C.TextoCorpo>
                            <C.TextoCorpo>22/08/2024</C.TextoCorpo>
                        </C.TextoDiv>
                        <C.DivImagens>
                            <C.Imagem src={bronzeIII} />
                            <C.Imagem src={bronzeII} />
                        </C.DivImagens>
                    </C.CorpoCartao>
                </C.Cartao>
                <C.Cartao>
                    <C.CabecalhoCartao>
                        <C.TextoCabecalho>Você subiu de rank!</C.TextoCabecalho>
                        <C.Indicador />
                    </C.CabecalhoCartao>
                    <C.CorpoCartao>
                        <C.TextoDiv>
                            <C.TextoCorpo>Você terminou a temporada com 420pts. <br /> Terminou em #1 lugar</C.TextoCorpo>
                            <C.TextoCorpo></C.TextoCorpo>
                            <C.TextoCorpo>22/08/2024</C.TextoCorpo>
                        </C.TextoDiv>
                        <C.DivImagens>
                            <C.Imagem src={bronzeIII} />
                            <C.Imagem src={bronzeII} />
                        </C.DivImagens>
                    </C.CorpoCartao>
                </C.Cartao>
                <C.Cartao>
                    <C.CabecalhoCartao>
                        <C.TextoCabecalho>Você subiu de rank!</C.TextoCabecalho>
                        <C.Indicador />
                    </C.CabecalhoCartao>
                    <C.CorpoCartao>
                        <C.TextoDiv>
                            <C.TextoCorpo>Você terminou a temporada com 420pts. <br /> Terminou em #1 lugar</C.TextoCorpo>
                            <C.TextoCorpo></C.TextoCorpo>
                            <C.TextoCorpo>22/08/2024</C.TextoCorpo>
                        </C.TextoDiv>
                        <C.DivImagens>
                            <C.Imagem src={bronzeIII} />
                            <C.Imagem src={bronzeII} />
                        </C.DivImagens>
                    </C.CorpoCartao>
                </C.Cartao>
            </C.CartoesDiv>

            {/* Adicione os outros cartões aqui, como o exemplo acima */}
        </C.DivNotificacao>
    );
};

export default CampoNotificacao;
