// CriarGrupo.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import * as C from "./style"; // Importa os styled-components com alias "C"
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import swal from "sweetalert";

const CriarGrupo = () => {
  const [materias, setMaterias] = useState([]);
  const [imagens, setImagens] = useState([]);
  const [series, setSeries] = useState([]);
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const [menuSuspenso, setMenuSuspenso] = useState(false);
  const [capacidade, setCapacidade] = useState("");
  const [nome, setNome] = useState(""); // Nome do grupo
  const [descricao, setDescricao] = useState(""); // Descrição do grupo
  const [materia, setMateria] = useState(""); // Matéria selecionada
  const [serieMin, setSerieMin] = useState(1); // Série-min
  const [serieMax, setSerieMax] = useState(3); // Série-max
  const [mentorId, setMentorId] = useState(1); // ID do mentor (exemplo de valor fixo, pois é obrigatório)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchMaterias = async () => {
      try {
        const response = await axios.get("http://localhost:8080/v1/studyfy/materias");
        if (response.status === 200) {
          setMaterias(response.data.materias);
        }
      } catch (error) {
        console.error("Erro ao buscar matérias:", error);
      }
    };

    const fetchImagens = async () => {
      try {
        const response = await axios.get("http://localhost:8080/v1/studyfy/imagens/grupo-mentoria");
        if (response.status === 200) {
          setImagens(response.data.imagens);
        }
      } catch (error) {
        console.error("Erro ao buscar imagens:", error);
      }
    };

    const fetchSeries = async () => {
      try {
        const response = await axios.get("http://localhost:8080/v1/studyfy/series");
        if (response.status === 200) {
          console.log(response.data.series);
          setSeries(response.data.series);
        }
      } catch (error) {
        console.error("Erro ao buscar séries:", error);
      }
    };

    fetchSeries();
    fetchMaterias();
    fetchImagens();
  }, []);

  const toggleMenuSuspenso = () => {
    setMenuSuspenso(!menuSuspenso);
  };

  const selecionarImagem = (imagem) => {
    setImagemSelecionada(imagem);
    setMenuSuspenso(false); // Fecha o menu suspenso ao selecionar a imagem
  };

  const handleCapacidadeChange = (e) => {
    const valor = e.target.value;
    if (valor >= 0 && valor <= 35) {
      setCapacidade(valor);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Cria o objeto JSON com as informações do grupo
    const grupoData = {
      nome, // Nome do grupo
      capacidade: parseInt(capacidade), // Capacidade do grupo
      descricao, // Descrição do grupo
      materia: parseInt(materia), // Matéria selecionada
      serie_min: serieMin, // Série mínima
      serie_max: serieMax, // Série máxima
      imagem_id: imagemSelecionada ? imagemSelecionada.id : null, // ID da imagem selecionada (se houver)
      mentor_id: mentorId, // ID do mentor
    };

    try {
      // Faz a chamada POST para o endpoint

      console.log('ioioio');
      console.log(grupoData);
      
      
      const response = await axios.post("http://localhost:8080/v1/studyfy/mentorias", grupoData);

      console.log(response.data.grupo.id);
      
      if (response.status === 201) {
        swal("Parabéns", "Grupo criado com sucesso", "success");

        const idGrupoCriado = response.data.grupo.id

        localStorage.setItem("id_grupo", idGrupoCriado);
        navigate(`/grupo-mentoria/${idGrupoCriado}`, { state: { status: 'mentor' } });
      } else {
        swal("OOooopss", "Houve um problema na criação de um grupo de mentoria", "error");
      }
    } catch (error) {
      swal({
        title: "Error",
        text: "Falha na tentativa de criar um grupo de mentoria, verifique os dados e tente novamente",
        icon: "error",
        className: "swal-centralizar-texto", // Classe customizada
      });
      
    }
  };

  return (
    <C.CampoCriar>
      <C.Title>Crie um grupo de mentoria e ajude outros alunos</C.Title>

      {/* Campo de escolher imagem com menu suspenso */}
      <C.Avatar onClick={toggleMenuSuspenso}>
        {imagemSelecionada ? (
          <C.imagemSelecionada src={imagemSelecionada.caminho_imagem} alt={imagemSelecionada.nome_imagem} />
        ) : (
          <C.AvatarIcon>+</C.AvatarIcon>
        )}
      </C.Avatar>
      {menuSuspenso && (
        <C.MenuSuspenso>
          {imagens.map((imagem) => (
            <C.ImagemItem key={imagem.id} onClick={() => selecionarImagem(imagem)}>
              <img src={imagem.caminho_imagem} alt={imagem.nome_imagem} />
            </C.ImagemItem>
          ))}
        </C.MenuSuspenso>
      )}

      <C.Form>
        <C.LeftColumn>
          <C.Label>
            Nome do grupo
            <C.Input
              type="text"
              maxLength={30}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </C.Label>
          <C.Label>
            Descrição
            <C.Textarea
              maxLength={300}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </C.Label>
        </C.LeftColumn>
        <C.RightColumn>
          <C.Label>
            Série-min
            <C.Select
              value={serieMin}
              onChange={(e) => {
                const valor = parseInt(e.target.value, 10);
                setSerieMin(valor);

                // Ajusta a série máxima automaticamente, se necessário
                if (valor > serieMax) {
                  setSerieMax(valor);
                }
              }}
            >
              <option value="">Selecione</option>
              {series.map((serie) => (
                <option key={serie.id} value={serie.id}>
                  {serie.nome}
                </option>
              ))}
            </C.Select>
          </C.Label>
          <C.Label>
            Série-max
            <C.Select
              value={serieMax}
              onChange={(e) => {
                const valor = parseInt(e.target.value, 10);
                setSerieMax(valor);

                // Garante que a série mínima não seja maior que a máxima
                if (valor < serieMin) {
                  setSerieMin(valor);
                }
              }}
            >
              <option value="">Selecione</option>
              {series.map((serie) => (
                <option key={serie.id} value={serie.id}>
                  {serie.nome}
                </option>
              ))}
            </C.Select>
          </C.Label>

          <C.Label>
            Matéria
            <C.Select
              value={materia}
              onChange={(e) => setMateria(e.target.value)}
            >
              <option value="">Selecione</option>
              {materias.map((materia) => (
                <option key={materia.id} value={materia.id}>
                  {materia.nome_materia}
                </option>
              ))}
            </C.Select>
          </C.Label>
          <C.Label>
            Capacidade
            <C.Input
              type="number"
              value={capacidade}
              onChange={handleCapacidadeChange}
              min="0"
              max="35"
            />
          </C.Label>
        </C.RightColumn>
      </C.Form>
      <C.Button onClick={handleSubmit}>Criar grupo</C.Button>
    </C.CampoCriar>
  );
};

export default CriarGrupo;
