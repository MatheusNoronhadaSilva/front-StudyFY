import * as C from './style';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'; // Biblioteca para chamadas HTTP

const CampoTelaAtividade = () => {
    const [apiData, setApiData] = useState(null); // Estado para os dados da API
    const [selectedActivity, setSelectedActivity] = useState(null); // Estado para atividade selecionada
    const [currentTopic, setCurrentTopic] = useState(''); // Estado para o tópico atual
    const [currentColor, setCurrentColor] = useState(''); // Estado para a cor atual
    const campoAtividadesRef = useRef(null);
    const subTopicRefs = useRef([]);

    // Função para buscar dados da API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/v1/studyfy/atividades/3/9'); // Substituir pela URL correta
                if (response.status === 200) {
                    const data = response.data.atividades;
                    // Transformar os dados para a estrutura necessária
                    const topics = transformApiDataToTopics(data);
                    setApiData({ series: '9º Fund 2', topics }); // Atualiza os dados com série e tópicos
                    setCurrentTopic(topics[0]?.topic || ''); // Define o primeiro tópico como atual
                    setCurrentColor(topics[0]?.color || ''); // Define a cor do primeiro tópico
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
                    acc[topicIndex].subTopics[subTopicIndex].activities.push(activity.titulo_da_atividade);
                } else {
                    acc[topicIndex].subTopics.push({
                        name: activity.nome_do_sub_assunto,
                        activities: [activity.titulo_da_atividade]
                    });
                }
            } else {
                // Cria um novo tópico
                acc.push({
                    topic: activity.nome_do_assunto,
                    color: activity.cor_assunto,
                    subTopics: [
                        {
                            name: activity.nome_do_sub_assunto,
                            activities: [activity.titulo_da_atividade]
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
                    setCurrentTopic(topic.topic); // Atualiza o tópico visível
                    setCurrentColor(topic.color); // Atualiza a cor atual
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
        if (selectedActivity && selectedActivity.activity === activity && selectedActivity.topicIndex === topicIndex && selectedActivity.subTopicIndex === subTopicIndex) {
            setSelectedActivity(null);
        } else {
            setSelectedActivity({ activity, topicIndex, subTopicIndex });
        }
    };

    if (!apiData) {
        return <C.Loading>Carregando...</C.Loading>;
    }

    return (
        <C.AppContainer>
            {/* Componente fixo atualizado */}
            <C.FixedBox style={{ backgroundColor: currentColor }}>
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
                                                {activity.charAt(0)}
                                                {selectedActivity && selectedActivity.activity === activity &&
                                                    selectedActivity.topicIndex === topicIndex &&
                                                    selectedActivity.subTopicIndex === subTopicIndex && (
                                                        <C.ActivityDetails visible>
                                                            <h3>{selectedActivity.activity}</h3>
                                                            <p>Breve descrição da atividade {selectedActivity.activity}.</p>
                                                            <C.StartButton>Iniciar</C.StartButton>
                                                        </C.ActivityDetails>
                                                    )
                                                }
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
