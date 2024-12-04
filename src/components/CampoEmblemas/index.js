import React, { useEffect } from 'react';
import * as C from './style';
import medalha from '../../assets/medalha.png';
import livrosDegraus from '../../assets/livro_degraus.png';
import mascote from '../../assets/mascote.png';

const CampoEmblemas = () => {

    // Array com informações dos emblemas
    const emblemasAluno = [
        {
            foto: medalha,
            titulo: "Sua jornada",
            descricao: "Realizou a primeira atividade da aplicação",
            cor: "#71DDF5",
            meta: 1,
            andamento: 0
        },
        {
            foto: livrosDegraus,
            titulo: "Degraus do conhecimento",
            descricao: "Realizou 5 atividades",
            cor: "#56EE9C",
            meta: 5,
            andamento: 0
        },
        {
            foto: mascote,
            titulo: "Mestre das atividades",
            descricao: "Finalizou todas as atividades de um assunto",
            cor: "#fee101",
            meta: 1,
            andamento: 0
        }
    ];

    const emblemasMentor = [
        {
            foto: medalha,
            titulo: "A ascensão de um herói",
            descricao: "Ajudou um aluno pela primeira vez",
            cor: "#71DDF5",
            meta: 1,
            andamento: 0
        },
        {
            foto: livrosDegraus,
            titulo: "Salva-vidas",
            descricao: "ajudou 5 alunos",
            cor: "#56EE9C",
            meta: 5,
            andamento: 0
        }
    ];

    const isMentor = Number(localStorage.getItem('id_mentor'));

    console.log(isMentor);

    return (
        <C.CampoEmblemas>
            <C.Emblemas>
                <C.Titulo>Emblemas aluno</C.Titulo>
                {emblemasAluno.map((emblema, index) => {
                    const progresso = ((emblema.andamento / emblema.meta) * 100).toFixed(2);
                    return (
                        <C.Emblema key={index}>
                            <C.AreaIcone cor={emblema.cor}>
                                <C.Icone src={emblema.foto}></C.Icone>
                                <C.Nivel>Nível 1</C.Nivel>
                            </C.AreaIcone>
                            <C.AreaInfo>
                                <C.AreaDescricao>
                                    <C.TituloEmblema>{emblema.titulo}</C.TituloEmblema>
                                    <C.Descricao>{emblema.descricao}</C.Descricao>
                                </C.AreaDescricao>
                                <C.AreaProgresso>
                                    <C.Andamento>{progresso}%</C.Andamento>
                                    <C.Progresso style={{ width: `${progresso}%` }}></C.Progresso>
                                </C.AreaProgresso>
                            </C.AreaInfo>
                        </C.Emblema>
                    );
                })}
            </C.Emblemas>
            {isMentor !== 0 && (
                <C.Emblemas>
                    <C.Titulo>Emblemas mentor</C.Titulo>
                    {emblemasMentor.map((emblema, index) => {
                        const progresso = ((emblema.andamento / emblema.meta) * 100).toFixed(2);
                        return (
                            <C.Emblema key={index}>
                                <C.AreaIcone cor={emblema.cor}>
                                    <C.Icone src={emblema.foto}></C.Icone>
                                    <C.Nivel>Nível 1</C.Nivel>
                                </C.AreaIcone>
                                <C.AreaInfo>
                                    <C.AreaDescricao>
                                        <C.TituloEmblema>{emblema.titulo}</C.TituloEmblema>
                                        <C.Descricao>{emblema.descricao}</C.Descricao>
                                    </C.AreaDescricao>
                                    <C.AreaProgresso>
                                        <C.Andamento>{progresso}%</C.Andamento>
                                        <C.Progresso style={{ width: `${progresso}%` }}></C.Progresso>
                                    </C.AreaProgresso>
                                </C.AreaInfo>
                            </C.Emblema>
                        );
                    })}
                </C.Emblemas>
            )}

        </C.CampoEmblemas>


    );
};

export default CampoEmblemas;
