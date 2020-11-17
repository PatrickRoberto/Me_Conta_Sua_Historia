import React from 'react'
//import {logo1}  from '../../Help/Complementos'
import logo from './logo_3.jpeg'

export default function Title() {
    
    return (
        <div style={STYLE}>
                <img src={logo} width="70%" alt="Me Conta Sua História" border='1px solide green'/>
        </div>
    )
}

const STYLE = {
    border: '1px solid red',
    display: 'flex',
    alignItems: 'flex-right',
    width:'50%'
}
