import React from 'react'
import Menu from './Menu'
import RelatoButton from './RelatoButton'
import Title from './Title'
import MyLinks from '../../Help/Links';


export default function Header() {
    return (
        <div style={STYLE_1} className="black">
            <div className="" style={STYLE_2}>
                <Title />
                <RelatoButton />
                <Menu linkList={MyLinks} />
            </div>
        </div>
    )
}

const STYLE_1 = {
    widht: '100%',
    padding:'25px',
    marginBottom: '15px',
    border: '1px solid black',
    background: 'gray',
}

const STYLE_2 = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
}

