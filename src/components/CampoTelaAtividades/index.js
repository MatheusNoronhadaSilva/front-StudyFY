import * as C from './style';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import withReactContent from "sweetalert2-react-content";
import Swal from 'sweetalert2';
import fundamentalI from '../../assets/fundamentalI.png'
import fundamentalII from '../../assets/fundamentalII.png'
import ensinoMedio from '../../assets/ensino medio.png'

const CampoTelaAtividade = () => {

    const MySwal = withReactContent(Swal);

    const navigate = useNavigate();

    const [apiData, setApiData] = useState(null); // Dados da API
    const [dadosMateriaAluno, setDadosMateriaAluno] = useState(null)
    const [materiaAtual, setMateriaAtual] = useState(null)
    const [serieAtual, setSerieAtual] = useState(null)
    const [selectedActivity, setSelectedActivity] = useState(null); // Atividade selecionada
    const [currentTopic, setCurrentTopic] = useState(''); // Tópico atual
    const [currentColor, setCurrentColor] = useState(''); // Cor atual
    const [serieAluno, setSerieAluno] = useState(null)
    const [series, setSeries] = useState(null)
    const [Atividade, setAtividade] = useState(false)
    const campoAtividadesRef = useRef(null);
    const subTopicRefs = useRef([])
    const idAluno = localStorage.getItem("userId")

    const TelaQuestoes = (atividadeId) => {

        navigate(`/questoes`, { state: { idAtividade: atividadeId, corAtual: currentColor } });
    };

    useEffect(() => {
        const fetchMateriasAluno = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/v1/studyfy/alunos/materias/${idAluno}`);
                if (response.status === 200) {
                    const materias = response.data.materias;
                    setDadosMateriaAluno(materias);

                    // Defina a primeira matéria automaticamente como padrão
                    if (materias.length > 0) {
                        setMateriaAtual(materias[0]);
                    }
                }
            } catch (error) {
                console.log('Erro ao buscar matérias do aluno:', error);
            }
        };

        fetchMateriasAluno();
    }, []);

    useEffect(() => {
        const fetchSerieAluno = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/v1/studyfy/series/aluno/${idAluno}`);
                if (response.status === 200) {

                    setSerieAluno(response.data.serieAluno[0])

                    setSerieAtual(response.data.serieAluno[0])
                    
                    setSeries(response.data.series)

                }
            } catch (error) {
                console.log('Erro ao buscar matérias do aluno:', error);
            }
        };

        fetchSerieAluno();
    }, []);


    const showSelectionAlert = () => {
        MySwal.fire({
            title: "Escolha uma de suas matérias",
            width: 850,
            heightAuto: true,
            html: (

                <C.CardsContainer>
                    {dadosMateriaAluno.map(materia => (
                        <C.CardMateria key={materia.id}
                            onClick={() => {setMateriaAtual(materia);                                               MySwal.close();
                                MySwal.close();
                            }}>
                            <C.CardIconeMateria src={materia.imagem_materia}></C.CardIconeMateria>
                            <C.CardMateriaNome>{materia.materia}</C.CardMateriaNome>
                        </C.CardMateria>
                    ))}
                </C.CardsContainer>
            ),
            showConfirmButton: false,
        });
    };




    // Função para buscar dados da API
    useEffect(() => {
        const fetchData = async () => {
            try {

                console.log(materiaAtual);
                console.log(serieAtual);
                const response = await axios.get(`http://localhost:8080/v1/studyfy/atividades/${materiaAtual.id}/${serieAtual.id}`);
                if (response.status === 200) {
                    const data = response.data.atividades;

                    const processedActivities = await Promise.all(
                        data.map(async (atividade) => {
                            try {
                                const statusResponse = await axios.get(
                                    `http://localhost:8080/v1/studyfy/atividadesFeitas/${atividade.id_da_atividade}/${idAluno}`
                                );

                                // Verifica se a atividade já foi feita
                                atividade.statusAtividade =
                                    statusResponse.data.statusAtividade.length > 0 ? 1 : 0;
                            } catch (error) {
                                console.error(`Erro ao verificar status da atividade ${atividade.id_da_atividade}:`, error);
                                atividade.statusAtividade = 0; // Define como 0 em caso de erro
                            }
                            return atividade;
                        })
                    );

                    // Transformar os dados para a estrutura necessária
                    const topics = transformApiDataToTopics(processedActivities);

                    setApiData({ series: '9º Fund 2', topics });
                    setCurrentTopic(topics[0]?.topic || '');
                    setCurrentColor(topics[0]?.color || '');
                }
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData();
    }, [materiaAtual, serieAtual]);


    // Função para transformar os dados da API
    const transformApiDataToTopics = (data) => {

        const groupedByTopic = data.reduce((acc, activity) => {
            const topicIndex = acc.findIndex(t => t.topic === activity.nome_do_assunto);

            if (topicIndex >= 0) {

                // Adiciona sub-assunto no tópico existente
                const subTopicIndex = acc[topicIndex].subTopics.findIndex(st => st.name === activity.nome_do_sub_assunto);
                if (subTopicIndex >= 0) {

                    // Adiciona a atividade com o ID
                    acc[topicIndex].subTopics[subTopicIndex].activities.push({
                        id: activity.id_da_atividade,
                        title: activity.titulo_da_atividade,
                        descricao: activity.descricao_da_atividade,
                        statusAtividade: activity.statusAtividade

                    });
                } else {
                    // Cria novo sub-assunto e adiciona a atividade com o ID
                    acc[topicIndex].subTopics.push({
                        name: activity.nome_do_sub_assunto,
                        activities: [
                            {
                                id: activity.id_da_atividade,
                                title: activity.titulo_da_atividade,
                                descricao: activity.descricao_da_atividade,
                                statusAtividade: activity.statusAtividade
                            }
                        ]
                    });
                }

            } else {
                // Cria um novo tópico
                acc.push({
                    topic: activity.nome_do_assunto,
                    color: activity.cor_do_assunto, // Corrigido o nome do campo
                    subTopics: [
                        {
                            name: activity.nome_do_sub_assunto,
                            activities: [
                                {
                                    id: activity.id_da_atividade,
                                    title: activity.titulo_da_atividade,
                                    statusAtividade: activity.statusAtividade
                                }
                            ]
                        }
                    ]
                });
            }
            return acc;
        }, []);
        return groupedByTopic;
    };


    const handleScroll = () => {
        if (!apiData) return;
        apiData.topics.forEach((topic, topicIndex) => {
            topic.subTopics.forEach((subTopic, subTopicIndex) => {
                const ref = subTopicRefs.current[topicIndex]?.[subTopicIndex];
                const rect = ref ? ref.getBoundingClientRect() : {};

                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    setCurrentTopic(topic.topic);
                    setCurrentColor(topic.color);
                }
            });
        });
    };

    useEffect(() => {
        const container = campoAtividadesRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [apiData]);

    const handleActivityClick = (activity, topicIndex, subTopicIndex) => {
        console.log(activity);

        if (selectedActivity &&
            selectedActivity.activity === activity &&
            selectedActivity.topicIndex === topicIndex &&
            selectedActivity.subTopicIndex === subTopicIndex) {
            setSelectedActivity(null);
        } else {
            setSelectedActivity({ activity, topicIndex, subTopicIndex });
        }
    };

    const handleSeriesSelection = () => {
        if (!series) return;

        // Definindo os intervalos e imagens de cada quadro
        const cards = [
            { range: { start: 1, end: 5 }, image: fundamentalI, ensino: 'Fundamental 1' },
            { range: { start: 6, end: 9 }, image: fundamentalII, ensino: 'Fundamental 2' },
            { range: { start: 10, end: 12 }, image: ensinoMedio, ensino: 'Ensino médio' },
        ];

        MySwal.fire({
            title: "Escolha uma série",
            width: 800,
            html: (
                <C.SeriesContainer>
                    {cards.map((card, index) => {
                        // Filtrar as séries pertencentes ao intervalo do quadro
                        const seriesSubset = series.filter(
                            (serie) =>
                                serie.id >= card.range.start &&
                                serie.id <= card.range.end
                        );

                        // Verificar se todas as séries do quadro estão bloqueadas
                        const isCardLocked = seriesSubset.every(
                            (serie) => serie.id > serieAluno.id
                        );

                        return (
                            <C.SeriesCard
                                key={index}
                                locked={isCardLocked}
                                selected={seriesSubset.some(
                                    (s) => s.id === serieAtual?.id
                                )}
                                onClick={() => {
                                    if (!isCardLocked) {
                                        MySwal.close(); // Fecha o modal ao selecionar qualquer série desbloqueada
                                    }
                                }}
                            >
                                <C.InfoSerie>
                                    <C.IconeSerie src={card.image} alt={`Imagem do quadro ${index + 1}`} />
                                    <C.Ensino>{card.ensino}</C.Ensino>
                                </C.InfoSerie>
                                {seriesSubset.map((serie) => (
                                    <C.SerieItem
                                        key={serie.id}
                                        locked={serie.id > serieAluno.id}
                                        selected={serieAtual?.id === serie.id}
                                        onClick={(e) => {
                                            e.stopPropagation(); // Evita cliques no card
                                            if (serie.id <= serieAluno.id) {
                                                setSerieAtual(serie);
                                                MySwal.close();
                                            }
                                        }}
                                    >
                                        {serie.nome}
                                    </C.SerieItem>
                                ))}
                            </C.SeriesCard>
                        );
                    })}
                </C.SeriesContainer>
            ),
            showConfirmButton: false,
        });
    };








    if (!apiData) {
        return <C.Loading>Carregando...</C.Loading>;
    }

    console.log(apiData.topics);

    return (
        <C.AppContainer>
            {/* Componente fixo */}
            <C.FixedBox style={{ backgroundColor: currentColor }}>
                <C.MateriaDiv>
                    <C.IconeMateriaDiv>
                        {materiaAtual !== null ? (
                            <C.IconeMateria src={materiaAtual.imagem_materia} />
                        ) : (
                            <span>Carregando</span>
                        )}
                    </C.IconeMateriaDiv>
                    <C.DescMateria>
                        {materiaAtual !== null ? (
                            <C.NomeMateria>{materiaAtual.materia}</C.NomeMateria>
                        ) : (
                            <span>Carregando</span>
                        )}
                        <C.TrocarMateria onClick={showSelectionAlert}>Trocar de matéria</C.TrocarMateria>
                    </C.DescMateria>
                </C.MateriaDiv>
                <C.SerieAtual onClick={() => handleSeriesSelection()}>
                    {serieAtual ? `${serieAtual.nome}  ${currentTopic}` : 'Carregando série...'}
                </C.SerieAtual>
            </C.FixedBox>

            <C.CampoAtividades ref={campoAtividadesRef}>
                { apiData.topics.length == 0 ? (
                    <C.SemAtividade>
                        <span>No momento não há atividades para esta matéria/série, tente novamente mais tarde</span>
                    </C.SemAtividade>
                ) : (
                    
                    apiData.topics.map((topic, topicIndex) => (
                        <React.Fragment key={topicIndex}>
                            <C.TopicoDiv>
                                <C.Topic>{topic.topic}</C.Topic>
                            </C.TopicoDiv>
                            {topic.subTopics.map((subTopic, subTopicIndex) => (
                                <C.campoSubAssunto
                                    key={subTopicIndex}
                                    ref={(el) => {
                                        if (!subTopicRefs.current[topicIndex]) {
                                            subTopicRefs.current[topicIndex] = [];
                                        }
                                        subTopicRefs.current[topicIndex][subTopicIndex] = el;
                                    }}
                                >
                                    <C.SubTopicDiv>
                                        <C.Linha />
                                        <C.SubTopic>{subTopic.name}</C.SubTopic>
                                        <C.Linha />
                                    </C.SubTopicDiv>
                                    <C.ActivitiesContainer>
                                        {subTopic.activities.map((activity, idx) => (
                                            <C.CampoQuadradinhos key={idx} zigzag={idx % 2 === 1}>
                                                <C.ActivityCard
                                                    onClick={() => {
                                                        if (activity.statusAtividade === 0) {
                                                            // Exibe um alerta se o statusAvaliacao for 0
                                                            alert("Esta atividade ainda não foi avaliada. Você não pode iniciar.");
                                                        } else {
                                                            console.log(activity);
                                                            
                                                            handleActivityClick(activity, topicIndex, subTopicIndex);
                                                        }
                                                    }}
                                                    topicColor={activity.statusAtividade === 0 ? '#d9d9d9' : topic.color} // Alterando a cor do tema
                                                >
                                                    <FontAwesomeIcon icon={faBookOpen} color='white' />
                                                    {selectedActivity &&
                                                        selectedActivity.activity === activity &&
                                                        selectedActivity.topicIndex === topicIndex &&
                                                        selectedActivity.subTopicIndex === subTopicIndex && (
                                                            <C.ActivityDetails visible>
                                                                <h3>{selectedActivity.activity.title}</h3>
                                                                <p>{selectedActivity.activity.descricao}.</p>
                                                                <C.StartButton onClick={() => TelaQuestoes(selectedActivity.activity.id)}>Iniciar</C.StartButton> {/* Passando o ID da atividade */}
                                                            </C.ActivityDetails>
                                                        )}
                                                </C.ActivityCard>
                                            </C.CampoQuadradinhos>
                                        ))}
                                    </C.ActivitiesContainer>
                                </C.campoSubAssunto>
                            ))}
                        </React.Fragment>
                    ))
                )}
            </C.CampoAtividades>
        </C.AppContainer>
    );
};

export default CampoTelaAtividade;
