import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as C from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import fotoGrupo from '../../assets/Ellipse (1).png';
import matematica from '../../assets/Matematica.png';
import { useNavigate } from 'react-router-dom'; // Importando o hook useNavigate

const VisualizarGruposIncluidos = () => {
    const [isVisualizando, setIsVisualizando] = useState(false);
    const [showBorder, setShowBorder] = useState(false);
    const [grupos, setGrupos] = useState([]); // Estado para armazenar os dados dos grupos
    const navigate = useNavigate(); // Inicializando o hook navigate

    const handleVerGruposClick = async () => {
        setIsVisualizando(true);
        setShowBorder(true);

        try {
            // Envia o id do aluno, aqui definido como 1. Alterar conforme necessário.
            const response = await axios.post('http://localhost:8080/v1/studyfy/grupoMentoriaAluno', { id: 1 });
            
            if (response.status === 200) {
                console.log(response.data);
                setGrupos(response.data); // Salva os dados recebidos no estado `grupos`
            } else {
                console.log('Erro ao buscar grupos de mentoria');
            }
        } catch (error) {
            console.error('Erro ao buscar grupos de mentoria:', error);
        }
    };

    const handleFecharClick = () => {
        setIsVisualizando(false);
        setShowBorder(false);
    };

    const telaCriarGrupo = () => {
        navigate('/criar-grupo-mentoria')
    }

    // Função para redirecionar para a página de detalhes do grupo
    const handleGrupoClick = (id) => {

        console.log(id);
        
        navigate(`/grupo-mentoria/${id}?status=membro`); // Navega para a página do grupo, passando o id
    };

    return (
        <C.CampoVisualizarGruposIncluidos showBorder={showBorder}>
            {!isVisualizando ? (
                <C.VerGruposDiv>
                    <C.Descricao>Veja os grupos que você faz parte!</C.Descricao>
                    <C.VerGrupo onClick={handleVerGruposClick}>Ver grupos</C.VerGrupo>
                    <div style={{minHeight: '10%'}}></div>
                    <C.Descricao>OU</C.Descricao>
                    <div style={{minHeight: '10%'}}></div>
                    <C.Descricao>Crie um grupo</C.Descricao>
                    <C.VerGrupo onClick={telaCriarGrupo}>Criar grupo</C.VerGrupo>
                </C.VerGruposDiv>
            ) : (
                <C.VisualizacaoGrupos>
                    <div style={{ width: '100%', gap: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <C.Fechar icon={faClose} onClick={handleFecharClick} />
                        <C.DescricaoVisualizacao>Veja os grupos no qual faz parte</C.DescricaoVisualizacao>
                    </div>
                    {grupos.map((grupo) => (
                        
                        <C.GrupoMentoria 
                            key={grupo.grupo_id} 
                            onClick={() => handleGrupoClick(grupo.grupo_id)} // Adicionando a ação de clique
                        >
                            <C.IconeGrupo src={fotoGrupo} />
                            <C.FotoMateriaDiv>
                                <C.IconeMateria src={matematica} />
                            </C.FotoMateriaDiv>
                            <C.NomeGrupo>{grupo.nome_grupo}</C.NomeGrupo>
                        </C.GrupoMentoria>
                    ))}
                </C.VisualizacaoGrupos>
            )}
        </C.CampoVisualizarGruposIncluidos>
    );
};

export default VisualizarGruposIncluidos;
