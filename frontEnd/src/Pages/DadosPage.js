import React, { Component } from "react";
import Contador from "../components/Contadores/Contador";
import GraficoBarras from "../components/Graficos/GraficoBarras";
import GraficoBarrasDeitado from "../components/Graficos/GraficoBarrasDeitado";

import FilterArea from "../components/Filters/FilterArea";
import SelectFilter from "../components/Filters/SelectFilter";

import * as GraficosControle from "../Service/GraficosControle";

import { RecuperarRelatos, DownloadDadosCsv } from "../Service/ServiceRelato";
import { generos, estados } from "../Help/Dominios";
import TabelaGrafico from "../components/Graficos/TableGrafico";
//import { downloadCsv } from "../Help/DownloadCsv"

export default class DadosPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Relatos: [],
      RelatosResumo: [],
      graph1: {},
      graph2: {},
      graph3: {},
      graph4: [],
      filters: [],
      qtdRelatos: 0,
      qtdAgressoesFisicas: 0,
      qtdCasosPoliciais: 0,
    };
  }

  async componentDidMount() {
    try {
      const dados = await RecuperarRelatos();
      const dadosResumo = dados;

      const filters = [
        { filterName: "generoPessoa", value: "" },
        { filterName: "ufRelato", value: "" },
      ];

      this.setState({ Relatos: dados });
      this.setState({ RelatosResumo: dadosResumo });

      const graficoFaixaEtaria = GraficosControle.faixaEtaria(
        this.state.RelatosResumo
      );
      const graficoPorGenero = await GraficosControle.distribuicaoGeneros(
        this.state.RelatosResumo
      );

    const graficoPorLocal = await GraficosControle.distribuicaoLocais(this.state.RelatosResumo)   


      const qtdRelatos = GraficosControle.QtdRelatos(this.state.RelatosResumo);
      const qtdAgressoes = GraficosControle.QtdAgressoesFisicas(this.state.RelatosResumo);
      const qtdPoliciais = GraficosControle.QtdCasosPoliciais(this.state.RelatosResumo)

      const grafifcoPorCidade = await GraficosControle.distribuicaoPorCidadeTabela(this.state.RelatosResumo)


      this.setState({ graph1: graficoFaixaEtaria });
      this.setState({ graph2: graficoPorGenero });
      this.setState({ graph3: graficoPorLocal });
      this.setState({ graph4: grafifcoPorCidade });
      this.setState({ filters: filters });
      this.setState({ qtdRelatos: qtdRelatos });
      this.setState({ qtdAgressoesFisicas: qtdAgressoes });
      this.setState({ qtdCasosPoliciais: qtdPoliciais });
      

    } catch (error) {
      console.log("Deu ruim", error);
    }
  }

  Filtered(filterName, value) {
    const newFilter = [...this.state.filters];
    newFilter.forEach((item) => {
      if (item.filterName === filterName) item.value = value;
      return item;
    });

    this.setState({ filters: newFilter });
    this.filtraValuesToShow();
  }

  async filtraValuesToShow() {
    const { filters, Relatos } = this.state;

    const dados = Relatos.filter((relato) => {
      let filtered = true;
      for (let filter of filters) {
        if (filter.value) {
          if (relato[filter.filterName] !== filter.value) filtered = false;
        }
      }
      return filtered;
    });

    await this.setState({ RelatosResumo: dados });

    const graficoFaixaEtaria = await GraficosControle.faixaEtaria(this.state.RelatosResumo);

    const graficoPorGenero = await GraficosControle.distribuicaoGeneros(this.state.RelatosResumo);

    const graficoPorLocal = await GraficosControle.distribuicaoLocais(this.state.RelatosResumo);

    const grafifcoPorCidade = await GraficosControle.distribuicaoPorCidadeTabela(this.state.RelatosResumo)

    const qtdRelatos = GraficosControle.QtdRelatos(this.state.RelatosResumo);
    const qtdAgressoes = GraficosControle.QtdAgressoesFisicas(this.state.RelatosResumo);
    const qtdPoliciais = GraficosControle.QtdCasosPoliciais(this.state.RelatosResumo)

    this.setState({
      graph1: graficoFaixaEtaria,
      graph2: graficoPorGenero,
      graph3: graficoPorLocal,
      graph4: grafifcoPorCidade,
      qtdRelatos: qtdRelatos,
      qtdAgressoesFisicas: qtdAgressoes,
      qtdCasosPoliciais: qtdPoliciais
    });
    //this.setState({qtdRelatos: qtdRelatos});
    //this.setState({qtdAgressoesFisicas: qtdAgressoes});
  }

  async downloadCsv(e) {
    const filter ={
      [this.state.filters[0].filterName]: this.state.filters[0].value,
      [this.state.filters[1].filterName]: this.state.filters[1].value
    }
    await DownloadDadosCsv(filter);
    

/*    const x = await downloadCsv(this.state.RelatosResumo)
    await window
    */
  }

  render() {
    return (
      <div style={{ margin: "50px" }}>
        <FilterArea>
          <SelectFilter
            key="FilterGenero"
            titulo="Genero"
            opcoes={generos}
            name={"generoPessoa"}
            changeSelectFilter={(a, b) => {
              this.Filtered(a, b);
            }}
          />

          <SelectFilter
            key="FilterEstado"
            titulo="Estado"
            opcoes={estados.map((est) => est.sigla)}
            name={"ufRelato"}
            changeSelectFilter={(a, b) => {
              this.Filtered(a, b);
            }}
          />

        </FilterArea>

        <div style={STYLE_BOX} className="row">
        <button  
            className="waves-effect grey darken-1 btn"
            style={{ fontSize: "0.9em", height:"5em", lineHeight: '2', width:"12em" }} 
            onClick={(e) => this.downloadCsv(e)}>
            Download dos dados
          </button>
          
          <Contador
            value={this.state.qtdRelatos}
            texto="Quantidade de Relatos"
          />
          <Contador
            value={this.state.qtdAgressoesFisicas}
            texto="Agressão Física"
          />

          <Contador
            value={this.state.qtdCasosPoliciais}
            texto="Policia Foi acionada"
          />

        </div>

        <div style={{...STYLE }} className="row">
          <div className="col m4 s12" style={DivGraficoStyle}>
            < GraficoBarras values={this.state.graph2} />
          </div>
          <div className="col m4 s12" style={DivGraficoStyle}>
            <GraficoBarrasDeitado values={this.state.graph1} />
          </div>
          <div className="col m4 s12" style={DivGraficoStyle}>
            <GraficoBarras values={this.state.graph3} />
          </div>
          <div className="col m4 s12">
            <TabelaGrafico values={this.state.graph4}/>
          </div>
          
  
          
         
        </div>



      </div>
    );
  }
}


const STYLE_BOX = {
  display: "flex",
  justifyContent: "flex-start",
  aligItems: "flex-start",
};

const STYLE = {
  width: "100%",
  border: "1px solid #4c4c4c",
  background: "gray",
  minHeight: "250px",
  padding: "10px",
};

const DivGraficoStyle = {
  marginBottom: '25px'
}