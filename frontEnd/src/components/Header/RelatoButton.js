import React from 'react'
import {Link} from 'react-router-dom'

export default function RelatoButton() {
    return (
        <div>
            <Link to="/denuncia">
                < button className="button">Denuncia</button>            
            </Link>

        </div>
    )
}
