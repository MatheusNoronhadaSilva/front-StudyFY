import React, { useState } from 'react';
import * as C from './style';
import AbaMembros from '../MembrosGrupo';
import AbaDuvidas from '../DuvidasGrupo';
import AbaAtividades from '../AtividadesGrupo';

const AbasGrupoMentoria = (grupoId) => {
  const [abaAtiva, setAbaAtiva] = useState(0); // Estado para rastrear a aba ativa

  const handleClick = (index) => {
    console.log(index);
    
    setAbaAtiva(index); // Atualiza a aba ativa ao clicar
  };

  return (
    <C.AbasGrupo>
      <C.Abas>
        {['Membros', 'Atividades', 'Dúvidas'].map((aba, index) => (
          <C.Aba 
            key={index} 
            onClick={() => handleClick(index)} 
            style={{ opacity: abaAtiva === index ? 1 : 0.5 }} // Aplica opacidade
          >
            {aba}
          </C.Aba>
        ))}
      </C.Abas>

      <C.CampoAba>
        {abaAtiva === 0 && <AbaMembros grupoId={grupoId}/>}      {/* Exibe AbaMembros se abaAtiva for 0 */}
        {abaAtiva === 1 && <AbaAtividades grupoId={grupoId}/>}
        {abaAtiva === 2 && <AbaDuvidas grupoId={grupoId}/>}      {/* Exibe AbaDuvidas se abaAtiva for 2 */}
      </C.CampoAba>
    </C.AbasGrupo>
  );
};

export default AbasGrupoMentoria;