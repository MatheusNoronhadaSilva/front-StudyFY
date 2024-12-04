import React from 'react';
import * as C from './style'
const AbaAtividades = (grupoID) => {

    const isMentor = Number(localStorage.getItem('id_mentor')
    )
    return (
        <C.CampoAtividades>
            {isMentor !== 0 ? (
                <span>Ainda não é possível inserir uma atividade</span>
            ) : (
                <span>Não há atividades neste grupo</span>
            )}
        </C.CampoAtividades>
    );
};

export default AbaAtividades;