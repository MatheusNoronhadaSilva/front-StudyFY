import * as C from './style';
import IconePerfil from '../../assets/Ellipse (1).png';
import React, { useState, useEffect, useRef } from 'react';
import BotoesConfiguracao from '../../styles/botoesconfiguracao';
import ToggleButton from '../BotaoToggleConfiguracao';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CampoPerfilConfiguracao = () => {
    const [aluno, setConfiguracoes] = useState(null); // Estado para armazenar as configurações
    const emailRef = useRef(null);
    const nomeRef = useRef(null);
    const senhaRef = useRef(null);
    const idMentor = localStorage.getItem("id_mentor");
    const idUsuario = localStorage.getItem("userId");
    console.log(idMentor);
    const navigate = useNavigate();

    const TelaApresentacao = () => {
        navigate('/perfil');
    };

    // Função para buscar configurações do aluno
    const buscarConfiguracoes = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/v1/studyFy/aluno/config/${idUsuario}`);
            setConfiguracoes(response.data.aluno);
            console.log('Configurações do aluno:', response.data.aluno);
        } catch (error) {
            console.error('Erro ao buscar configurações:', error);
            alert('Ocorreu um erro ao carregar suas configurações. Tente novamente mais tarde.');
        }
    };

    // Função para tornar o usuário mentor
    const tornarSeMentor = async () => {
        try {
            // Aqui você envia a requisição POST para o servidor
            const response = await axios.post(`http://localhost:8080/v1/studyFy/mentor`, {
                idUsuario: idUsuario,
            });

            console.log(response);
            

            if (response.status = 201) {
                alert('Você agora é um mentor!');
                // Atualiza o estado do idMentor, caso seja necessário para renderizar a tela novamente
                localStorage.setItem("id_mentor", "1"); // Atualizando o status para "mentor"
                setConfiguracoes({
                    ...aluno,
                    // Modifique conforme necessário
                });
            } else {
                alert('Falha ao tornar-se mentor. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao tornar-se mentor:', error);
            alert('Ocorreu um erro. Tente novamente mais tarde.');
        }
    };

    const deixarDeSerMentor = async () => {
        try {
            // Envia a requisição DELETE para o servidor
            const response = await axios.delete(`http://localhost:8080/v1/studyFy/mentor/${idMentor}`);
            
            if (response.status === 200) {
                alert('Você não é mais um mentor.');
                localStorage.setItem("id_mentor", "0"); // Atualiza o status para "não mentor"
                setConfiguracoes({
                    ...aluno,
                    // Atualize outras informações, se necessário
                });
            } else {
                alert('Não foi possível remover o status de mentor. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao deixar de ser mentor:', error);
            alert('Ocorreu um erro. Tente novamente mais tarde.');
        }
    };

    // useEffect para carregar as configurações assim que o componente for montado
    useEffect(() => {
        if (idUsuario) {
            buscarConfiguracoes();
        }
    }, [idUsuario]);

    const sair = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('imgAtiva');
        localStorage.removeItem('id_mentor');

        // Força a navegação para a página de login
        navigate('/login', { replace: true });

        // Remove todas as entradas anteriores no histórico do navegador
        window.history.pushState(null, '', '/login');  // Push para a tela de login
        window.history.forward();  // Avança uma página para desabilitar o botão voltar

        // Se o usuário tentar usar o botão voltar, ele será redirecionado para login
        window.onpopstate = () => {
            window.history.forward();
        };
    };

    if (!aluno) { // Adiciona um loading enquanto os dados estão sendo carregados
        return <div>Carregando...</div>;
    }

    return (
        <C.Campo>
            <C.Engrenagem onClick={TelaApresentacao} icon={faGear} />
            <C.CampoInfoPrincipal>
                <C.FundoAmarelo />
                <C.IconePerfil src={aluno.foto_aluno || IconePerfil} /> {/* Verifica se existe foto do aluno */}
                <C.DataEntrada>{aluno.data_criacao_conta}</C.DataEntrada>
            </C.CampoInfoPrincipal>
            <C.Campos>
                <C.EntradaInfo>
                    <C.Input type="text" id="email" name="email" ref={nomeRef} value={aluno.nome_aluno} required />
                    <C.Label htmlFor="email">Nome</C.Label>
                </C.EntradaInfo>
                <C.EntradaInfo>
                    <C.Input type="text" id="email" name="email" ref={emailRef} value={aluno.email_aluno} required />
                    <C.Label htmlFor="email">Email</C.Label>
                </C.EntradaInfo>
                <C.EntradaInfo>
                    <C.Input type="text" id="email" name="email" ref={senhaRef} value={aluno.senha_aluno} required />
                    <C.Label htmlFor="email">Senha</C.Label>
                </C.EntradaInfo>
            </C.Campos>
            {idMentor !== "0" ? (
                <>
                    <BotoesConfiguracao>ACOMPANHAMENTO</BotoesConfiguracao>
                    <BotoesConfiguracao onClick={deixarDeSerMentor}>DEIXAR DE SER MENTOR</BotoesConfiguracao>
                </>
            ) : (
                <BotoesConfiguracao onClick={tornarSeMentor}>TORNAR-SE MENTOR</BotoesConfiguracao>
            )}
            <BotoesConfiguracao onClick={sair}>SAIR</BotoesConfiguracao>
            <C.CampoGeral>
                <C.CampoTitulo>Geral</C.CampoTitulo>
                <C.ConfiguracoesDiv>
                    <C.Configuracao style={{ borderBottom: 'solid 1px #d9d9d9' }}>
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
                <BotoesConfiguracao style={{ height: '40%', maxHeight: '8.5vh' }}>PROGRAMAR LEMBRETE</BotoesConfiguracao>
                <C.ConfiguracoesDiv>
                    <C.Configuracao style={{ borderBottom: 'solid 1px #d9d9d9' }}>
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
                    <C.Configuracao style={{ borderBottom: 'solid 1px #d9d9d9' }}>
                        <C.ConfiguracaoLembreteDesc>Mentor respondeu uma dúvida sua no grupo de mentoria</C.ConfiguracaoLembreteDesc>
                        <ToggleButton />
                    </C.Configuracao>
                    <C.Configuracao style={{ borderBottom: 'solid 1px #d9d9d9' }}>
                        <C.ConfiguracaoLembreteDesc>Algum mentor aceitou sua solicitação de ajuda</C.ConfiguracaoLembreteDesc>
                        <ToggleButton />
                    </C.Configuracao>
                    <C.Configuracao style={{ borderBottom: 'solid 1px #d9d9d9' }}>
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
