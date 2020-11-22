import React, { Component } from 'react'
import GraficoBarros from './GraficoBarras'
import GraficoBarrasDeitado from './GraficoBarrasDeitado'

import * as GraficosControle from "../../Service/GraficosControle";
import { RecuperarRelatos } from "../../Service/Service";

class GraficoEspaco extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          relatos: [],
          graph1: {},
          graph2: {},
        }
      }
    
      async componentDidMount() {
        try {

          const dados = await RecuperarRelatos();
          this.setState({ relatos: dados });
          const graficoFaixaEtaria = GraficosControle.faixaEtaria(
            this.state.relatos
          );
          const graficoPorGenero = GraficosControle.distribuicaoGeneros(
            this.state.relatos
          );

          this.setState({ graph1: graficoPorGenero });
          this.setState({ graph2: graficoFaixaEtaria });
    
        } catch (error) {
          console.log('Deu ruim')
        }
      }
    
    render(){

        return (
            <div style={STYLE} className='row'>
                <GraficoBarros values={this.state.graph1}/>
                <GraficoBarrasDeitado values={this.state.graph2}/>
            </div>
    )}
}

const STYLE = {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    aligItems: 'flex-start',
    //border: '1px solid red',
    //background: 'black',
    minHeight: '250px',
    padding: '15px'
}

export default GraficoEspaco;