import React, { useState } from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'
//import TelaPadding from '../styles/TelaPadding';
import TituloTela from '../styles/tituloTela';
//import CampoPerfil from '../components/CampoPerfil'
import Navegacao from '../components/Navegacao';
import TituloTela from '../styles/tituloTela';
import AbaFechar from '../assets/iconeFechar.png';
import Objetiva from '../assets/atividadeObjetiva.png';
import adicionarAtividade from '../assets/botaoAdicionar.png';
import adicionarImg from '../assets/addImg.png';
import checkBoxV from '../assets/correto.png';
import checkBox from '../assets/corretoSemCor.png';
import vedadeiroFalso from '../assets/verdadeFalso.png';
import lacunas from '../assets/lacuna.png';
import AbaFechar from '../assets/iconeFechar.png'
import Objetiva from '../assets/atividadeObjetiva.png'
import adicionarAtividade from '../assets/botaoAdicionar.png'
import adicionarImg from '../assets/addImg.png'

const MontagemAtividades = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    // Função para abrir o pop-up
    const openPopup = () => {
        setIsPopupVisible(true);
    };

    // Função para fechar o pop-up
    const closePopup = () => {
        setIsPopupVisible(false);
    };

    return (
        <Container style={{ backgroundColor: 'white', alignItems: 'center' }}>

            {isPopupVisible && (
                <div
                    style={{ background: 'rgba(0,0,0,0.50)', height: '100%', width: '100%', position: 'absolute' }}
                    onClick={closePopup} // Fecha o pop-up ao clicar fora dele
                ></div>
            )}

            <TituloTela style={{ marginBottom: '3vh' }}>Montagem de atividades</TituloTela>

            <div style={{ width: '100%', flexGrow: '1' }}>

                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <button style={{ border: 'none', backgroundColor: 'transparent', paddingRight: '10px' }}>
                        <img src={AbaFechar} alt="Fechar" />
                    </button>

                    <div style={{ height: '62px', width: '219px', border: '2px solid #D9D9D9', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '25px' }}>

                        <button style={{ height: '41px', width: '48px', border: '1px solid #FEE101' }}>
                            <img src={Objetiva} alt="Objetiva" />
                        </button>

                        <button style={{ height: '41px', width: '48px', border: '1px solid ' }}>
                            <img src={vedadeiroFalso} alt="Verdadeiro ou Falso" />
                        </button>

                        <button style={{ height: '41px', width: '48px', border: '1px solid ' }}>
                            <img src={lacunas} alt="Lacunas" />
                        </button>

                    </div>

                    <button onClick={openPopup} style={{ border: 'none', backgroundColor: 'transparent', paddingLeft: '10px' }}>
                        <img src={adicionarAtividade} alt="Adicionar Atividade" />
                    </button>

                    {isPopupVisible && (
                        <div style={{
                            position: 'absolute', bottom: '0', height: '80%', width: '100%', backgroundColor: 'white',
                        }}>

                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px', flexDirection: 'column' }}>

                                <button style={{
                                    backgroundColor: '#D9D9D9', height: '11px', width: '160px', borderRadius: '12px', border: 'none'
                                }}></button>

                                <p style={{ paddingTop: '40px', fontSize: '25px', textAlign: 'center', width: '80%' }}>
                                    Selecione um tipo de atividade para criá-la
                                </p>

                                <div style={{ paddingTop: '50px' }}>

                                    <button onClick={closePopup} style={{
                                        border: '2px solid #E9CE03', height: '150px', width: '285px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                        backgroundColor: 'white', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', margin: '10px'
                                    }}>
                                        <div style={{flexDirection: 'column', display: 'flex', alignItems: 'center', paddingTop: '40px', paddingLeft: '15px'
                                        }}>
                                            <img style={{ height: '35px', width: '35px' }} src={Objetiva} alt="Objetiva" />
                                            <p>Múltipla escolha</p>
                                        </div>

                                        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingTop: '35px', gap: '10px', margin: '5px'}}>

                                            <div style={{backgroundColor: '#D9D9D9', height: '20px', width: '150px', borderRadius: '5px', display: 'flex', paddingLeft: '5px'}}>
                                                <img style={{ height: '15px', width: '15px' }} src={AbaFechar} alt="Fechar" />
                                            </div>

                                            <div style={{backgroundColor: '#D9D9D9', height: '20px', width: '150px', borderRadius: '5px', display: 'flex', paddingLeft: '5px'}}>
                                                <img style={{ height: '15px', width: '15px' }} src={checkBoxV} alt="Checkbox V" />
                                            </div>
                                            <div style={{backgroundColor: '#D9D9D9', height: '20px', width: '150px', borderRadius: '5px', display: 'flex', paddingLeft: '5px'}}>
                                                <img style={{ height: '15px', width: '15px' }} src={AbaFechar} alt="Fechar" />
                                            </div>
                                        </div>
                                    </button>

                                    {/* Outros botões para outros tipos de atividade podem ser adicionados aqui */}

                                </div>

                            </div>
                        </div>
                    )}

                </div>

                <div>
                    <textarea placeholder="Adicione uma questão:"
                        style={{border: 'none', width: '400px', height: '200px', display: 'flex', justifyContent: 'center',paddingTop: '25%', fontSize: '20px', outline: 'none'}}/>

                    <div style={{height: '170px', width: '414px', border: '2px solid #D9D9D9', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src={adicionarImg} alt="Adicionar Imagem" style={{ maxHeight: '100%', maxWidth: '100%' }} />
                    </div>

                    <div style={{height: '390px', width: '414px', backgroundColor: '#E9CE03', display: 'flex', justifyContent: 'center',paddingTop: '10px', flexDirection: 'column', gap: '20px', alignItems: 'center'}}>
                        <button style={{height: '52px', width: '302px', backgroundColor: '#FFFFFF', border: 'none', borderRadius: '5px',display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px'}}>
                            <p style={{ fontSize: '20px' }}>A</p>
                            <textarea placeholder="Adicionar o conteúdo" style={{outline: 'none', border: 'none'}}></textarea>
                            <img src={checkBox} alt="Checkbox" />
                            <button style={{ border: 'none', background: 'transparent' }}>
                                <img style={{ height: '20px', width: '20px' }} src={AbaFechar} alt="Fechar" />
                            </button>
                        </button>

                        <button style={{height: '52px', width: '302px', backgroundColor: '#FFFFFF', border: 'none', borderRadius: '5px',display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px'}}>
                            <p style={{ fontSize: '20px' }}>A</p>
                            <textarea placeholder="Adicionar o conteúdo" style={{outline: 'none', border: 'none'}}></textarea>
                            <img src={checkBox} alt="Checkbox" />
                            <button style={{ border: 'none', background: 'transparent' }}>
                                <img style={{ height: '20px', width: '20px' }} src={AbaFechar} alt="Fechar" />
                            </button>
                        </button>

                        <button style={{height: '52px', width: '302px', backgroundColor: '#FFFFFF', border: 'none', borderRadius: '5px',display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px'}}>
                            <p style={{ fontSize: '20px' }}>A</p>
                            <textarea placeholder="Adicionar o conteúdo" style={{outline: 'none', border: 'none'}}></textarea>
                            <img src={checkBox} alt="Checkbox" />
                            <button style={{ border: 'none', background: 'transparent' }}>
                                <img style={{ height: '20px', width: '20px' }} src={AbaFechar} alt="Fechar" />
                            </button>
                        </button>

                        <button style={{height: '52px', width: '302px', backgroundColor: '#FFFFFF', border: 'none', borderRadius: '5px',display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px'}}>
                            <p style={{ fontSize: '20px' }}>A</p>
                            <textarea placeholder="Adicionar o conteúdo" style={{outline: 'none', border: 'none'}}></textarea>
                            <img src={checkBox} alt="Checkbox" />
                            <button style={{ border: 'none', background: 'transparent' }}>
                                <img style={{ height: '20px', width: '20px' }} src={AbaFechar} alt="Fechar" />
                            </button>
                        </button>
                    </div>
                </div>

            </div>

            <Navegacao />

        </Container>
    );
};

export default MontagemAtividades;

