import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import GrupoMentoria from './pages/GrupoMentoria';
import ChatIA from './pages/chatIA'
import ChatPrivado from './pages/ChatPrivado'
import Atividade from './pages/Atividade';
import Ajuda from './pages/Ajuda';
import CadernoVirtual from './pages/CadernoVirtual';
import Notificacao from './pages/Notificacao';
import Rank from './pages/Rank';
import Perfil from './pages/perfil';
import EsqueceuSenha from './pages/EsqueceuSenha';
import MudarSenha from './pages/MudarSenha'
import Emblemas from './pages/Emblemas';
import MontagemAtividades from './pages/MontagemAtividades';
import MontagemAtividadesOrganizar from './pages/MontagemAtividadeOrganizar';
import DesceuRank from './pages/DesceuRank'
import Subiurank from './pages/SubiuRank';
import FicouRank from './pages/ManteveRank';
import MontagemAtividadesTexto from './pages/MontagemAtividadeTexto';
import ManteveRank from './pages/ManteveRank';
import TelaAtividades from './pages/TelaAtividades';
import Atividades from './pages/Atividade';
import Atividade2 from './pages/Atividade2';
import Atividade3 from './pages/Atividade3';
import Atividade4 from './pages/Atividade4';
import Atividade5 from './pages/Atividade5';
import Atividade6 from './pages/Atividade6';
import Atividade7 from './pages/Atividade7'


import VisualizacaoMentorias from './pages/visualizacaoMentoria';

import * as C from './styles/app';
import Ranking from './pages/Ranking';
import Configuraçao from './pages/Configuracao';

function App() {

  return (
    <C.Container>
      <Router>
        <Routes>
          <Route path="/" element={<TelaAtividades/>} />
          <Route path="/tela-atividades" element={<TelaAtividades />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/atividade/:id" element={<Atividade />} /> {/* Rota com parâmetro id */}
          <Route path="/atividades" element={<Atividades />} />
          <Route path="/caderno-virtual" element={<CadernoVirtual />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/notificacao" element={<Notificacao />} />
          <Route path="/chat-privado" element={<ChatPrivado />} />
          <Route path="/chatIA" element={<ChatIA />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/grupo-mentoria" element={<GrupoMentoria />} />
          <Route path="/esqueceu-senha" element={<EsqueceuSenha />} />
          <Route path="/mudar-senha" element={<MudarSenha />} />
          <Route path="/emblemas" element={<Emblemas />} />
          <Route path="/atividade/2" element={<Atividade2 />} />
          <Route path="/atividade/3" element={<Atividade3 />} />
          <Route path="/atividade/4" element={<Atividade4 />}/>
          <Route path="/atividade/5" element={<Atividade5 />}/>
          <Route path="/atividade/6" element={<Atividade6 />}/>
          <Route path="/atividade/7" element={<Atividade7 />}/>
          <Route exact path='/' element= {<Notificacao/>} />
          <Route exact path='/' element= {<Configuraçao/>} />
          <Route exact path='/' element= {<TelaAtividades/>} />
          <Route path='/perfil' element={<Perfil/>} />
          <Route path='/tela-atividades' element={<TelaAtividades/>} />
          <Route path='/atividade' element= {<Atividade/>} />
          <Route exact path='/' element= {<Perfil/>} />
          <Route path='/perfil' element={<Perfil/>} />
          <Route exact path='/' element= {<GrupoMentoria/>} />
          <Route exact path='/' element= {<VisualizacaoMentorias/>} />
          <Route exact path ='/visualizar-mentorias' element = {<VisualizacaoMentorias/>}/>
          <Route path='/perfil' element={<Perfil/>}></Route>
          <Route path='/atividades' element= {<Atividades/>} />
          <Route path='/caderno-virtual' element= {<CadernoVirtual/>} />
          <Route path='/rank' element= {<Rank/>} />
          <Route path='/ajuda' element= {<Ajuda/>} />
          <Route path='/notificacao' element= {<Notificacao/>} />
          <Route path='/chat-privado' element= {<ChatPrivado/>} />
          <Route path='/chatIA' element= {<ChatIA/>} />
          <Route path='/login' element= {<Login/>} />
          <Route path='/cadastro' element={<Cadastro />}/>
          <Route path='/grupo-mentoria' element={<GrupoMentoria />}/>
          <Route path='/esqueceu-senha' element={<EsqueceuSenha />}/>
          <Route path='/mudar-senha' element={<MudarSenha />}/>
          <Route path='/emblemas' element={<Emblemas />}/>
        </Routes>
      </Router>
    </C.Container>
  );
}

export default App;
