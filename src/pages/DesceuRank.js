import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'
import calabresoIrritado from '../assets/calabresoIrritado.png'
import bronzeI from '../assets/Bronze I.png'

const  DesceuRank = () => {

    return (
      <Container style={{backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh'}}>


        <div style={{height: '130px', width: '130px'}}>
            <img src={calabresoIrritado}></img>
        </div>

          <div style={{height: '11px', width: '256px', background: '#CDA572'}}> </div>

          <text style={{fontSize: '25px', paddingTop: '35px', paddingBottom: '35px'}}>Que Pena !!!</text>
  
          <div>
            <img style={{height: '100px', width: '85px'}} src={bronzeI}></img>
          </div>

          <text style={{fontSize: '20px', width: '150px', textAlign: 'center'}}>Você caiu para o rank bronze I</text>

          <div>
            <button>
                <span>Voltar</span>
            </button>
          </div>

          <div style={{height: '11px', width: '256px', background: '#CDA572'}}> </div>


          <Navegacao></Navegacao>
  
      </Container>
    );
  };
  
  export default DesceuRank;
  