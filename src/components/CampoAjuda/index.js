import React, { useState } from "react";
import * as C from './style'
import mascote from '../../assets/mascote.png'
import imagemUsuario from '../../assets/Ellipse (1).png'
import { faClose, faCheck } from "@fortawesome/free-solid-svg-icons";

const CampoAjuda = () => {

    const mentor = localStorage.getItem('id_mentor')

    return (
        <C.AjudaDiv>
            <C.Header>
                <h1>Dúvidas</h1>
                <p>Aceite a solicitação de dúvidas dos alunos para ajuda-los</p>
            </C.Header>
            {mentor == 0 ? (
                <C.NaoMentor>
                    <img src={mascote} />
                    <span>Seja um mentor para receber solicitações de dúvidas</span>
                </C.NaoMentor>
            ) : (
                <C.Solicitacoes>
                    <C.Solicitacao>
                        <C.InfoAlunoDiv>
                            <img src={imagemUsuario} />
                            <C.InfoAluno>
                                <C.NomeAluno>Matheus Noronha</C.NomeAluno>
                                <div>
                                    <div>
                                        <C.Serie>
                                            <span>Série: </span>3º fund 2
                                        </C.Serie>
                                        <C.Materia>
                                            <span>Matéria: </span> História
                                        </C.Materia>
                                    </div>
                                    <C.AtividadeAtual>
                                        <span>Atividade Atual: </span> Revolução Francesa
                                    </C.AtividadeAtual>
                                </div>
                            </C.InfoAluno>
                        </C.InfoAlunoDiv>
                        <C.Opcoes>
                            <C.Opcao icon={faCheck} />
                            <C.Opcao icon={faClose} />
                        </C.Opcoes>
                    </C.Solicitacao>
                    <C.Solicitacao>
                        <C.InfoAlunoDiv>
                            <img src={imagemUsuario} />
                            <C.InfoAluno>
                                <C.NomeAluno>Matheus Noronha</C.NomeAluno>
                                <div>
                                    <div>
                                        <C.Serie>
                                            <span>Série: </span>3º fund 2
                                        </C.Serie>
                                        <C.Materia>
                                            <span>Matéria: </span> História
                                        </C.Materia>
                                    </div>
                                    <C.AtividadeAtual>
                                        <span>Atividade Atual: </span> Revolução Francesa
                                    </C.AtividadeAtual>
                                </div>
                            </C.InfoAluno>
                        </C.InfoAlunoDiv>
                        <C.Opcoes>
                            <C.Opcao icon={faCheck} />
                            <C.Opcao icon={faClose} />
                        </C.Opcoes>
                    </C.Solicitacao>
                    <C.Solicitacao>
                        <C.InfoAlunoDiv>
                            <img src={imagemUsuario} />
                            <C.InfoAluno>
                                <C.NomeAluno>Matheus Noronha</C.NomeAluno>
                                <div>
                                    <div>
                                        <C.Serie>
                                            <span>Série: </span>3º fund 2
                                        </C.Serie>
                                        <C.Materia>
                                            <span>Matéria: </span> História
                                        </C.Materia>
                                    </div>
                                    <C.AtividadeAtual>
                                        <span>Atividade Atual: </span> Revolução Francesa
                                    </C.AtividadeAtual>
                                </div>
                            </C.InfoAluno>
                        </C.InfoAlunoDiv>
                        <C.Opcoes>
                            <C.Opcao icon={faCheck} />
                            <C.Opcao icon={faClose} />
                        </C.Opcoes>
                    </C.Solicitacao>
                    <C.Solicitacao>
                        <C.InfoAlunoDiv>
                            <img src={imagemUsuario} />
                            <C.InfoAluno>
                                <C.NomeAluno>Matheus Noronha</C.NomeAluno>
                                <div>
                                    <div>
                                        <C.Serie>
                                            <span>Série: </span>3º fund 2
                                        </C.Serie>
                                        <C.Materia>
                                            <span>Matéria: </span> História
                                        </C.Materia>
                                    </div>
                                    <C.AtividadeAtual>
                                        <span>Atividade Atual: </span> Revolução Francesa
                                    </C.AtividadeAtual>
                                </div>
                            </C.InfoAluno>
                        </C.InfoAlunoDiv>
                        <C.Opcoes>
                            <C.Opcao icon={faCheck} />
                            <C.Opcao icon={faClose} />
                        </C.Opcoes>
                    </C.Solicitacao>
                    <C.Solicitacao>
                        <C.InfoAlunoDiv>
                            <img src={imagemUsuario} />
                            <C.InfoAluno>
                                <C.NomeAluno>Matheus Noronha</C.NomeAluno>
                                <div>
                                    <div>
                                        <C.Serie>
                                            <span>Série: </span>3º fund 2
                                        </C.Serie>
                                        <C.Materia>
                                            <span>Matéria: </span> História
                                        </C.Materia>
                                    </div>
                                    <C.AtividadeAtual>
                                        <span>Atividade Atual: </span> Revolução Francesa
                                    </C.AtividadeAtual>
                                </div>
                            </C.InfoAluno>
                        </C.InfoAlunoDiv>
                        <C.Opcoes>
                            <C.Opcao icon={faCheck} />
                            <C.Opcao icon={faClose} />
                        </C.Opcoes>
                    </C.Solicitacao>
                    <C.Solicitacao>
                        <C.InfoAlunoDiv>
                            <img src={imagemUsuario} />
                            <C.InfoAluno>
                                <C.NomeAluno>Matheus Noronha</C.NomeAluno>
                                <div>
                                    <div>
                                        <C.Serie>
                                            <span>Série: </span>3º fund 2
                                        </C.Serie>
                                        <C.Materia>
                                            <span>Matéria: </span> História
                                        </C.Materia>
                                    </div>
                                    <C.AtividadeAtual>
                                        <span>Atividade Atual: </span> Revolução Francesa
                                    </C.AtividadeAtual>
                                </div>
                            </C.InfoAluno>
                        </C.InfoAlunoDiv>
                        <C.Opcoes>
                            <C.Opcao icon={faCheck} />
                            <C.Opcao icon={faClose} />
                        </C.Opcoes>
                    </C.Solicitacao>
                </C.Solicitacoes>
            )}
        </C.AjudaDiv >
    );
};

export default CampoAjuda;
