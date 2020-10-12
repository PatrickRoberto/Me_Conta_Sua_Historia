import React, {Component} from 'react'

class Relatos extends Component {
    

    
    constructor(props) {
        super(props);
        this.state = {
            STYLE: {
                width: '50%',
                height: '400px',
                border: '1px solid blue',
                margin: '5px',
                padding: '5px'
            },
            STYLE_TEXT: {
                border: '1px solid green',
                padding: '10px',
                marginBottom: '10px',
                height: '87px'
            }

        }
    }


    render() {
        return (
            <div style={this.state.STYLE}>
                {
                    this.props.relatos.map((relato, id)=>{
                        const TamanoTexto = 150;
                        const TextoExibido = relato.textoRelato.length > TamanoTexto ? `${relato.textoRelato.substring(0, TamanoTexto)}...`: relato.textoRelato
                        //console.log(TextoExibido);
                        return(<div key={id} style={this.state.STYLE_TEXT}>
                            {TextoExibido}
                        </div>);
                }
                )}
            </div>
        );
    }
}


export default Relatos;