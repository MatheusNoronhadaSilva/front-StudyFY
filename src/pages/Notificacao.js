// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'
import TituloTela from '../styles/tituloTela';
import bronzeIII from '../assets/Bronze III.png'
import bronzeII from '../assets/Bronze II.png'
import mascote from '../assets/mascote.png'
import capaHistoria from '../assets/Ellipse (1).png'


const Notificacao = () => {

  return (
    <Container style={{ backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh' }}>

      <TituloTela style={{ marginBottom: '3vh' }}>Notificação</TituloTela>

      <div style={{ width: '100%', flexGrow: '1', alignItems: 'center', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px'}}>

        {/* card */}
        <div style={{height: '140px', width: '340px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}}>
          <div style={{height: '27px', width: '340px', backgroundColor: '#FFE944', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', display: 'flex', position: 'relative', justifyContent: 'space-between'}}>
            <text style={{margin: '5px'}}>Você subiu de rank!</text>
            <div style={{height: '5px', width: '5px', backgroundColor: 'red', borderRadius: '5px',margin: '10px'}}></div>
          </div>

          <div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between'}}>
            <div style={{flexDirection: 'column', display: 'flex', gap: '20px', paddingTop: '10px'}}>
              <text style={{width: '200px'}}>Você terminou a temporada com 420pts.</text>
              <text>terminou em #1 lugar</text>
              <text style={{fontSize: '10px'}}>22/08/2024</text>
            </div>
            
            <div style={{justifyContent: 'center', display: 'flex', alignItems: 'center', margin: '20px', gap: '10px'}}>
            <img style={{height: '50px', width: '50px'}} src={bronzeIII}></img>
            <img style={{height: '50px', width: '50px'}} src={bronzeII}></img>
            </div>

          </div>
        </div>

        {/* card 2*/}
        <div style={{height: '140px', width: '340px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}}>
          <div style={{height: '27px', width: '340px', backgroundColor: '#FFE944', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', display: 'flex', position: 'relative', justifyContent: 'space-between'}}>
            <text style={{margin: '5px'}}>Atualize nosso App</text>
            <div style={{height: '5px', width: '5px', backgroundColor: 'red', borderRadius: '5px',margin: '10px'}}></div>
          </div>

          <div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between'}}>
            <div style={{flexDirection: 'column', display: 'flex', gap: '10px', paddingTop: '10px'}}>
              <text style={{width: '200px'}}>Chegou a versão 1.2.8,
              atualize para uma experiencia melhor</text>
              <text>"--"</text>
              <text style={{fontSize: '10px'}}>22/08/2024</text>
            </div>
            
            <div style={{justifyContent: 'center', display: 'flex', alignItems: 'center', margin: '20px', gap: '10px'}}>
            <img style={{height: '60px', width: '55px'}} src={mascote}></img>
            </div>

          </div>
        </div>

        {/* card 3*/}
        <div style={{height: '140px', width: '340px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}}>
          <div style={{height: '27px', width: '340px', backgroundColor: '#FFE944', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', display: 'flex', position: 'relative', justifyContent: 'space-between'}}>
            <text style={{margin: '5px'}}>Você subiu de rank!</text>
            <div style={{height: '5px', width: '5px', backgroundColor: 'red', borderRadius: '5px',margin: '10px'}}></div>
          </div>

          <div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between'}}>
            <div style={{flexDirection: 'column', display: 'flex', gap: '20px', paddingTop: '10px'}}>
              <text style={{width: '200px'}}>Você terminou a temporada com 420pts.</text>
              <text>terminou em #1 lugar</text>
              <text style={{fontSize: '10px'}}>22/08/2024</text>
            </div>
            
            <div style={{justifyContent: 'center', display: 'flex', alignItems: 'center', margin: '20px', gap: '10px'}}>
            <img style={{height: '50px', width: '50px'}} src={bronzeIII}></img>
            <img style={{height: '50px', width: '45px'}} src={bronzeII}></img>
            </div>

          </div>
        </div>

        {/* card 4*/}
        <div style={{height: '140px', width: '340px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}}>
          <div style={{height: '27px', width: '340px', backgroundColor: '#FFE944', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', display: 'flex', position: 'relative', justifyContent: 'space-between'}}>
            <text style={{margin: '5px'}}>Você subiu de rank!</text>
            <div style={{height: '5px', width: '5px', backgroundColor: 'red', borderRadius: '5px',margin: '10px'}}></div>
          </div>

          <div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between'}}>
            <div style={{flexDirection: 'column', display: 'flex', gap: '20px', paddingTop: '10px'}}>
              <text style={{width: '200px', fontSize: '13px'}}>No grupo ‘mentoria para história’, o mentor matheus noronha te marcou.</text>
              <text>terminou em #1 lugar</text>
              <text style={{fontSize: '10px'}}>22/08/2024</text>
            </div>
            
            <div style={{justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '2px'}}>
            <img style={{height: '60px', width: '60px'}} src={capaHistoria}></img>
            <text style={{width: '90px', fontSize: '9px'}}>Mentor respondeu você em ‘mentoria de Historia’</text>
            </div>

          </div>
        </div>

        {/* card 5*/}
        <div style={{height: '140px', width: '340px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}}>
          <div style={{height: '27px', width: '340px', backgroundColor: '#FFE944', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', display: 'flex', position: 'relative', justifyContent: 'space-between'}}>
            <text style={{margin: '5px'}}>Você subiu de rank!</text>
            <div style={{height: '5px', width: '5px', backgroundColor: 'red', borderRadius: '5px',margin: '10px'}}></div>
          </div>

          <div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between'}}>
            <div style={{flexDirection: 'column', display: 'flex', gap: '20px', paddingTop: '10px'}}>
              <text style={{width: '200px'}}>Você terminou a temporada com 420pts.</text>
              <text>terminou em #1 lugar</text>
              <text style={{fontSize: '10px'}}>22/08/2024</text>
            </div>
            
            <div style={{justifyContent: 'center', display: 'flex', alignItems: 'center', margin: '20px', gap: '10px'}}>
            <img style={{height: '50px', width: '50px'}} src={bronzeIII}></img>
            <img style={{height: '50px', width: '50px'}} src={bronzeII}></img>
            </div>

          </div>
        </div>

        {/* card 6*/}
        <div style={{height: '140px', width: '340px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'}}>
          <div style={{height: '27px', width: '340px', backgroundColor: '#FFE944', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', display: 'flex', position: 'relative', justifyContent: 'space-between'}}>
            <text style={{margin: '5px'}}>Você subiu de rank!</text>
            <div style={{height: '5px', width: '5px', backgroundColor: 'red', borderRadius: '5px',margin: '10px'}}></div>
          </div>

          <div style={{ display: 'flex', position: 'relative', justifyContent: 'space-between'}}>
            <div style={{flexDirection: 'column', display: 'flex', gap: '20px', paddingTop: '10px'}}>
              <text style={{width: '200px'}}>Você terminou a temporada com 420pts.</text>
              <text>terminou em #1 lugar</text>
              <text style={{fontSize: '10px'}}>22/08/2024</text>
            </div>
            
            <div style={{justifyContent: 'center', display: 'flex', alignItems: 'center', margin: '20px', gap: '10px'}}>
            <img style={{height: '50px', width: '50px'}} src={bronzeIII}></img>
            <img style={{height: '50px', width: '50px'}} src={bronzeII}></img>
            </div>

          </div>
        </div>
      </div>

      <Navegacao></Navegacao>
    </Container>
  );
};

export default Notificacao;



{/* <div style={{ flexGrow: '1', width: '100%', backgroundColor: 'red' }}>

</div> */}