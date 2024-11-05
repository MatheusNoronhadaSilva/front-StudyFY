// src/components/Box.js
import React, { useState } from 'react';
import * as C from './style';
//import lupa from '../../assets/Lupa.png'
//import fitro from '../../assets/Filtro.png'
import AbaMembros from '../MembrosGrupo';

const AbasGrupoMentoria = () => {
  const [abaAtiva, setAbaAtiva] = useState(0); // Estado para rastrear a aba ativa

  const handleClick = (index) => {
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
        {/* <C.Pesquisa>
          <C.BarraPesquisa>
            <img src={lupa} alt='lupa' style={{height: '60%', width: '10%'}}></img>
            <C.InputPesquisa></C.InputPesquisa>
          </C.BarraPesquisa>
          <img src={fitro} alt='filtro'></img>
        </C.Pesquisa> */}
        <AbaMembros />
      </C.CampoAba>
    </C.AbasGrupo>
  );
};

export default AbasGrupoMentoria;
