import React from 'react'

export default function Conteudo({children}) {
    return (
        <div className="container" style={STYLE}>
            {children}
        </div>
    )
}

const STYLE = {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    aligItems: 'flex-start',
}