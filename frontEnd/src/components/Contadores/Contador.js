import React from 'react'

export default function Contador({texto, value}) {
    return (
        <div style={STYLE} className='col s6 m6 card grey darken-4'>
            <span style={{fontSize:'1.2em', color:'white'}}>{value}</span>
            <div style={{fontSize:'1em', color:'white'}}>{texto}</div>
        </div>
    )
}

const STYLE = {
    width: '30%',
    height: '90px',
    //border: '1px solid yellow',
    padding: '10px',
    margin: '10px',
    fontSize: '1em'
}
