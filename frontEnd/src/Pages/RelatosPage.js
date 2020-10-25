import { generos, estados } from '../Help/Dominios';

import React, {Component} from 'react'
import RelatoBox from '../components/Relatos/RelatoBox'

import FilterArea from '../components/Filters/FilterArea'
//import RangeFilter from './RangeFilter';
import SelectFilter from '../components/Filters/SelectFilter';

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
            filters: []
        }
      }
    
      async componentDidMount() {
        try {
          const dados = await RecuperarRelatos();
          const dadosResumo = dados.slice(0, 5);
          const filters = [{filterName:'generoPessoa', value: ''}, {filterName:'ufRelato', value:''}];
          this.setState({Relatos: dados});
          this.setState({RelatosResumo: dadosResumo});
          this.setState({filters: filters});
    
        } catch (error) {
          console.log('Deu ruim')
        }
      }

      Filtered(filterName, value){
        const newFilter = [...this.state.filters];
        newFilter.forEach( item =>{
          if(item.filterName === filterName) item.value = value;
          return item;
        });

        this.setState({filters: newFilter});
        this.filtraValuesToShow();
        
      }
      
      filtraValuesToShow(){
        const {filters, Relatos} = this.state;
        const dados = Relatos.filter( relato =>{
          let filtered = true;
          for(let filter of filters){
            if(filter.value)
              if(relato[filter.filterName] !== filter.value)
                filtered =false;
          }
          return filtered;
        });
       
      const dadosResumo = dados.slice(0, 5);
      this.setState({RelatosResumo: dadosResumo}); 
    }

    render(){
        return (
            <div className="container">
                <div style={this.STYLE}>
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
                  <RelatoBox relatos={this.state.RelatosResumo}/>
                </div>
            </div>
        );
    }
}
