import React, { useState, useEffect, useRef } from 'react';
import * as C from './style';
import lupa from '../../assets/Lupa.png';
import fitro from '../../assets/Filtro.png';
import fotoMentoria from '../../assets/Ellipse (1).png';
import matematica from '../../assets/Matematica.png';
import Membros from '../../assets/Membros.png';
import duvidasRespondidas from '../../assets/dúvidasRespondidas.png';
import Mentoria from '../../assets/mentoria.png';

const VisualizarGrupos = () => {
    const [expandedGroup, setExpandedGroup] = useState(null);
    const grupoRef = useRef(null);

    const handleGroupClick = (id) => {
        setExpandedGroup(expandedGroup === id ? null : id);
    };

    const handleClickOutside = (event) => {
        if (grupoRef.current && !grupoRef.current.contains(event.target)) {
            setExpandedGroup(null);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((id) => (
                    <C.GrupoMentoria
                        key={id}
                        ref={expandedGroup === id ? grupoRef : null}
                        onClick={() => handleGroupClick(id)}
                        expanded={expandedGroup === id}
                    >
                        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row' }}>
                            <C.InfoGrupo>
                                <C.FotoGrupo src={fotoMentoria} />
                                <C.NomeGrupo>Nome do grupo {id}</C.NomeGrupo>
                            </C.InfoGrupo>
                            <C.MateriaGrupo>
                                <C.FotoMateriaDiv>
                                    <C.IconeMateria src={matematica} />
                                </C.FotoMateriaDiv>
                                <C.NomeMateria>Matemática</C.NomeMateria>
                            </C.MateriaGrupo>
                        </div>

                        {expandedGroup === id && (
                            <C.ExpandedInfo>
                                <C.InfoDiv>
                                    <C.Icone src={duvidasRespondidas} />
                                    <C.ExpandendSpan>30</C.ExpandendSpan>
                                </C.InfoDiv>
                                <C.InfoDiv>
                                    <C.IconeMembros src={Membros} alt='Membros' />
                                    <C.ExpandendSpan>10/35</C.ExpandendSpan>
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
