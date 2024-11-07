// src/pages/Entrada.js
import React, { useState,useRef  } from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'
import TituloTela from '../styles/tituloTela';
import AbaFechar from '../assets/iconeFechar.png'
import Objetiva from '../assets/atividadeObjetiva.png'
import adicionarAtividade from '../assets/botaoAdicionar.png'
import adicionarImg from '../assets/addImg.png'
import checkBoxV from '../assets/correto.png'
import checkBox from '../assets/corretoSemCor.png'
import vedadeiroFalso from '../assets/verdadeFalso.png'
import lacunas from '../assets/lacuna.png'



const MontagemAtividades = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startY, setStartY] = useState(0);
    const [translateY, setTranslateY] = useState(0);
    const modalRef = useRef(null); // Referência para o pop-up

    // Função para abrir o pop-up com transição de baixo para cima
    const openPopup = () => {
        setIsPopupVisible(true);
        setTranslateY(0); // Garantir que a posição inicial seja no topo
    };

    // Função para fechar o pop-up
    const closePopup = () => {
        setIsPopupVisible(false);
        setTranslateY(0); // Resetar a posição do pop-up
    };

    // Iniciar o arrasto
    const handleTouchStart = (e) => {
        setIsDragging(true);
        const startY = e.touches[0].clientY;
        setStartY(startY);
    };

    // Mover a tela conforme o toque
    const handleTouchMove = (e) => {
        if (!isDragging) return;

        const currentY = e.touches[0].clientY;
        const deltaY = currentY - startY;

        setTranslateY(deltaY);
    };

    // Finalizar o arrasto
    const handleTouchEnd = () => {
        setIsDragging(false);

        if (translateY > 50) {
            // Se o usuário arrastou mais de 100px, fecha a tela
            closePopup();
        } else {
            // Caso contrário, a tela volta para o topo
            setTranslateY(0);
        }
    };


    return (
        <Container style={{ backgroundColor: 'white', alignItems: 'center' }}>

            {isPopupVisible && (
                <div style={{ background: 'rgba(0,0,0,0.50)', height: '100%', width: '100%', position: 'absolute' }}></div>
            )}

            <TituloTela style={{ marginBottom: '3vh' }}>Montagem de atividades</TituloTela>

            <div style={{ width: '100%', flexGrow: '1' }}>

                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <button style={{ border: 'none', backgroundColor: 'transparent', paddingRight: '10px' }}>
                        <img src={AbaFechar} alt="Fechar"></img>
                    </button>

                    <div style={{ height: '62px', width: '219px', border: '2px solid #D9D9D9', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '25px' }}>

                        <button style={{ height: '41px', width: '48px', border: '1px solid #FEE101' }}>
                            <img src={Objetiva} alt="Objetiva"></img>
                        </button>

                        <button style={{ height: '41px', width: '48px', border: '1px solid ' }}>
                            <img src={vedadeiroFalso} alt="Verdadeiro ou Falso"></img>
                        </button>

                        <button style={{ height: '41px', width: '48px', border: '1px solid ' }}>
                            <img src={lacunas} alt="Lacunas"></img>
                        </button>

                    </div>

                    <button onClick={openPopup} style={{ border: 'none', backgroundColor: 'transparent', paddingLeft: '10px' }}>
                        <img src={adicionarAtividade} alt="Adicionar Atividade"></img>
                    </button>

                    <div ref={modalRef} style={{ bottom: '0', position: 'absolute', height: '80%', width: '100%', backgroundColor: 'white',transform: `translateY(${translateY}px)`, }} 
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px', flexDirection: 'column' }}>

                            <button style={{backgroundColor: '#D9D9D9', height: '11px', width: '160px', borderRadius: '12px', border: 'none' }}></button>

                            <text style={{ paddingTop: '40px', fontSize: '25px', textAlign: 'center', width: '80%' }}>Selecione um tipo de atividade para criá-la</text>

                            <div style={{ paddingTop: '50px' }}>

                                <button style={{ border: '2px solid #E9CE03', height: '150px', width: '285px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', backgroundColor: 'white', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
                                    <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', alignItems: 'center', paddingTop: '40px', paddingLeft: '15px' }}>
                                        <img style={{ height: '35px', width: '35px' }} src={Objetiva} alt="Objetiva"></img>
                                        <text>Múltipla escolha</text>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', paddingTop: '35px', gap: '10px', margin: '5px' }}>

                                        <div style={{ backgroundColor: '#D9D9D9', height: '20px', width: '150px', borderRadius: '5px', display: 'flex', paddingLeft: '5px' }}>
                                            <img style={{ height: '15px', width: '15px' }} src={AbaFechar} alt="Fechar"></img>
                                        </div>
                                        <div style={{ backgroundColor: '#D9D9D9', height: '20px', width: '150px', borderRadius: '5px', display: 'flex', paddingLeft: '5px' }}>
                                            <img style={{ height: '15px', width: '15px' }} src={checkBoxV} alt="Checkbox V"></img>
                                        </div>
                                        <div style={{ backgroundColor: '#D9D9D9', height: '20px', width: '150px', borderRadius: '5px', display: 'flex', paddingLeft: '5px' }}>
                                            <img style={{ height: '15px', width: '15px' }} src={AbaFechar} alt="Fechar"></img>
                                        </div>
                                    </div>
                                </button>

                                {/* Similar button structures for other activity types can be added here */}

                            </div>

                        </div>
                    </div>

                </div>

                <div>

                    <textarea placeholder="Adicione uma questão:" style={{ border: 'none', width: '400px', height: '200px', display: 'flex', justifyContent: 'center', paddingTop: '25%', fontSize: '20px', outline: 'none' }}></textarea>

                    <div style={{ height: '170px', width: '414px', border: '2px solid #D9D9D9', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                        <img src={adicionarImg} alt="Adicionar Imagem" style={{ maxHeight: '100%', maxWidth: '100%' }} />

                    </div>

                    <div style={{ height: '390px', width: '414px', backgroundColor: '#E9CE03', display: 'flex', justifyContent: 'center', paddingTop: '10px', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>

                        {/* Button structure for content addition */}
                        <button style={{ height: '52px', width: '302px', backgroundColor: '#FFFFFF', border: 'none', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px' }}>
                            <text style={{ fontSize: '20px' }}>A</text>
                            <text>Adicionar o conteúdo</text>

                            <img src={checkBox} alt="Checkbox"></img>

                            <button style={{ border: 'none', background: 'transparent' }}>
                                <img style={{ height: '20px', width: '20px' }} src={AbaFechar} alt="Fechar"></img>
                            </button>
                        </button>

                        {/* Similar buttons can be added for other content options */}
                    </div>

                </div>

            </div>

            <Navegacao></Navegacao>

        </Container>
    );
};

export default MontagemAtividades;

