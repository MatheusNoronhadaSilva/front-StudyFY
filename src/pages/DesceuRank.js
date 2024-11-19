import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'
import calabresoIrritado from '../assets/mascote.png'
import bronzeI from '../assets/Bronze I.png'

const  DesceuRank = () => {

  return (
    <Container style={{ backgroundColor: 'white', alignItems: 'center'}}>
        <div style={{ flexGrow: '1', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{position: 'relative', height: '20%', width: '100%', display: 'flex' }}>
                <img style={{position: 'absolute', bottom: '-5%', left: '37%'}} src={calabresoIrritado} ></img>
                <div style={{ marginTop: 'auto', height: '9%', placeSelf: 'start', width: '70%', background: '#CDA572', borderTopRightRadius: '8px', borderBottomRightRadius: '8px', }}> </div>
            </div>

            <text style={{ fontSize: '30px', paddingTop: '35px', paddingBottom: '45px', fontFamily: 'g' }}>Que pena !!!</text>

            <div>
                <img style={{ height: '100px', width: '85px' }} src={bronzeI}></img>
            </div>

            <text style={{ fontSize: '20px', width: '150px', textAlign: 'center', paddingTop: '50px' }}>Você caiu para o rank bronze I</text>

            <div style={{ paddingTop: '100px', paddingBottom: '90px' }}>
                <button style={{ height: '41px', width: '172px', background: '#FFD700', border: 'none', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                    <span style={{ fontSize: '25px' }}>Voltar</span>
                </button>
            </div>

            <div style={{width: '100%', height: '20%', display: 'flex', justifyContent: 'flex-end'}}>
                <div style={{ height: '9%', width: '70%', background: '#CDA572', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px' }}> </div>
            </div>
        </div>



        <Navegacao></Navegacao>

    </Container>
);
  };
  
  export default DesceuRank;
  