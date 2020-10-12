import React from 'react'
import {Link} from 'react-router-dom'

export default function RelatoButton() {
    return (
        <div>
            <Link to="/relato">
                < button className="button">Sua Historia</button>            
            </Link>

        </div>
    )
}
