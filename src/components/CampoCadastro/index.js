// src/components/Box.js
import React, { useState } from 'react';
import InserirInfoAluno from '../CadastrarInfo';
import InserirDataNascimentoAluno from '../CadastrarDataNascimento';
import InserirMateriaAluno from '../CadastrarMateria'
import ContainerCadastro from '../../styles/campoDados'
import AlunoProfessor from '../../components/AlunoProfessor'

const CampoCadastroAluno = ({ RegistroCompleto }) => {
  const [step, setStep] = useState(1);
  const [dadosAluno, setDadosAluno] = useState({});
  const [dataNascimento, setDataNascimento] = useState({});
  const [usuario, setdadosUsuario] = useState("")
  const [materiaSelecionada, setMateriaSelecionada] = useState([]);

  const AvancarEtapa = () => {
    if (step < 4) {
      console.log('ioiioioi');
      
      setStep(step + 1);
    } else {
      setMateriaSelecionada((prevMateriaSelecionada) => {
        console.log('Estado materiaSelecionada atualizado antes do RegistroCompleto:', prevMateriaSelecionada);
        RegistroCompleto(usuario, dadosAluno, dataNascimento, prevMateriaSelecionada);
      })
    }
  };

  const AtualizarAlunoProfessor = (dados) => {
    setdadosUsuario(dados)
    console.log('ele é: ' + dados);
  }

  const AtualizarInfoUsuario = (dados) => {
    setDadosAluno(dados);
    console.log('Dados aluno:', dados);
  };

  const AtualizarDataNascimentoAluno = (dados) => {
    setDataNascimento(dados);
    console.log('Data de nascimento:', dados);
  };

  const AtualizarMateriaAluno = (dados) => {
    console.log('Materias', dados); // Verifique o valor antes de atualizar o estado
    setMateriaSelecionada(dados);
  };

  return (
    <ContainerCadastro>
      {step === 1 && (
        <AlunoProfessor AvancarEtapa={AvancarEtapa} RetornarDados={AtualizarAlunoProfessor} />
      )}
      {step === 2 && (
        <InserirInfoAluno AvancarEtapa={AvancarEtapa} RetornarDados={AtualizarInfoUsuario} />
      )}
      {step === 3 && (
          <InserirDataNascimentoAluno AvancarEtapa={AvancarEtapa} RetornarDados={AtualizarDataNascimentoAluno} />
      )}
      {step === 4 && (
          <InserirMateriaAluno AvancarEtapa={AvancarEtapa} RetornarDados={AtualizarMateriaAluno} />
      )}
    </ContainerCadastro>
  );
};

export default CampoCadastroAluno;
