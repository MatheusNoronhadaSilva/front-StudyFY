import * as C from './style';
import IconePerfil from '../../assets/Ellipse (1).png';
import React, { useState, useEffect, useRef } from 'react';
import BotoesConfiguracao from '../../styles/botoesconfiguracao';
import ToggleButton from '../BotaoToggleConfiguracao';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
import Swal from 'sweetalert2';


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

            Swal.fire({
                title: "Tem certeza?",
                text: "Você será retirado de todos os grupos de mentoria que faz parte, e não poderá ingressar em nenhum sendo mentor",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Tornar-se mentor"
            }).then(async (result) => {
                if (result.isConfirmed) {

                    // Buscar grupos de mentoria que o aluno participa
                    const gruposResponse = await axios.get(`http://localhost:8080/v1/studyfy/grupoMentoriaAluno/${idUsuario}`);
                    const grupos = gruposResponse.data;

                    console.log(gruposResponse);

                    if (gruposResponse.data !== null) {

                        // Remover o aluno de todos os grupos
                        for (const grupo of grupos) {
                            await axios.delete('http://localhost:8080/v1/studyfy/mentoria/membro', {
                                data: {
                                    grupoId: grupo.id_grupo,
                                    alunoId: idUsuario,
                                },
                            });
                        }
                    }
                    
                    const response = await axios.post(`http://localhost:8080/v1/studyFy/mentor`, {
                        idUsuario: idUsuario,
                    });

                    console.log(response.data.mentorCriado);

                    if (response.status === 201) {
                        swal("Parabéns", "Agora você será capaz de ajudar outros alunos com grupo de mentoria e ajuda personalizada", "success");

                        // Atualiza o estado do idMentor
                        localStorage.setItem("id_mentor", `${response.data.mentorCriado}`);
                        setConfiguracoes({
                            ...aluno,
                            // Atualize outras informações aqui, se necessário
                        });
                    } else {
                        swal("Falha ao se tornar mentor", "Houve um erro ao se tornar mentor", "error");
                    }
                }
            })
        } catch (error) {
            console.error('Erro ao tornar-se mentor:', error);
            swal("OOooopsss...", "Tente novamente mais tarde", "error");
        }
    };


    const deixarDeSerMentor = async () => {
        try {

            Swal.fire({
                title: "Tem certeza?",
                text: "Caso tenha um grupo de mentoria ela será deletada ao deixar de ser mentor",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Deletar mesmo assim"
            }).then(async (result) => {
                if (result.isConfirmed) {

                    // Envia a requisição DELETE para o servidor
                    const response = await axios.delete(`http://localhost:8080/v1/studyFy/mentor/${idMentor}`);

                    if (response.status === 200) {
                        Swal.fire({
                            title: "Você deixou de ser mentor, tudo bem",
                            text: "Que tal tentar de novo outra vez?",
                            icon: "success"
                        });
                        localStorage.setItem("id_mentor", "0");
                        localStorage.setItem("id_grupo", "0");
                        setConfiguracoes({
                            ...aluno,
                            // Atualize outras informações, se necessário
                        });
                    } else {
                        Swal.fire({
                            title: "Erro ao deixar de ser mentor",
                            text: "Tente novamente mais tarde, se o erro persistir, contate nossa equipe",
                            icon: "error"
                        });
                    }
                }
            });
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
        localStorage.clear()

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
                <C.DataEntrada>Ingressou em: {aluno.data_criacao_conta}</C.DataEntrada>
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
