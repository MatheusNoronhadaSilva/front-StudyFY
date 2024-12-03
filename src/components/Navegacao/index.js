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
import usuario from '../../assets/user.png';
import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AbasGrupoMentoria = () => {
  const [imgAtiva, setImgAtiva] = useState(null);
  const [imgExtraAtiva, setImgExtraAtiva] = useState(null);
  const [mostrarImagens, setMostrarImagens] = useState(false);
  const [urlsNavegacao, setUrlsNavegacao] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const idMentor = localStorage.getItem("id_mentor");
    const idGrupo = localStorage.getItem("id_grupo");

    const urlsNavegacaoBase = [
      'tela-atividades',
      'caderno-virtual',
      'rank',
      'perfil',
      'notificacao',
      'chat-privado',
      'chatIA',
      'visualizar-mentorias',
      'ajuda',
    ];

    if (idMentor && idMentor !== "0" && (!idGrupo || idGrupo === "0")) {
      urlsNavegacaoBase[7] = 'criar-grupo-mentoria';
    } else if (idGrupo && idGrupo !== "0") {
      urlsNavegacaoBase[7] = `grupo-mentoria/${idGrupo}`;
    } else {
      urlsNavegacaoBase[7] = 'visualizar-mentorias';
    }

    setUrlsNavegacao(urlsNavegacaoBase);
  }, []); // Atualiza quando o componente é montado

  const ClickImg = (index) => {
    setImgAtiva(index);
    setImgExtraAtiva(null);
    localStorage.setItem('imgAtiva', index);
  };

  const handleNavigation = (index) => {
    const selectedUrl = `/${urlsNavegacao[index]}`;
    const idGrupo = localStorage.getItem("id_grupo");

    if (index === 7 && idGrupo && idGrupo !== "0") {
      navigate(selectedUrl, { state: { status: 'mentor' } });
    } else {
      navigate(selectedUrl);
    }
  };

  const todasImagens = [
    { src: atividades, label: 'Atividades' },
    { src: caderno, label: 'Caderno Virtual' },
    { src: trofeu, label: 'Troféu' },
    { src: usuario, label: 'Usuário' },
    { src: notificacao, label: 'Notificação' },
    { src: chat, label: 'Chat Privado' },
    { src: chatIA, label: 'Chat IA' },
    { src: mentoria, label: 'Mentoria' },
    { src: duvida, label: 'Dúvidas' },
  ];

  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <C.ContainerNavegacao>
      {isDesktop ? (
        <>
          <C.nomeApp>Study<C.nomeAppAmarelo>FY</C.nomeAppAmarelo></C.nomeApp>
          <C.DivImgs>
            {todasImagens.map((item, index) => (
              <C.ImgDiv
                key={index}
                imgAtiva={imgAtiva}
                index={index}
                onClick={() => {
                  ClickImg(index);
                  handleNavigation(index);
                }}
                style={{
                  backgroundColor: imgAtiva === index ? '#FFFCE6' : 'transparent',
                  border: imgAtiva === index ? 'solid 1px #fee101' : 'transparent',
                }}
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
            {todasImagens.map((item, index) => (
              <C.ImgDiv
                key={index}
                imgAtiva={imgAtiva}
                index={index}
                onClick={() => {
                  ClickImg(index);
                  handleNavigation(index);
                }}
                style={{
                  backgroundColor: imgAtiva === index ? '#FFFCE6' : 'transparent',
                  border: imgAtiva === index ? 'solid 1px #fee101' : 'transparent',
                }}
              >
                <C.CampoIcone>
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
          <img src={mais} style={{ marginRight: '5vw' }} alt="Mais" onClick={() => setMostrarImagens((prev) => !prev)} />
        </>
      )}
    </C.ContainerNavegacao>
  );
};

export default AbasGrupoMentoria;