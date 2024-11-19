// src/pages/Entrada.js
import * as C from './style';
import Medalha from '../../assets/medalha.png'
import livros from '../../assets/livro_degraus.png'
import mascote from '../../assets/mascote.png'
import { useNavigate } from 'react-router-dom'; // Importar o useNavigate


const EmblemasPerfil = () => {

    const navigate = useNavigate();

    const TelaEmblemas = () => {
        navigate('/emblemas')
    }

  return (
    <C.CampoEmblemasPerfil>
        <C.TituloCampo>Emblemas</C.TituloCampo>
        <C.VerTodos onClick={TelaEmblemas}>Ver todos</C.VerTodos>
        <C.Emblemas>
            <C.Emblema style={{backgroundColor: '#71DDF5'}}>
                <C.IconeEmblema src={Medalha} />
                <C.NivelEmblema>Nível I</C.NivelEmblema>
            </C.Emblema>
            <C.Emblema style={{backgroundColor: '#56EE9C'}}>
                <C.IconeEmblema src={livros} />
                <C.NivelEmblema>Nível I</C.NivelEmblema>
            </C.Emblema>
            <C.Emblema style={{backgroundColor: '#E9CE03'}}>
                <C.IconeEmblema src={mascote} />
                <C.NivelEmblema>Nível I</C.NivelEmblema>
            </C.Emblema>
        </C.Emblemas>
    </C.CampoEmblemasPerfil>
  );
};

export default EmblemasPerfil;
