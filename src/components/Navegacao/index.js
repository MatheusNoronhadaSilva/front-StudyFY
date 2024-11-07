// src/components/Box.js
import React, { useState, useEffect } from 'react';
import * as C from './style';
import atividades from '../../assets/atividades.png';
import caderno from '../../assets/caderno.png';
import trofeu from '../../assets/trofeu.png';
import duvida from '../../assets/duvida.png';
import notificacao from '../../assets/notificacao.png';
import mais from '../../assets/mais_preto.png';
import chat from '../../assets/chat.png';
import chatIA from '../../assets/chatIA.png';
import mentoria from '../../assets/mentoria.png';
import usuario from '../../assets/user.png'
import { useMediaQuery } from '@mui/material';

const AbasGrupoMentoria = () => {
  const [imgAtiva, setImgAtiva] = useState(null); // Índice ativo para as imagens principais
  const [imgExtraAtiva, setImgExtraAtiva] = useState(null); // Índice ativo para as imagens extras
  const [mostrarImagens, setMostrarImagens] = useState(false);

  useEffect(() => {
    const storedImgAtiva = localStorage.getItem('imgAtiva');
    if (storedImgAtiva !== null) {
      setImgAtiva(parseInt(storedImgAtiva, 10)); // Converte o valor de volta para número
    }
  }, []);

  const ClickImg = (index) => {
    setImgAtiva(index); // Define a imagem ativa nas imagens principais
    setImgExtraAtiva(null); // Reseta a imagem extra ativa ao clicar na imagem principal
    localStorage.setItem('imgAtiva', index); // Salva o índice no localStorage
  };

  const ClickImgExtra = (index) => {
    setImgExtraAtiva(index); // Define a imagem ativa nas imagens extras
    setImgAtiva(null); // Reseta a imagem principal ativa ao clicar na imagem extra
    localStorage.setItem('imgExtraAtiva', index); // Salva o índice no localStorage
  };

  const imagens = [
    { src: atividades, label: 'Atividades' },
    { src: caderno, label: 'Caderno Virtual' },
    { src: trofeu, label: 'Troféu' },
    { src: usuario, label: 'Usuário' },
    { src: notificacao, label: 'Notificação' },
  ];

  const imagensExtras = [
    { src: chat, label: 'Chat Privado' },
    { src: chatIA, label: 'Chat IA' },
    { src: mentoria, label: 'Mentoria' },
    { src: duvida, label: 'Dúvidas' },
  ];

  const todasImagens = imagens.concat(imagensExtras);  

  const urlsNavegacao = [
    'atividades',
    'caderno-virtual',
    'rank',
    'emblemas',
    'notificacao',
    'chat-privado',
    'chatIA',
    'visualizar-mentorias',
    'ajuda',
  ]

  const MaisImagens = () => {
    setMostrarImagens((prev) => !prev); // Alterna a visibilidade da div
  };

  const isDesktop =  useMediaQuery('(min-width: 768px)')

  return (
    <C.ContainerNavegacao>

      { isDesktop ? (

<>
        <C.nomeApp>Study<C.nomeAppAmarelo>FY</C.nomeAppAmarelo></C.nomeApp>
        
        <C.DivImgs>
        {todasImagens.map((item, index) => (
          <C.ImgDiv
            key={index}
            imgAtiva={imgAtiva}
            index={index}
            onClick={() => ClickImg(index)}
            style={{ backgroundColor: imgAtiva === index ? '#FFFCE6' : 'transparent', border: imgAtiva === index ? 'solid 1px #fee101' : 'transparent' }}
          >
            <C.CampoIcone to={`/${urlsNavegacao[index]}`}>
            <C.AreaImg>
              <C.imgIcone src={item.src} alt={`Imagem ${index + 1}`} />
            </C.AreaImg>
            <C.AreaDescricao>
              <C.DescricaoIcone>{item.label}</C.DescricaoIcone>
            </C.AreaDescricao>
            </C.CampoIcone>
          </C.ImgDiv>
        ))}
        </C.DivImgs>
        </>
      ) : (

        <>
        <C.DivImgs>
        {imagens.map((item, index) => (
          <C.ImgDiv
            key={index}
            onClick={() => ClickImg(index)}
            style={{ backgroundColor: imgAtiva === index ? '#d9d9d9' : 'transparent' }}
          >
            <C.CampoIcone to={`/${urlsNavegacao[index]}`}>
              <C.imgIcone src={item.src} alt={`Imagem ${index + 1}`} />
            </C.CampoIcone>
          </C.ImgDiv>
        ))}
        <C.DivImagensExtras mostrar={mostrarImagens}>
          {imagensExtras.map((item, index) => (
            <C.ImgDivExtras // Aplicando estilo na imagem extra também
              key={index}
              onClick={() => ClickImgExtra(index)}
              style={{ backgroundColor: imgExtraAtiva === index ? '#d9d9d9' : 'transparent' }}
            >
              <C.CampoIcone to={`/${urlsNavegacao[index + 5]}`}>
                <C.imgIcone src={item.src} alt={`Imagem Extra ${index + 1}`} />
              </C.CampoIcone>
            </C.ImgDivExtras>
          ))}
        </C.DivImagensExtras>
      </C.DivImgs>
      <img src={mais} style={{ marginRight: '5vw' }} alt="Mais" onClick={MaisImagens} />
      </>
      )}
    </C.ContainerNavegacao>
  );
};

export default AbasGrupoMentoria;
