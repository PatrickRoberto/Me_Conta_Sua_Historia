import React from "react";
import Contador from "../Contadores/Contador";
import GraficoEspaco from "../Graficos/GraficoEspaco";
import * as GraficoControle from "../../Service/GraficosControle";

export default function Graficos({ relatos }) {
  const ValueContadorCasos = GraficoControle.QtdRelatos(relatos);
  const AgressaoFisica = GraficoControle.QtdAgressoesFisicas(relatos);
  return (
    <div style={STYLE}>
      <div style={STYLE_CONTADORES}>
        <Contador value={ValueContadorCasos} texto="Quantidade de Relatos" />
        <Contador value={AgressaoFisica} texto="Agressão Física" />
      </div>
      <div>
        <GraficoEspaco relatos={relatos}/>
      </div>
    </div>
  );
}

const STYLE = {
  //width: "50%",
  margin: "5px",
  padding: "5px",
  background: "lightgray",
  borderRadius: "5px",
};

const STYLE_CONTADORES = {
  display: "flex",
  justifyContent: "flex-start",
  fontSize: "1em",
};
