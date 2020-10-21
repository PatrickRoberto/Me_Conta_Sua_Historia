import React, {Component} from 'react'
import RelatoBox from '../components/Relatos/RelatoBox'
import {RecuperarRelatos} from '../Service/Service'

export default class RelatosPage extends Component {

    STYLE = {
        padding: '5px',
        border: '1px solid red',
        margin: '5px',
    }

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
    
// 

    render(){
        console.log(this.state.RelatosResumo);
        return (
            <div className="container">
                <div style={this.STYLE}>
                <RelatoBox relatos={this.state.RelatosResumo} />
                </div>
            </div>
        );
    }
}
