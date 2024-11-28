import * as C from './style';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import Matematica from '../../assets/Matematica.png';

const CampoTelaAtividade = () => {
    const navigate = useNavigate();

    const [apiData, setApiData] = useState(null); // Dados da API
    const [selectedActivity, setSelectedActivity] = useState(null); // Atividade selecionada
    const [currentTopic, setCurrentTopic] = useState(''); // Tópico atual
    const [currentColor, setCurrentColor] = useState(''); // Cor atual
    const campoAtividadesRef = useRef(null);
    const subTopicRefs = useRef([]);

    const TelaQuestoes = (atividadeId) => {
        
        navigate(`/questoes/${atividadeId}`);
    };
    

    // Função para buscar dados da API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/v1/studyfy/atividades/3/9');
                if (response.status === 200) {
                    const data = response.data.atividades;
                    console.log(data);

                    // Transformar os dados para a estrutura necessária
                    const topics = transformApiDataToTopics(data);

                    setApiData({ series: '9º Fund 2', topics });
                    setCurrentTopic(topics[0]?.topic || '');
                    setCurrentColor(topics[0]?.color || '');
                }
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        };

        fetchData();
    }, []);

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
                        descricao: activity.descricao_da_atividade
                    });
                } else {
                    // Cria novo sub-assunto e adiciona a atividade com o ID
                    acc[topicIndex].subTopics.push({
                        name: activity.nome_do_sub_assunto,
                        activities: [
                            {
                                id: activity.id_da_atividade,
                                title: activity.titulo_da_atividade,
                                descricao: activity.descricao_da_atividade
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
                                    title: activity.titulo_da_atividade
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

    console.log(apiData);
    

    if (!apiData) {
        return <C.Loading>Carregando...</C.Loading>;
    }

    return (
        <C.AppContainer>
            {/* Componente fixo */}
            <C.FixedBox style={{ backgroundColor: currentColor }}>
                <C.MateriaDiv>
                    <C.IconeMateriaDiv>
                        <C.IconeMateria src={Matematica} />
                    </C.IconeMateriaDiv>
                    <C.DescMateria>
                        <C.NomeMateria>Matematica</C.NomeMateria>
                        <C.TrocarMateria>Trocar de matéria</C.TrocarMateria>
                    </C.DescMateria>
                </C.MateriaDiv>
                {`${apiData.series} - ${currentTopic}`}
            </C.FixedBox>

            <C.CampoAtividades ref={campoAtividadesRef}>
                {apiData.topics.map((topic, topicIndex) => (
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
                                                onClick={() => handleActivityClick(activity, topicIndex, subTopicIndex)}
                                                topicColor={topic.color}
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
                ))}
            </C.CampoAtividades>
        </C.AppContainer>
    );
};

export default CampoTelaAtividade;
