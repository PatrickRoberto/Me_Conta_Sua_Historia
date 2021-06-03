import React from 'react'
import Menu from './Menu'
import RelatoButton from './RelatoButton'
import Title from './Title'
import MyLinks from '../../Help/Links';


export default function Header() {
    return (
        <div>
        <div style={STYLE_1} className="black">
            <div className="" style={STYLE_2}>
                <Title />
                <RelatoButton />
                <Menu linkList={MyLinks} />
            </div>
        </div>
        <div style={{height: '150px'}}>Teste</div>
        </div>
    )
}

const STYLE_1 = {
    position: 'fixed',
    top: '0px',
    //widht: '100%',
    padding:'25px',
    height: '150px',
    marginBottom: '15px',
    border: '1px solid black',
    background: 'gray',
    zIndex: 100
}

const STYLE_2 = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
}

