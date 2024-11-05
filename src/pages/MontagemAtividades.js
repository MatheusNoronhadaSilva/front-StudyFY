// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'
import TelaPadding from '../styles/TelaPadding';
import TituloTela from '../styles/tituloTela';
import CampoPerfil from '../components/CampoPerfil'
import AbaFechar from '../assets/iconeFechar.png'
import Objetiva from '../assets/atividadeObjetiva.png'
import adicionarAtividade from '../assets/botaoAdicionar.png'
import adicionarImg from '../assets/addImg.png'
import checkBoxV from '../assets/correto.png'
import checkBox from '../assets/corretoSemCor.png'
import vedadeiroFalso from '../assets/verdadeFalso.png'
import lacunas from '../assets/lacuna.png'



const MontagemAtividades = () => {

  return (
    <Container style={{backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh'}}>

        <TituloTela style={{marginBottom: '3vh'}}>Montagem de atividades</TituloTela>

        <div style={{width: '100%', flexGrow: '1'}}>

           <div style={{display: 'flex', justifyContent: 'center'}}>

            <button style={{border:'none', backgroundColor: 'transparent', paddingRight: '10px'}}>
                <img src={AbaFechar}></img>
            </button>

            <div style={{height: '62px', width: '219px', border:'2px solid #D9D9D9', padding:'10px', display: 'flex', justifyContent: 'space-betwween', alignItems: 'center', gap: '25px'}}>
                
                <button style={{height: '41px', width: '48px', border:'1px solid #FEE101'}}>
                    <img src={Objetiva} ></img>
                </button>
                   
                <button style={{height: '41px', width: '48px', border:'1px solid '}}>
                    <img src={vedadeiroFalso}></img>
                </button>

                <button style={{height: '41px', width: '48px', border:'1px solid '}}>
                    <img src={lacunas}></img>
                </button>

            </div>

            <button style={{border:'none', backgroundColor: 'transparent', paddingLeft: '10px'}}>
                <img src={adicionarAtividade}></img>
            </button>

           </div>

           <div>

            

            <textarea placeholder="Adicione uma questão:" style={{border:'none', width: '400px', height: '200px', display: 'flex', justifyContent:'center', paddingTop: '25%', fontSize: '20px', outline: 'none'}}></textarea>


          <div style={{ height: '170px', width: '414px', border: '2px solid #D9D9D9', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            
            <img src={adicionarImg} alt="Descrição da imagem" style={{ maxHeight: '100%', maxWidth: '100%' }}></img> 

            
            </div>

           

            <div style={{height: '390px', width: '414px', backgroundColor: '#E9CE03', display: 'flex', justifyContent: 'center', paddingTop: '10px', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
                
                <button style={{height: '52px', width: '302px', backgroundColor: '#FFFFFF', border: 'none', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px'}}>
                    <text style={{fontSize: '20px'}}>A</text>
                    <text>Adiconar o conteúdo</text>

                    <img src={checkBox}></img>

                    <button style={{border: 'none',background: 'transparent'}}>
                        <img style={{height: '20px', width: '20px'}} src={AbaFechar}></img>
                    </button>
                </button>

                <button style={{height: '52px', width: '302px', backgroundColor: '#FFFFFF', border: 'none', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px'}}>
               <text style={{fontSize: '20px'}}>B</text>
                    <text>Adiconar o conteúdo</text>

                    <img src={checkBoxV} style={{height: '15px', width: '15px'}}></img>

                    <button style={{border: 'none',background: 'transparent'}}>
                        <img style={{height: '20px', width: '20px'}} src={AbaFechar}></img>
                    </button>
                </button>

                <button style={{height: '52px', width: '302px', backgroundColor: '#FFFFFF', border: 'none', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',padding: '0 10px'}}>
                    <button style={{border: 'none', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src ={adicionarAtividade} style={{height: '20px', width: '20px'}}></img>
                    </button>
                
                    <text style={{textAlign: 'center', flex: '1'}}>Adiconar o conteúdo</text>

        
                    

                </button>

            </div>

            

           </div>
           
        </div>

        <Navegacao></Navegacao>

    </Container>
  );
};

export default MontagemAtividades;
