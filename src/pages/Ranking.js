import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'
import TituloTela from '../styles/tituloTela';
import medalha from '../assets/MedalhaBronze.png'





const  Ranking = () => {

  return (
    <Container style={{backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh'}}>

        <TituloTela style={{marginBottom: '3vh'}}>Ranking</TituloTela>

        <div>

        <text>Seus Ranks</text>


        <img src={medalha}></img>

        </div>
        
        <Navegacao></Navegacao>

    </Container>
  );
};

export default Ranking;
