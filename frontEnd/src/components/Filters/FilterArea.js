import React, { Component } from 'react';
export default class FilterArea extends Component {
    
    render() {
        return (
            <div className="row">
                <div className='col s12' style={{fontSize:"1.3em"}}>Filtros</div>
                {this.props.children}
            </div>
        )
    }
}


