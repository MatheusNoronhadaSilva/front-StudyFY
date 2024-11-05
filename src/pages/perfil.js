// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';
import TituloTela from '../styles/tituloTela';
//import fotousuario from '../assets/fotousuario.png';
import Silvia from '../assets/silvia.png';
import Estrelas from '../assets/estrela.png'

const Perfil = () => {
  return (
    <Container style={{ backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh' }}>
      <TituloTela style={{ marginBottom: '2vh' }}>Perfil</TituloTela>
      <div style={{ flexGrow: '1', width: '100%', backgroundColor: 'white', overflowY: 'auto', paddingInline: '5vw', color: 'white' }}>
        
        {/* Seção de perfil */}
        <div style={{ textAlign: 'center', padding: '2vh 0' }}>
          <img src={Silvia} alt="Perfil" style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
          <div style={{ backgroundColor: '#FEE101', borderRadius: '10px', marginTop: '-74px', height: '150px'}}>
            <h2 style={{color: '#302F2F', paddingTop: '70px', fontWeight: 'bold'}}>Silvia Santos</h2>
            <p style={{color: '#302F2F'}}>Entrou em 2021</p>
          </div>
        </div>

        {/* Seção de especialização */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1vh 0' }}>
          <div>
            <p style={{ fontWeight: 'bold', color: '#302F2F' }}>Especialização</p>
            <p style={{color: '#302F2F'}}>História</p>
          </div>
          <div>
            <p style={{ fontWeight: 'bold', color: '#302F2F' }}>Professor</p>
          </div>
        </div>

        {/* Botão de mentoria */}
        <button style={{ backgroundColor: '#FEE101', border: 'none', padding: '5px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
          Ver grupo <br/> 
          de mentoria
        </button>

        {/* Seção de Rank - Mentor */}
        <div style={{ marginTop: '8vh' }}>
          <h2  style={{color: '#302F2F', fontSize: '22px', fontWeight: 'bold'}}>Rank - Mentor</h2>
          <div>
          <img src={Estrelas} alt="Perfil" style={{  width: '150px', height: '30px', marginTop: '30px' }} />
            <p style={{ color: '#302F2F', marginTop: '-16px', marginLeft: '18px', fontSize: '13px' }}><br/>(150 avaliações)</p>
          </div>
          {  
            
         <div style={{ backgroundColor: '#D9D9D9', height: '10px', width: '140px', borderRadius: '5px', marginTop: '2vh' }}>
            <div style={{ backgroundColor: '#302F2F', height: '100%', width: '85px', borderRadius: '5px' }}>
                <p style={{color: 'black', marginLeft:'150px', fontSize: '10px'}}>85%</p>
        </div>
          </div>
           }
        </div>
        <div style={{ marginTop: '2vh' }}>
          {/* <h2  style={{color: '#302F2F'}}>Emblemas</h2> */}
          {/* <h3 style={{color: 'black'}}>ver todos</h3> */}
          {/* <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <div style={{ backgroundColor: '#000000', padding: '10px', borderRadius: '10px' }}>Nível 1</div>
            <div style={{ backgroundColor: '#000000', padding: '10px', borderRadius: '10px' }}>Nível 1</div>
            <div style={{ backgroundColor: '#000000', padding: '10px', borderRadius: '10px' }}>Nível 1</div>
          </div> */}
        </div>
      </div>

      <Navegacao />
    </Container>
  );
};

export default Perfil;
