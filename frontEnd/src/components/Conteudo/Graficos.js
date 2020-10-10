import React from 'react'
import Contador from '../Contadores/Contador'
import GraficoEspaco from '../Graficos/GraficoEspaco'

export default function Graficos() {
    return (
        <div style={STYLE}>
            <div style={STYLE_CONTADORES}>
                <Contador value='0' texto="Quantidade de Relatos"/>
                <Contador value='0' texto="Relatos de Racismo"/>
                <Contador value='0' texto="Relatos de Injúria Racial"/>
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