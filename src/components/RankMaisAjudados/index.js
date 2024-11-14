// src/pages/Entrada.js
import * as C from './style';
import fotoMentor from '../../assets/Ellipse (1).png';
import PrimeiroLugar from '../../assets/1 lugar.png';
import SegundoLugar from '../../assets/2 lugar.png';
import TerceiroLugar from '../../assets/3 lugar.png';
import voltarTudo from '../../assets/voltarTudo.png'
import voltar from '../../assets/voltar.png'
import avancar from '../../assets/avancar.png'
import avancarTudo from '../../assets/avancarTudo.png'
//import avancarTudo from '../../assets/avancar tudo.png'
//import avancar from '../../assets/avancar.png'

const RankMaisAjudados = () => {

    const mentores = [
        { nome: 'Matheus Noronha', pontos: 271 },
        { nome: 'João Silva', pontos: 250 },
        { nome: 'Ana Costa', pontos: 230 },
        { nome: 'Pedro Oliveira', pontos: 220 },
        { nome: 'Pedro Oliveira', pontos: 220 },
        // outros mentores...
    ];

    // Ordenar os mentores por pontos (do maior para o menor)
    const mentoresOrdenados = [...mentores].sort((a, b) => b.pontos - a.pontos);

    return (
        <>
        <C.RankMaisAjudados>
            {/* Mapeando e exibindo os mentores já ordenados */}
            {mentoresOrdenados.map((mentor, index) => (
                <C.MentorRank key={index}>
                    <C.Colocacao>
                        {index === 0 && <img src={PrimeiroLugar} alt="1º Lugar" />}
                        {index === 1 && <img src={SegundoLugar} alt="2º Lugar" />}
                        {index === 2 && <img src={TerceiroLugar} alt="3º Lugar" />}
                        {index > 2 && <span>#{index + 1}</span>} {/* Mostrar a posição para 4º lugar em diante */}
                    </C.Colocacao>
                    <C.AreaImg>
                        <C.FtPerfil src={fotoMentor} alt="Foto do Mentor" />
                    </C.AreaImg>
                    <C.AreaNome>
                        <span>{mentor.nome}</span> {/* Nome do mentor */}
                    </C.AreaNome>
                    <C.AreaPontos>
                        <span>{mentor.pontos}</span> {/* Pontos do mentor */}
                    </C.AreaPontos>
                </C.MentorRank>
            ))}

        </C.RankMaisAjudados>
        <C.NavegacaoRank>
                <img src={voltarTudo}></img>
                <img src={voltar}></img>
                <span>1/100</span>
                <img src={avancar}></img>
                <img src={avancarTudo}></img>
        </C.NavegacaoRank>

                    </>
                    

                    
    );
};

export default RankMaisAjudados;
