import React, { useState } from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';
import Silvia from '../assets/silvia.png';
import '../style.css';

const Configuracao = () => {
    const [efeitosSonoros, setEfeitosSonoros] = useState(false);
    const [modoEscuro, setModoEscuro] = useState(false);
    const [lembretesSMS, setLembretesSMS] = useState(false);
    const [lembretesEmail, setLembretesEmail] = useState(false);    
    const [notificacaoMembroGrupo, setNotificacaoMembroGrupo] = useState(false); // Novo estado


    const toggleEfeitosSonoros = () => setEfeitosSonoros(!efeitosSonoros);
    const toggleModoEscuro = () => setModoEscuro(!modoEscuro);
    const toggleLembretesSMS = () => setLembretesSMS(!lembretesSMS);
    const toggleLembretesEmail = () => setLembretesEmail(!lembretesEmail);
    const toggleNotificacaoMembroGrupo = () => setNotificacaoMembroGrupo(!notificacaoMembroGrupo); // Novo toggle


    const [isFocused, setIsFocused] = useState({
        nome: false,
        senha: false,
        email: false
    });

    const handleFocus = (field) => {
        setIsFocused((prev) => ({ ...prev, [field]: true }));
    };

    const handleBlur = (field, value) => {
        setIsFocused((prev) => ({ ...prev, [field]: value !== '' }));
    };

    const toggleStyles = (isActive) => ({
        width: '40px',
        height: '20px',
        backgroundColor: isActive ? '#4CAF50' : '#ccc',
        borderRadius: '15px',
        position: 'relative',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        display: 'flex',
        alignItems: 'center',
        padding: '0 2px',
    });

    const knobStyles = (isActive) => ({
        width: '28px',
        height: '28px',
        backgroundColor: 'white',
        borderRadius: '50%',
        position: 'absolute',
        top: '1px',
        left: isActive ? '20px' : '1px',
        transition: 'left 0.3s',
        border: '2px solid #E0E0E0',
        marginTop: '-5px',
        marginLeft: '-7px'
    });

    return (
        <Container style={{ backgroundColor: 'white', alignItems: 'center' }}>
            <div style={{ flexGrow: '1', width: '100%', paddingInline: '5vw', overflowY: 'auto', paddingTop: '5vh' }}>
                <div style={{ height: '25%', width: '100%', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <img src={Silvia} alt="Perfil" className="perfil-image" style={{ zIndex: 'auto', position: 'absolute', top: '0%', left: '34%' }} />
                    <div
                        style={{
                            backgroundColor: '#FEE101', borderRadius: '10px', height: '70%', width: '100%',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                    >
                        <h2 style={{ fontWeight: 'bold', marginTop: '50px' }}>Silvia Santos</h2>
                    </div>
                </div>

                {/* Campo Nome */}
                <div style={{ position: 'relative', width: '100%', marginTop: '20px' }}>
                    <label htmlFor="nomeInput" style={{
                        position: 'absolute', top: isFocused.nome ? '-10px' : '15px', left: '10px', fontSize: isFocused.nome ? '12px' : '16px', color: 'gray', transition: 'all 0.2s ease',
                        backgroundColor: isFocused.nome ? 'white' : 'transparent', padding: '0 5px', pointerEvents: 'none', marginTop: '1px'
                    }}>Nome</label>
                    <input id="nomeInput" type="text" onFocus={() => handleFocus('nome')} onBlur={(e) => handleBlur('nome', e.target.value)} style={{
                        backgroundColor: 'white', color: 'black', padding: '10px', width: '100%', fontSize: '16px',
                        borderRadius: '3vw', border: '1px solid #ccc', outline: 'none'
                    }} />
                </div>

                {/* Campo Senha */}
                <div style={{ position: 'relative', width: '100%', marginTop: '10px' }}>
                    <label htmlFor="senhaInput" style={{
                        position: 'absolute', top: isFocused.senha ? '-10px' : '15px', left: '10px', fontSize: isFocused.senha ? '12px' : '16px', color: 'gray', transition: 'all 0.2s ease',
                        backgroundColor: isFocused.senha ? 'white' : 'transparent', padding: '0 5px', pointerEvents: 'none', marginTop: '1px'
                    }}>Senha</label>
                    <input id="senhaInput" type="password" onFocus={() => handleFocus('senha')} onBlur={(e) => handleBlur('senha', e.target.value)} style={{
                        backgroundColor: 'white', color: 'black', padding: '10px', width: '100%', fontSize: '16px',
                        borderRadius: '3vw', border: '1px solid #ccc', outline: 'none'
                    }} />
                </div>

                {/* Campo Email */}
                <div style={{ position: 'relative', width: '100%', marginTop: '10px' }}>
                    <label htmlFor="emailInput" style={{
                        position: 'absolute', top: isFocused.email ? '-10px' : '15px', left: '10px', fontSize: isFocused.email ? '12px' : '16px', color: 'gray',
                        transition: 'all 0.2s ease', backgroundColor: isFocused.email ? 'white' : 'transparent', padding: '0 5px', pointerEvents: 'none', marginTop: '1px'
                    }}>Email</label>
                    <input id="emailInput" type="email" onFocus={() => handleFocus('email')} onBlur={(e) => handleBlur('email', e.target.value)} style={{
                        backgroundColor: 'white', color: 'black', padding: '10px', width: '100%', fontSize: '16px',
                        borderRadius: '3vw', border: '1px solid #ccc', outline: 'none'
                    }} />
                </div>

                {/* Botão Acompanhamento e Sair */}
                <button style={{
                    marginTop: '20px', width: '100%', padding: '10px', fontSize: '20px', fontWeight: 'bold', color: 'black', backgroundColor: '#FEE101',
                    border: 'none', borderRadius: '5vw', cursor: 'pointer', border: '1px solid black', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)'
                }}>Acompanhamento</button>
                <button style={{
                    marginTop: '10px', width: '100%', padding: '10px', fontSize: '20px', fontWeight: 'bold', color: 'black', backgroundColor: '#FEE101',
                    border: 'none', borderRadius: '5vw', cursor: 'pointer', border: '1px solid black', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)'
                }}>Sair</button>

                <h1 style={{
                    marginTop: '5%', fontSize: '20px', textAlign: 'left', color: 'black', fontWeight: 'bold', marginTop: '20%', marginLeft: '10px'
                }}>Geral</h1>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', borderRadius: '12px', border: '1px solid #E0E0E0', overflow: 'hidden', marginTop: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', padding: '15px', borderBottom: '1px solid #E0E0E0', justifyContent: 'space-between', textAlign: 'left' }}>
                        <h2 style={{ fontSize: '16px' }}>Efeitos Sonoros</h2>
                        <div style={toggleStyles(efeitosSonoros)} onClick={toggleEfeitosSonoros}>
                            <div style={knobStyles(efeitosSonoros)}></div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', padding: '15px', borderBottom: '1px solid #E0E0E0', justifyContent: 'space-between', textAlign: 'left' }}>
                        <h2 style={{ fontSize: '16px' }}>Modo Escuro</h2>
                        <div style={toggleStyles(modoEscuro)} onClick={toggleModoEscuro}>
                            <div style={knobStyles(modoEscuro)}></div>
                        </div>
                    </div>
                </div>

                <h1 style={{
                    fontSize: '20px', textAlign: 'left', color: 'black', fontWeight: 'bold', marginTop: '20%', marginLeft: '10px'
                }}>Notificações</h1>
                  <button style={{
                    marginTop: '10px', width: '100%', padding: '10px', fontSize: '20px', fontWeight: 'bold', color: 'black', backgroundColor: '#FEE101',
                    border: 'none', borderRadius: '5vw', cursor: 'pointer', border: '1px solid black', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)'
                }}>Programar lembrete</button>


                <div style={{ display: 'grid', gridTemplateColumns: '1fr', borderRadius: '12px', border: '1px solid #E0E0E0', overflow: 'hidden', marginTop: '15%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', padding: '15px', borderBottom: '1px solid #E0E0E0', justifyContent: 'space-between', textAlign: 'left' }}>
                        <h2 style={{ fontSize: '16px' }}>Lembretes por SMS</h2>
                        <div style={toggleStyles(lembretesSMS)} onClick={toggleLembretesSMS}>
                            <div style={knobStyles(lembretesSMS)}></div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', padding: '15px', borderBottom: '1px solid #E0E0E0', justifyContent: 'space-between', textAlign: 'left' }}>
                        <h2 style={{ fontSize: '16px' }}>Lembrete por Email</h2>
                        <div style={toggleStyles(lembretesEmail)} onClick={toggleLembretesEmail}>
                            <div style={knobStyles(lembretesEmail)}></div>
                        </div>
                    </div>


                </div>
                <h1 style={{
                    fontSize: '20px', textAlign: 'left', color: 'black', fontWeight: 'bold', marginTop: '15%', marginLeft: '10px'
                }}>Lembretes</h1>


                 {/* Novo toggle para Notificação de Membro do Grupo */}
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr', borderRadius: '12px', border: '1px solid #E0E0E0', overflow: 'hidden', marginTop: '3%' }}>
    <div style={{ display: 'flex', alignItems: 'center', padding: '15px', borderBottom: '1px solid #E0E0E0', justifyContent: 'space-between', textAlign: 'left' }}>
        <h2 style={{ fontSize: '16px' }}>Um membro do seu grupo de <br/>mentoria enviou uma dúvida </h2>
        <div style={toggleStyles(notificacaoMembroGrupo)} onClick={toggleNotificacaoMembroGrupo}>
            <div style={knobStyles(notificacaoMembroGrupo)}></div>
        </div>
    </div>
</div>
</div>
            <Navegacao />
        </Container>
    );
};

export default Configuracao;
