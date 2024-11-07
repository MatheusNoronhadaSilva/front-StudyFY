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



const  MontagemAtividadesTexto = () => {

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

            
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px'}}>

            <textarea placeholder="Titulo" style={{border:'none', width: '200px', height: '50px', display: 'flex', justifyContent:'center', fontSize: '20px', outline: '#D9D9D9'}}></textarea>

            </div>

            <div style={{height: '105px', width: '413px', border: '3px solid #D9D9D9', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

                <img src={adicionarImg}></img>

            </div>
            <div style={{height: '105px', width: '413px', border: '3px solid #D9D9D9', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

              <textarea placeholder="Adicione uma questão" style={{height: '95px', width: '350px', outline: 'none', border: 'none'}}></textarea>

            </div>

         {/* <div>
            <textarea placeholder="Adicione uma questão" style={{height: '220px', width: '100', border: 'none', padding: '10px', outline: 'none'}}></textarea>
         </div> */}

           

            <div style={{height: '390px', width: '414px', backgroundColor: '#D9D9D9', display: 'flex', justifyContent: 'center', paddingTop: '10px', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
                
                <button style={{height: '52px', width: '302px', backgroundColor: '#FFFFFF', border: 'none', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px'}}>
                    <text style={{fontSize: '20px'}}>1</text>

                    <textarea placeholder="Adiconar o conteúdo" style={{border: 'none', outline: 'none'}}></textarea>

                    

                    <button style={{border: 'none',background: 'transparent'}}>
                        <img style={{height: '20px', width: '20px'}} src={AbaFechar}></img>
                    </button>
                </button>

                <button style={{height: '52px', width: '302px', backgroundColor: '#FFFFFF', border: 'none', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px'}}>
               <text style={{fontSize: '20px'}}>2</text>
               <textarea placeholder="Adiconar o conteúdo" style={{border: 'none', outline: 'none'}}></textarea>

                  

                    <button style={{border: 'none',background: 'transparent'}}>
                        <img style={{height: '20px', width: '20px'}} src={AbaFechar}></img>
                    </button>
                </button>

                <button style={{height: '52px', width: '302px', backgroundColor: '#FFFFFF', border: 'none', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',padding: '0 10px'}}>
                    <button style={{border: 'none', background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img src ={adicionarAtividade} style={{height: '20px', width: '20px'}}></img>
                    </button>
                
                    <text style={{textAlign: 'center', flex: '1'}}>Adicionar o conteúdo</text>

                </button>
                
              
              <button style={{height: '50px', width: '125px', border: 'none', backgroundColor: '#FF2B2B', borderRadius: '5px'}}>
                        <span style={{fontSize: '20px'}}>Criar</span>
                </button>
              
                
    
                

            </div>

            

           </div>
           
        </div>

        <Navegacao></Navegacao>

    </Container>
  );
};

export default MontagemAtividadesTexto;
