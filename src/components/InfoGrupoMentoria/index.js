import * as C from './style';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import fotoGrupo from '../../assets/Ellipse (1).png';
import fotoMentor from '../../assets/Ellipse (1).png';
import iconeMentor from '../../assets/mentoria.png';
import estrela from '../../assets/Star rate.png';
import { useMediaQuery } from '@mui/material';
import matematica from '../../assets/Matematica.png';

const InfoGrupoMentoria = ({ id }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [mentorData, setMentorData] = useState(null);
  const [grupoData, setGrupoData] = useState(null);

  useEffect(() => {
    const fetchMentorData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/v1/studyfy/mentorGrupo/${id}`);
        setMentorData(response.data.mentor); // Assume que você deseja o primeiro mentor
        console.log(response.data.mentor);
        
      } catch (error) {
        console.error("Erro ao buscar os dados do mentor:", error);
      }
    };

    const fetchGrupoData = async () => {
      try {
        console.log('oioiio');
        
        const response = await axios.get(`http://localhost:8080/v1/studyfy/mentoria/${id}`); // Novo endpoint
        console.log(response);
        setGrupoData(response.data.grupo[0]); // Assume que você deseja o primeiro grupo
        console.log(grupoData);
        
      } catch (error) {
        console.error("Erro ao buscar os dados do grupo:", error);
      }
    };

    fetchMentorData();
    fetchGrupoData();
  }, [id]);

  return (
    <C.InfoGrupo>
      {isDesktop ? (
        <>
          <C.IntroducaoGrupo>
            <C.IntroGrupoDiv>
              <C.FotoGrupoDiv>
                <C.IconeGrupo src={fotoGrupo} alt='foto do grupo' />
                <C.FotoMateriaDiv>
                  <C.FotoMateria src={matematica} alt='matéria de matemática' />
                </C.FotoMateriaDiv>
              </C.FotoGrupoDiv>
              <C.IntroGrupo>
                <C.NomeGrupo>{grupoData ? grupoData.nome : "Carregando..."}</C.NomeGrupo>
                <C.Membros>Membros {grupoData ? `${grupoData.quantidade_membros}/${grupoData.capacidade}` : "Carregando..."}</C.Membros>
              </C.IntroGrupo>
              <C.fundoAmarelo />
            </C.IntroGrupoDiv>
            <C.MentorDiv>
              <C.MentorGrupo>
                <C.IconeMentor alt='icone de mentor' src={iconeMentor} />
                <C.MentorGrupoTitulo>Mentor do grupo</C.MentorGrupoTitulo>
              </C.MentorGrupo>
              <C.CampoInfoMentor>
                <C.DadosMentor>
                  <C.FotoMentor alt='foto do mentor' src={fotoMentor} />
                  <C.InfoMentor>
                    <C.NomeMentor>{mentorData ? mentorData.mentor_nome : "Carregando..."}</C.NomeMentor>
                    <C.TipoMentor>{mentorData ? mentorData.mentor_tipo : "Carregando..."}</C.TipoMentor>
                  </C.InfoMentor>
                </C.DadosMentor>
                <C.AvaliacaoMentor>
                  <C.AvaliacaoMedia>4.5</C.AvaliacaoMedia>
                  <C.Barra />
                  <C.Avaliacao>
                    <C.Estrelas>
                      <C.Estrela alt='estrela' src={estrela} />
                      <C.Estrela alt='estrela' src={estrela} />
                      <C.Estrela alt='estrela' src={estrela} />
                      <C.Estrela alt='estrela' src={estrela} />
                      <C.Estrela alt='estrela' src={estrela} />
                    </C.Estrelas>
                    <C.QuantidadeAvaliacao>(214) avaliações</C.QuantidadeAvaliacao>
                  </C.Avaliacao>
                </C.AvaliacaoMentor>
              </C.CampoInfoMentor>
            </C.MentorDiv>
          </C.IntroducaoGrupo>
          <div style={{ justifyContent: 'space-between', paddingTop: '6%', width: '30%', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <C.OpcoesGrupo>
              <C.BotaoSair>
                <C.Sair>Sair do grupo</C.Sair>
              </C.BotaoSair>
              <C.BotaoSair>
                <C.Sair>Sair do grupo</C.Sair>
              </C.BotaoSair>
            </C.OpcoesGrupo>
            <C.DescricaoDiv>
              <C.Descricao>{grupoData ? grupoData.descricao : "Carregando..."}</C.Descricao>
            </C.DescricaoDiv>
          </div>
        </>
      ) : (
        <>
          <C.IntroducaoGrupo>
            <C.NomeGrupo>{grupoData ? grupoData.nome : "Carregando..."}</C.NomeGrupo>
            <C.Membros>{grupoData ? `${grupoData.numero_membros}/${grupoData.capacidade}` : "Carregando..."}</C.Membros>
            <C.FotoGrupoDiv>
              <img src={fotoGrupo} alt='foto do grupo' style={{ width: '60%', height: '60%' }} />
              <C.Membros>{grupoData ? `${grupoData.numero_membros}/${grupoData.capacidade}` : "Carregando..."}</C.Membros>
            </C.FotoGrupoDiv>
            <C.DescricaoDiv>
              <C.Descricao>dsds dsd fddgfg dfd fdfdfdf gfgf gfgfg</C.Descricao>
            </C.DescricaoDiv>
          </C.IntroducaoGrupo>
          <C.MentorDiv>
            <C.MentorGrupo>
              <img alt='icone de mentor' style={{ height: '80%', width: '20%' }} src={iconeMentor} />
              <span>Mentor do grupo</span>
            </C.MentorGrupo>
            <C.CampoInfoMentor>
              <C.DadosMentor>
                <img alt='foto do mentor' style={{ height: '80%', width: '22%' }} src={fotoMentor} />
                <C.InfoMentor>
                  <h4 style={{ fontSize: '3.5vw' }}>{mentorData ? mentorData.mentor_nome : "Carregando..."}</h4>
                  <span style={{ fontSize: '2.5vw' }}>{mentorData ? mentorData.tipo_mentor : "Carregando..."}</span>
                </C.InfoMentor>
              </C.DadosMentor>
              <C.AvaliacaoMentor>
                <span style={{ fontWeight: 'bold' }}>4.5</span>
                <C.Barra />
                <C.Avaliacao>
                  <C.Estrelas>
                    <C.Estrela alt='estrela' src={estrela} />
                    <C.Estrela alt='estrela' src={estrela} />
                    <C.Estrela alt='estrela' src={estrela} />
                    <C.Estrela alt='estrela' src={estrela} />
                    <C.Estrela alt='estrela' src={estrela} />
                  </C.Estrelas>
                  <span style={{ fontSize: '2vw' }}>(214) avaliações</span>
                </C.Avaliacao>
              </C.AvaliacaoMentor>
            </C.CampoInfoMentor>
          </C.MentorDiv>
        </>
      )}
    </C.InfoGrupo>
  );
};

export default InfoGrupoMentoria;
