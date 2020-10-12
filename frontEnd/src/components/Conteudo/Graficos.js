import React from 'react'
import Contador from '../Contadores/Contador'
import GraficoEspaco from '../Graficos/GraficoEspaco'

export default function Graficos({relatos}) {

    const ValueContadorCasos = relatos.length;
    const ValueCon = relatos.length;
    

    return (
        <div style={STYLE}>
            <div style={STYLE_CONTADORES}>
                <Contador value={ValueContadorCasos} texto="Quantidade de Relatos"/>
                <Contador value='0' texto="Agressão Fisica"/>
            </div>
            <div>
                <GraficoEspaco />
            </div>
        </div>
    )
}

const STYLE = {
    width: '50%',
    border: '1px solid blue',
    margin: '5px',
    padding: '5px',
}

const STYLE_CONTADORES = {
    display: 'flex',
    justifyContent: 'flex-start',
    fontSize: '1em'
}