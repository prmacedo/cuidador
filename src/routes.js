
import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';

import Login from './pages/Patient/LoginPaciente/index';
import Dashboard from './pages/Profissional/Dashboard/index';
import AppMenu from './pages/Patient/AppMenu';
import Avaliacao from './pages/Patient/Avaliacao/index';
import Cuidadores from './pages/Patient/Cuidadores';
import SignUp from './pages/SignUp';
import Metas from './pages/Patient/Metas';
import MeuDesempenho from './pages/Patient/MeuDesempenho';
import Educacao from './pages/Patient/Educação';
import LoginCuidador from './pages/Profissional/LoginCuidador';




import InfoPatient from './pages/Profissional/InfoPatient';

import ProtectedRoute from './services/ProtectedRoute';
import Perfil from './pages/Patient/Perfil';
import Perfiledit from './pages/Patient/Perfil/perfilEdit';

import Paperbase from './pages/Profissional/MainPage';
import PaperbaseProfile from './pages/Profissional/MainPage/Profile';
import patientTable from './pages/Profissional/MainPage/CuidadorPage-Components/patientTable.js';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <ProtectedRoute path="/AppMenu" component={AppMenu} />
        <Route path="/Dashboard" component={Dashboard} />
        <ProtectedRoute path="/Avaliacao" component={Avaliacao} />
        <ProtectedRoute path="/Perfil" component={Perfil} />
        <ProtectedRoute path="/Perfiledit" component={Perfiledit} />
        <ProtectedRoute path="/Cuidadores" component={Cuidadores} />
        <Route path="/Cadastro" component = {SignUp} />
        <ProtectedRoute path="/metas" component = {Metas}/>
        <ProtectedRoute path="/meudesempenho" component = {MeuDesempenho}/>
        <ProtectedRoute path="/educacao" component = {Educacao}/>
        <Route path="/LoginCuidador" component = {LoginCuidador}/>
<<<<<<< HEAD
        <Route path="/MainPage" component = {Paperbase}/>
        <Route path="/paciente" component = {InfoPatient}/>
        <Route path="/MeuPerfil" component = {PaperbaseProfile}/>
        <Route path="/table" component = {patientTable}/>
=======
        {/* <Route path="/ProfilePatient" component = {ProfilePatient}/> */}
        <Route path="/MainPage" component = {Paperbase}/>
        {/* <Route path="/MeuPaciente" component = {PaperbasePatient}/> */}
        {/* <Route path="/MeuPerfil" component = {PaperbaseProfile}/> */}
        {/* <Route path="/table" component = {patientTable}/> */}
>>>>>>> 82e825fa879199a3e5702200a0d637c1190b324b

        </Switch>
    </BrowserRouter>
  );
}

