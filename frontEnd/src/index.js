import React from 'react';
import ReactDOM from 'react-dom';

import 'materialize-css/dist/css/materialize.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import App from './App';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Pages/Home';
import RelatosPage from './Pages/RelatosPage';
import SobrePage from './Pages/SobrePage';
import CadastrarRelatoPage from './Pages/CadastrarRelatoPage';
import DadosPage from './Pages/DadosPage';

//import * as serviceWorker from 'servic'

ReactDOM.render(
 (
 
 <Router>

    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/sobre" component={SobrePage}/>
        <Route path="/relatos" component={RelatosPage}/>
        <Route path="/relato" component={CadastrarRelatoPage}/>
        <Route path="/Dados" component={DadosPage}/>
      </Switch>
    </App>

  </Router>
),
  document.getElementById('root')
);
