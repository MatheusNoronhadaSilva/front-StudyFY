// src/pages/Entrada.js
import * as C from './style'; // Certifique-se de que as estilizações estão corretas.
import IconePerfil from '../../assets/Ellipse (1).png'; // Verifique o caminho para o ícone.
import React, { useRef } from 'react';
import BotoesConfiguracao from '../../styles/botoesconfiguracao';
import ToggleButton from '../BotaoToggleConfiguracao';

const CampoPerfilConfiguracao = () => {
    const emailRef = useRef(null); // Garante que o useRef está corretamente definido.
    const idMentor = localStorage.getItem("id_mentor");
    console.log(idMentor); // Confirme se este dado é recuperado corretamente.

    return (
        <C.Campo>
            <C.CampoInfoPrincipal>
                <C.FundoAmarelo />
                <C.IconePerfil src={IconePerfil} />
                <C.NomeUsuario> alololollo </C.NomeUsuario>
                <C.DataEntrada>10/10/1000</C.DataEntrada>
            </C.CampoInfoPrincipal>
            <C.Campos>
            <C.EntradaInfo>
                <C.Input type="text" id="email" name="email" ref={emailRef} required />
                <C.Label htmlFor="email">Email</C.Label>
            </C.EntradaInfo>
            <C.EntradaInfo>
                <C.Input type="text" id="email" name="email" ref={emailRef} required />
                <C.Label htmlFor="email">Email</C.Label>
            </C.EntradaInfo>
            <C.EntradaInfo>
                <C.Input type="text" id="email" name="email" ref={emailRef} required />
                <C.Label htmlFor="email">Email</C.Label>
            </C.EntradaInfo>
            </C.Campos>
            { idMentor != 0 ? (
                <BotoesConfiguracao>ACOMPANHAMENTO</BotoesConfiguracao>
            ) : (
                <></>
            )}
            <BotoesConfiguracao>SAIR</BotoesConfiguracao>
            <C.CampoGeral>
                <C.CampoTitulo>Geral</C.CampoTitulo>
                <C.ConfiguracoesDiv>
                    <C.Configuracao style={{borderBottom: 'solid 1px #d9d9d9'}}>
                        <C.ConfiguracaoDesc>Efeitos Sonoros</C.ConfiguracaoDesc>
                        <ToggleButton />
                    </C.Configuracao>
                    <C.Configuracao>
                        <C.ConfiguracaoDesc>Modo escuro</C.ConfiguracaoDesc>
                        <ToggleButton />
                    </C.Configuracao>
                </C.ConfiguracoesDiv>
            </C.CampoGeral>
            <BotoesConfiguracao>SUPORTE</BotoesConfiguracao>
            <BotoesConfiguracao>AVALIAR NOSSO APP</BotoesConfiguracao>
            <C.CampoNotificacao>
                <C.CampoTitulo>Notificação</C.CampoTitulo>
                <BotoesConfiguracao style={{height: '40%', maxHeight: '8.5vh'}}>PROGRAMAR LEMBRETE</BotoesConfiguracao>
                <C.ConfiguracoesDiv>
                    <C.Configuracao style={{borderBottom: 'solid 1px #d9d9d9'}}>
                        <C.ConfiguracaoDesc>Lembrete por SMS</C.ConfiguracaoDesc>
                        <ToggleButton />
                    </C.Configuracao>
                    <C.Configuracao>
                        <C.ConfiguracaoDesc>Lembrete por email</C.ConfiguracaoDesc>
                        <ToggleButton />
                    </C.Configuracao>
                </C.ConfiguracoesDiv>
            </C.CampoNotificacao>
            <C.CampoLembretes>
            <C.CampoTitulo>Lembretes</C.CampoTitulo>
            <C.ConfiguracoesDiv>
                    <C.Configuracao style={{borderBottom: 'solid 1px #d9d9d9'}}>
                        <C.ConfiguracaoLembreteDesc>Mentor respondeu uma dúvida sua no grupo de mentoria</C.ConfiguracaoLembreteDesc>
                        <ToggleButton />
                    </C.Configuracao>
                    <C.Configuracao style={{borderBottom: 'solid 1px #d9d9d9'}}>
                        <C.ConfiguracaoLembreteDesc>Algum mentor aceitou sua solicitação de ajuda</C.ConfiguracaoLembreteDesc>
                        <ToggleButton />
                    </C.Configuracao>
                    <C.Configuracao style={{borderBottom: 'solid 1px #d9d9d9'}}>
                        <C.ConfiguracaoLembreteDesc>Seu ranking foi atualizado, você subiu/desceu de rank</C.ConfiguracaoLembreteDesc>
                        <ToggleButton />
                    </C.Configuracao>
                    <C.Configuracao>
                        <C.ConfiguracaoLembreteDesc>Você está a muito tempo sem fazer uma atividade</C.ConfiguracaoLembreteDesc>
                        <ToggleButton />
                    </C.Configuracao>
                </C.ConfiguracoesDiv>
            </C.CampoLembretes>
        </C.Campo>
    );
};

export default CampoPerfilConfiguracao;
