// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import GrupoMentoria from './pages/GrupoMentoria';
import ChatIA from './pages/chatIA'
import ChatPrivado from './pages/ChatPrivado'
import Atividades from './pages/Questoes';
import Ajuda from './pages/Ajuda';
import CadernoVirtual from './pages/CadernoVirtual';
import Notificacao from './pages/Notificacao';
import Rank from './pages/Rank';
import Perfil from './pages/perfil';
import EsqueceuSenha from './pages/EsqueceuSenha';
import MudarSenha from './pages/MudarSenha'
import Emblemas from './pages/Emblemas';
import VisualizacaoMentorias from './pages/visualizacaoMentoria';
import CriarGrupoMentoria from './pages/CriarGrupoMentoria';
import GrupoMentoriaPrevia from './pages/GrupoMentoriaPrevia';
import PerfilConfiguracao from './pages/perfilConfiguracao';
import TelaAtividades from './pages/telaAtividades';
import Subiurank from './pages/SubiuRank';
import ManteveRank from './pages/ManteveRank';
import DesceuRank from './pages/DesceuRank';

import * as C from './styles/app';

function App() {

  return (
    <C.Container>
      <Router>
        <Routes>
          <Route exact path='/' element= {<GrupoMentoria/>} />
          <Route path = '/subiu-rank' element={<Subiurank/>}/>
          <Route path = '/desceu-rank' element={<DesceuRank/>}/>
          <Route path = '/manteve-rank' element={<ManteveRank/>}/>
          <Route path = '/perfil-configuracao' element={<PerfilConfiguracao/>}/>
          <Route path = '/tela-atividades' element={<TelaAtividades/>}/>
          <Route exact path ='/criar-grupo-mentoria' element = {<CriarGrupoMentoria/>}/>
          <Route exact path ='/visualizar-mentorias' element = {<VisualizacaoMentorias/>}/>
          <Route exact path ='/grupo-mentoria-previa/:id' element = {<GrupoMentoriaPrevia/>}/>
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
          <Route path='/grupo-mentoria/:id' element={<GrupoMentoria />}/>
          <Route path='/esqueceu-senha' element={<EsqueceuSenha />}/>
          <Route path='/mudar-senha' element={<MudarSenha />}/>
          <Route path='/emblemas' element={<Emblemas />}/>
        </Routes>
      </Router>
    </C.Container>
  );
}

export default App;
