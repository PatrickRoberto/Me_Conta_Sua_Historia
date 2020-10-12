import React, {useState, useEffect, Component} from 'react';
import Conteudo from '../components/Conteudo/Conteudo';
import Graficos from '../components/Conteudo/Graficos';
import Relatos from '../components/Conteudo/Relatos';
import relatosText from '../Help/Relatos';

import {RecuperarRelatos} from '../Service/Service'



class Home extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
        Relatos: [],
        RelatosResumo: [],
    }
  }

  async componentDidMount() {
    try {
      const dados = await RecuperarRelatos();
      const dadosResumo = dados.slice(0, 4);

      this.setState({Relatos: dados});
      this.setState({RelatosResumo: dadosResumo});

    } catch (error) {
      console.log('Deu ruim')
    }
  }

 render(){

    return (
      <div>
        <div className='container' >
          <Conteudo>
            <Relatos relatos={this.state.RelatosResumo} />
            <Graficos relatos={this.state.Relatos} />
          </Conteudo>
        </div>
      </div>
    
    );
  }
 
}

export default Home;
