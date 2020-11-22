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

  STYLE_TEXTO_INTRODUCAO = {
    fontSize: '1.2em',
    padding: '10px',
    marginTop: '10px',
    //background: 'black'
  }

  async componentDidMount() {
    try {
      const dados = await RecuperarRelatos();
      const dadosResumo = dados.slice(0, 2);

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
              <div className="row">
                <div className="col s6">
                  <div style={this.STYLE_TEXTO_INTRODUCAO}>
                      <div style={{fontSize: '1.6em', color:'red'}}>
                      Racismo e discriminação não são normais!  
                      </div>
                      É necessário que lutemos por medidas legais contra a violência racial, mas, para isso, precisamos levar números e conhecer as pesssoas por trás desses números.

                      <br />
                      Então, Me conta Sua Historia!

                      <div>
                      Faça um relato sobre uma situação de racismo que você sofreu. Vamos conhecer nossa história e usá-la para combate!
                      </div>
                      
                  </div>

                  <Relatos relatos={this.state.RelatosResumo} width='100%'/>
                  
                </div>

                <div className="col s6">
                  <Graficos relatos={this.state.Relatos} TamanoTexto={150} />
                </div>
              </div>

          </Conteudo>
        </div>
      </div>
    
    );
  }
 
}


export default Home;
