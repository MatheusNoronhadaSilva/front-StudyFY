import React, { useState } from 'react';
import * as C from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import fotoGrupo from '../../assets/Ellipse (1).png'
import matematica from '../../assets/Matematica.png'

const VisualizarGruposIncluidos = () => {
    const [isVisualizando, setIsVisualizando] = useState(false);
    const [showBorder, setShowBorder] = useState(false);

    const handleVerGruposClick = () => {
        setIsVisualizando(true); // Exibe a visualização de grupos
        setShowBorder(true); // Ativa a borda ao clicar em "Ver grupos"
    };

    const handleFecharClick = () => {
        setIsVisualizando(false); // Retorna para a visualização inicial
        setShowBorder(false); // Remove a borda ao fechar
    };

    return (
        <C.CampoVisualizarGruposIncluidos showBorder={showBorder}>
            {!isVisualizando ? (
                <C.VerGruposDiv>
                    <C.Descricao>Veja os grupos que você faz parte!</C.Descricao>
                    <C.VerGrupo onClick={handleVerGruposClick}>Ver grupos</C.VerGrupo>
                </C.VerGruposDiv>
            ) : (
                <C.VisualizacaoGrupos>
                    <div style={{width: '100%', gap: '30%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
                        <C.Fechar icon={faClose} onClick={handleFecharClick} />
                        <C.DescricaoVisualizacao>Veja os grupos no qual faz parte</C.DescricaoVisualizacao>
                    </div>
                    <C.GrupoMentoria>
                        <C.IconeGrupo src={fotoGrupo}/>
                        <C.FotoMateriaDiv>
                            <C.IconeMateria src={matematica} />
                        </C.FotoMateriaDiv>
                        <C.NomeGrupo>Grupinho sdjsdjs jsdhjshd fhdfhd jhh...</C.NomeGrupo>
                    </C.GrupoMentoria>  
                </C.VisualizacaoGrupos>
            )}
        </C.CampoVisualizarGruposIncluidos>
    );
};

export default VisualizarGruposIncluidos;
