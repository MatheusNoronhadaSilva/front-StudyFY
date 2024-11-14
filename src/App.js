// frontend/src/App.js
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

//teste

import * as C from './styles/app';
import MontagemAtividadesTexto from './pages/MontagemAtividadeTexto';
import ManteveRank from './pages/ManteveRank';
import TelaAtividades from './pages/TelaAtividades';
import Atividades from './pages/Atividade';

import VisualizacaoMentorias from './pages/visualizacaoMentoria';


import Ranking from './pages/Ranking';
import Configuraçao from './pages/Configuracao';

function App() {

  return (
    <C.Container>
      <Router>
        <Routes>
          <Route exact path='/' element= {<Rank/>} />
          <Route path='/perfil' element={<Perfil/>} />
          <Route path='/tela-atividades' element={<TelaAtividades/>} />
          <Route path='/atividade' element= {<Atividade/>} />
          <Route path='/perfil' element={<Perfil/>} />
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
