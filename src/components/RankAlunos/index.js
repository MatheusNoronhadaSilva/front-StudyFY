// src/pages/Entrada.js
import * as C from './style';
import fotoAluno from '../../assets/Ellipse (1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

const RankAlunos = () => {

    const alunos = [
        { nome: 'Matheus Noronha', pontos: 271 },
        { nome: 'João Silva', pontos: 250 },
        { nome: 'Ana Costa', pontos: 230 },
        { nome: 'Ana Costa', pontos: 230 },
        // outros alunos...
      ];
  // Ordenar os alunos por pontos (do maior para o menor)
  const alunosOrdenados = [...alunos].sort((a, b) => b.pontos - a.pontos);
  const numAlunos = alunosOrdenados.length;

  // Calcular quantidades baseadas na quantidade de alunos
  const promover = Math.max(Math.round(numAlunos * 0.25), 1); // Mínimo de 1 promovido
  const rebaixar = Math.max(Math.round(numAlunos * 0.25), 1); // Mínimo de 1 rebaixado
  const neutros = numAlunos - promover - rebaixar; // Os que ficam neutros

  // Dividir os alunos em grupos
  const alunosPromovidos = alunosOrdenados.slice(0, promover);
  const alunosNeutros = alunosOrdenados.slice(promover, promover + neutros);
  const alunosRebaixados = alunosOrdenados.slice(promover + neutros, numAlunos);

  return (
    <C.RankAlunos>
      {/* Alunos Promovidos */}
      <C.SubirRankAlunos>
        {alunosPromovidos.map((aluno, index) => (
          <C.AlunoRank key={index}>
            <C.Colocacao>
              #{index + 1}
            </C.Colocacao>
            <C.AreaImg>
              <C.FtPerfil src={fotoAluno} alt="Foto do Aluno" />
            </C.AreaImg>
            <C.AreaNome>
              <span>{aluno.nome}</span>
            </C.AreaNome>
            <C.AreaPontos>
              <span>{aluno.pontos} Pts</span>
            </C.AreaPontos>
          </C.AlunoRank>
        ))}
            <C.SubirRank>
                <FontAwesomeIcon icon={faArrowUp} style={{height: '2vh', width: '3vw', color: '#51FF25'}} />
                <span>Subir de rank</span>
            </C.SubirRank>
      </C.SubirRankAlunos>

      {/* Alunos Neutros */}
      {alunosNeutros.map((aluno, index) => (
        <C.AlunoRank key={index + promover}>
          <C.Colocacao>
            #{index + 1 + promover}
          </C.Colocacao>
          <C.AreaImg>
            <C.FtPerfil src={fotoAluno} alt="Foto do Aluno" />
          </C.AreaImg>
          <C.AreaNome>
            <span>{aluno.nome}</span>
          </C.AreaNome>
          <C.AreaPontos>
            <span>{aluno.pontos} Pts</span>
          </C.AreaPontos>
        </C.AlunoRank>
      ))}

      {/* Alunos Rebaixados */}
      <C.DescerRankAlunos>
      <C.DescerRank>
              <FontAwesomeIcon icon={faArrowDown} style={{height: '2vh', width: '3vw', color: 'red'}} />
              <span>Descer de rank</span>
            </C.DescerRank>
        {alunosRebaixados.map((aluno, index) => (
          <C.AlunoRank key={index + promover + neutros}>
            <C.Colocacao>
              #{index + 1 + promover + neutros}
            </C.Colocacao>
            <C.AreaImg>
              <C.FtPerfil src={fotoAluno} alt="Foto do Aluno" />
            </C.AreaImg>
            <C.AreaNome>
              <span>{aluno.nome}</span>
            </C.AreaNome>
            <C.AreaPontos>
              <span>{aluno.pontos} Pts</span>
            </C.AreaPontos>
          </C.AlunoRank>
        ))}
      </C.DescerRankAlunos>
    </C.RankAlunos>
  );
};

export default RankAlunos;
