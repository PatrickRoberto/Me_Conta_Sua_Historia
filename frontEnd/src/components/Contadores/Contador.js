import React from 'react'

export default function Contador({texto, value}) {
    return (
        <div style={STYLE}>
            <span>{value}</span>
            <div>{texto}</div>
        </div>
    )
}

const STYLE = {
    width: '30%',
    height: '90px',
    border: '1px solid yellow',
    padding: '10px',
    margin: '10px',
    fontSize: '1em'
}