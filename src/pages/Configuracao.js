// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';
import Silvia from '../assets/silvia.png';

import '../style.css';

const Configuracao = () => {
    return (
        <Container style={{ backgroundColor: 'white', alignItems: 'center' }}>

            <div style={{ flexGrow: '1', width: '100%', paddingInline: '5vw', paddingTop: '5vh',}}>
                {/* Seção de perfil */}
                <div style={{ height: '25%', width: '100%', backgroundColor: 'blue', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <img src={Silvia} alt="Perfil" className="perfil-image" style={{ zIndex: 'auto', position: 'absolute', top: '0%', left: '34%' }} />
                    {/* Caixa amarela fixa */}
                    <div
                        style={{ backgroundColor: '#FEE101', borderRadius: '10px', height: '70%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                    >
                        <h2 style={{ fontWeight: 'bold', marginTop: '50px' }}>Silvia Santos</h2>
                    </div>
                </div>
              
               
            </div>
            <Navegacao />
        </Container>
    );
};

export default Configuracao;
