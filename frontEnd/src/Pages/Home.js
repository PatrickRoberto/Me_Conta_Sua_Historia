import React, {Component} from 'react';
import Conteudo from '../components/Conteudo/Conteudo';
import Graficos from '../components/Conteudo/Graficos';
import Relatos from '../components/Relatos/Relatos';

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
      const dadosResumo = dados.slice(0, 5);

      this.setState({Relatos: dados});
      this.setState({RelatosResumo: dadosResumo});

    } catch (error) {
      console.log('Deu ruim')
    }
  }

 render(){

    return (
      <div>
        <div className='' >
          <Conteudo>
            <Relatos relatos={this.state.RelatosResumo} width='50%'/>
            <Graficos relatos={this.state.Relatos} TamanoTexto={150} />
          </Conteudo>
        </div>
      </div>
    
    );
  }
 
}

export default Home;
