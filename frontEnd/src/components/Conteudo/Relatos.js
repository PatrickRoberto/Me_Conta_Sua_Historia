import React from 'react'

export default function Relatos({relatos}) {
    return (
        <div style={STYLE}>
            {
                relatos.map(({id, texto} )=>{
                    const TamanoTexto = 150;
                    const TextoExibido 
                        = texto.length > TamanoTexto ? `${texto.substring(0, TamanoTexto)}...`: texto
                    
                    return(<div key={id} style={STYLE_TEXT}>
                        {TextoExibido}
                    </div>);
            }
            )}
        </div>
    )
}

const STYLE = {
    width: '50%',
    height: '400px',
    border: '1px solid blue',
    margin: '5px',
    padding: '5px'
}

const STYLE_TEXT = {
    border: '1px solid green',
    padding: '10px',
    marginBottom: '10px',
    height: '87px'
}