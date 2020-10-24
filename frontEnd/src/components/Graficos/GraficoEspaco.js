import React, { Component } from 'react'
import GraficoBarros from './GraficoBarras'
import GraficoBarrasDeitado from './GraficoBarrasDeitado'

import {RecuperarRelatosParaGraficoGenero} from '../../Service/Service'

class GraficoEspaco extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            labelsParaGrafico: [],
            valoresParaGrafico: [],
        }
      }
    
      async componentDidMount() {
        try {
          const dados = await RecuperarRelatosParaGraficoGenero();
    
          this.setState({labelsParaGrafico: dados.generos});
          this.setState({valoresParaGrafico: dados.qtdPorGeneros});
    
        } catch (error) {
          console.log('Deu ruim')
        }
      }
    
    render(){
        console.log(this.state.valoresParaGrafico)
        const value1 = {
            label: 'Gender',
            labels: this.state.labelsParaGrafico,
            data: this.state.valoresParaGrafico,
            max: 10,
            min: 0,
        }
        return (
            <div style={STYLE}>
                <GraficoBarros values={value1}/>
                <GraficoBarrasDeitado values={value1}/>
            </div>
    )}
}

const STYLE = {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    aligItems: 'flex-start',
    border: '1px solid red',
    background: 'gray',
    minHeight: '250px',
    padding: '10px'
}

export default GraficoEspaco;