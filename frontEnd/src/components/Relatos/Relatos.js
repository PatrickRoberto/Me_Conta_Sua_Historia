import React, { Component } from "react";
import Relato from "./Relato";

class Relatos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      STYLE: {
        width: props.width,
        //border: '1px solid blue',
        with: '100%',
        margin: "5px",
        padding: "5px",
      },
      STYLE_TEXT: {
        //border: '1px solid green',
        //padding: '10px',
        //marginBottom: '10px',
        //height: '87px'
      },
    };
  }

  render() {
    if (this.props.relatos.length === 0) {
      return <div>Nenhum relato foi encontrado!</div>;
    }
    return (
      <div style={this.state.STYLE}>
        {this.props.relatos.map((relato, id) => {
          const TamanoTexto = this.props.TamanoTexto || 150;
          const TextoExibido =
            relato.textoRelatoTratado.length > TamanoTexto
              ? `${relato.textoRelatoTratado.substring(0, TamanoTexto)}...`
              : relato.textoRelatoTratado;

          //console.log(TextoExibido);
          const dataFormat = relato.dataRelato;
          return (
            <div key={id} style={this.state.STYLE_TEXT}>
              <Relato relato={relato} TextoExibido={TextoExibido} Data={dataFormat}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Relatos;
