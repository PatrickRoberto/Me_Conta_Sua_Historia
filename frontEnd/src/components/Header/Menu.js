import React from 'react'
import { Link } from 'react-router-dom';



export default function Menu({linkList}) {
    return (
        <div style={STYLE}>
            {linkList.map( link => {
                return ( 
                    <Link key={link.text} style={STYLE_LINK} to={link.route}>
                        <span style={STYLE_LINK}>{link.text}</span>
                        {pipline}
                    </Link> 
                )
            })
            
            }
        </div>
    )
}

const  STYLE = {
    display: 'flex',
    justifyContent: 'flex-end',
    color:'black'
}

const STYLE_LINK = {
    color: 'black',
    textDecoration: 'none',
    
}

const pipline = ' | '