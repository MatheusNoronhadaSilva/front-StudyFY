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
import TelaAtividades from './pages/TelaAtividades';

import * as C from './styles/app';

function App() {

  return (
    <C.Container>
      <Router>
        <Routes>
          <Route exact path='/' element= {<TelaAtividades/>} />
          <Route path='/perfil' element={<Perfil/>} />
          <Route path='/tela-atividades' element={<TelaAtividades/>} />
          <Route path='/atividade' element= {<Atividade/>} />
          <Route exact path='/' element= {<Perfil/>} />
          <Route path='/perfil' element={<Perfil/>} />
          <Route exact path='/' element= {<GrupoMentoria/>} />
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
