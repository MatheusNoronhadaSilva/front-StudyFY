import React, { useState, useEffect, useRef } from 'react';
import * as C from './style';
import axios from 'axios';
import lupa from '../../assets/Lupa.png';
import fitro from '../../assets/Filtro.png';
import fotoMentoria from '../../assets/Ellipse (1).png';
import matematica from '../../assets/Matematica.png';
import Membros from '../../assets/Membros.png';
import duvidasRespondidas from '../../assets/dúvidasRespondidas.png';
import Mentoria from '../../assets/mentoria.png';

const VisualizarGrupos = () => {
    const [expandedGroup, setExpandedGroup] = useState(null);
    const [grupos, setGrupos] = useState([]); // Estado para armazenar os grupos
    const grupoRef = useRef(null);

    const pegarGrupos = async () => {
        try {
            const response = await axios.get('http://localhost:8080/v1/studyfy/gruposMentoria');
            // Atualiza o estado com os dados dos grupos
            setGrupos(response.data);
        } catch (error) {
            console.error('Erro ao buscar os grupos de mentoria:', error);
        }
    };

    // Chama a função de buscar dados quando o componente for montado
    useEffect(() => {
        pegarGrupos();
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleGroupClick = (id) => {
        setExpandedGroup(expandedGroup === id ? null : id);
    };

    const handleClickOutside = (event) => {
        if (grupoRef.current && !grupoRef.current.contains(event.target)) {
            setExpandedGroup(null);
        }
    };

    return (
        <C.CampoVisualizarGrupos>
            <C.Descricao>Encontre um grupo de mentoria para aperfeiçoar seus estudos</C.Descricao>
            <C.Pesquisa>
                <C.BarraPesquisa>
                    <C.Lupa src={lupa} alt='lupa' />
                    <C.InputPesquisa />
                </C.BarraPesquisa>
                <C.Filtro src={fitro} alt='filtro' />
            </C.Pesquisa>
            <C.GruposOrganizados>
                {grupos.map((grupo) => (
                    <C.GrupoMentoria
                        key={grupo.id}
                        ref={expandedGroup === grupo.id ? grupoRef : null}
                        onClick={() => handleGroupClick(grupo.id)}
                        expanded={expandedGroup === grupo.id}
                    >
                        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row' }}>
                            <C.InfoGrupo>
                                <C.FotoGrupo src={fotoMentoria} />
                                <C.NomeGrupo>{grupo.nome_grupo}</C.NomeGrupo>
                            </C.InfoGrupo>
                            <C.MateriaGrupo>
                                <C.FotoMateriaDiv>
                                    <C.IconeMateria src={matematica} />
                                </C.FotoMateriaDiv>
                                <C.NomeMateria>{grupo.materia_grupo}</C.NomeMateria>
                            </C.MateriaGrupo>
                        </div>

                        {expandedGroup === grupo.id && (
                            <C.ExpandedInfo>
                                <C.InfoDiv>
                                    <C.Icone src={duvidasRespondidas} />
                                    <C.ExpandendSpan>{grupo.quantidade_duvidas_respondidas}</C.ExpandendSpan>
                                </C.InfoDiv>
                                <C.InfoDiv>
                                    <C.IconeMembros src={Membros} alt='Membros' />
                                    <C.ExpandendSpan>{grupo.quantidade_membros}/{grupo.capacidade_grupo}</C.ExpandendSpan>
                                </C.InfoDiv>
                                <C.VerGrupoDiv>
                                    <C.IconeMentoria src={Mentoria} />
                                    <C.VerGrupo>Ver grupo de mentoria</C.VerGrupo>
                                </C.VerGrupoDiv>
                            </C.ExpandedInfo>
                        )}
                    </C.GrupoMentoria>
                ))}
            </C.GruposOrganizados>
        </C.CampoVisualizarGrupos>
    );
};

export default VisualizarGrupos;
