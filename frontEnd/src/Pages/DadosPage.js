import React, { Component } from 'react';
import Contador from '../components/Contadores/Contador';
import GraficoBarras from '../components/Graficos/GraficoBarras';
import GraficoBarrasDeitado from '../components/Graficos/GraficoBarrasDeitado';
//import TabelaGrafico from '../components/Graficos/TableGrafico';

import FilterArea from '../components/Filters/FilterArea';
import SelectFilter from '../components/Filters/SelectFilter';


import * as GraficosControle from '../Service/GraficosControle';

import {RecuperarRelatos} from '../Service/Service'
import {generos, estados} from '../Help/Dominios';

export default class DadosPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
        Relatos: [],
        RelatosResumo: [],
        graph1: {},
        graph2: {},
        filters: [],
        qtdRelatos: 0,
        qtdAgressoesFisicas: 0
        //tableCitys: {}
 
     }
  }

  async componentDidMount() {
    try {
        const dados = await RecuperarRelatos();
        const dadosResumo = dados;
        
        const filters = [{filterName:'generoPessoa', value: ''}, {filterName:'ufRelato', value:''}];
        
        this.setState({Relatos: dados});
        this.setState({RelatosResumo: dadosResumo});

        const graficoFaixaEtaria = GraficosControle.faixaEtaria(this.state.RelatosResumo);
        const graficoPorGenero = GraficosControle.distribuicaoGeneros(this.state.RelatosResumo);
        const qtdRelatos = GraficosControle.QtdRelatos(this.state.RelatosResumo);
        const qtdAgressoes = GraficosControle.QtdAgressoesFisicas(this.state.RelatosResumo);
        //const tableCitys = distribuicaoPorCidadeTabela();

        this.setState({graph1: graficoFaixaEtaria});
        this.setState({graph2: graficoPorGenero});
        this.setState({filters: filters});
        this.setState({qtdRelatos: qtdRelatos})
        this.setState({qtdAgressoesFisicas: qtdAgressoes})
       
        
        
        //this.setState({tableCitys: tableCitys});

    } catch (error) {
      console.log('Deu ruim')
    }
  };

  Filtered(filterName, value){
    
    const newFilter = [...this.state.filters];
    newFilter.forEach( item => {
      if(item.filterName === filterName) 
        item.value = value;
      return item;
    });

    this.setState({filters: newFilter});
    this.filtraValuesToShow();
    
  };
  
  async filtraValuesToShow(){
    const {filters, Relatos} = this.state;
    const dados = Relatos.filter( relato =>{
      let filtered = true;
      for(let filter of filters){
        if(filter.value){
  
          if(relato[filter.filterName] !== filter.value)
            filtered =false;
        }

      }
      return filtered;
    });
   
    await this.setState({RelatosResumo: dados})
    const graficoFaixaEtaria = GraficosControle.faixaEtaria(dados);
    const graficoPorGenero = GraficosControle.distribuicaoGeneros(this.state.RelatosResumo);

    const qtdRelatos = GraficosControle.QtdRelatos(dados);
    const qtdAgressoes = GraficosControle.QtdAgressoesFisicas(dados);

    this.setState({
        graph1: graficoFaixaEtaria, 
        graph2: graficoPorGenero,
        qtdRelatos: qtdRelatos, 
        qtdAgressoesFisicas: qtdAgressoes});
    //this.setState({qtdRelatos: qtdRelatos});
    //this.setState({qtdAgressoesFisicas: qtdAgressoes});
  };

    render() {
      
        return (
            <div style={{margin: '50px'}}>
                <FilterArea>
                    <SelectFilter 
                      key="FilterGenero"
                      titulo="Genero" 
                      opcoes={generos} 
                      name={'generoPessoa'} 
                      changeSelectFilter={(a, b)=>{this.Filtered(a, b)}}
                    /> 

                    <SelectFilter 
                      key="FilterEstado"
                      titulo="Estado" 
                      opcoes={estados.map(est => est.sigla)} 
                      name={'ufRelato'} 
                      changeSelectFilter={(a, b)=>{this.Filtered(a, b)}}
                    /> 
                  </FilterArea>

                <div style={STYLE_BOX} className='row'>
                    <Contador value={this.state.qtdRelatos} texto="Quantidade de Relatos"/>
                    <Contador value={this.state.qtdAgressoesFisicas} texto="Agressão Fisica"/>
                    <Contador value='0' texto="Agressão Fisica"/>
                    <Contador value='0' texto="Agressão Fisica"/>
                </div>

                <div style={{...STYLE_BOX, ...STYLE}} className="row">
                    <GraficoBarras values={this.state.graph2}/>
                    <GraficoBarrasDeitado values={this.state.graph1}/>
                </div>
                
            </div>
        )
    }
}

const STYLE_BOX = {
    display: 'flex',
    justifyContent: 'flex-start',
    aligItems: 'flex-start',
}

const STYLE = {
    width: '100%',
    border: '1px solid red',
    background: 'gray',
    minHeight: '250px',
    padding: '10px'
  }

  