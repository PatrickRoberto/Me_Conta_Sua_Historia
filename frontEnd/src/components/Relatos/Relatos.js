import React, {Component} from 'react'
import Relato from './Relato';

class Relatos extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            STYLE: {
                width: props.width,
                //border: '1px solid blue',
                margin: '5px',
                padding: '5px'
            },
            STYLE_TEXT: {
                //border: '1px solid green',
                //padding: '10px',
                //marginBottom: '10px',
                //height: '87px'
            }

        }
    }

    render() {
        if(this.props.relatos.length === 0){
            return (
                <div>
                    Nenhum relato Encontrato!
                </div>
               
            )
        }
        return (
            <div style={this.state.STYLE}>
                {
                     this.props.relatos.map((relato, id)=>{
                        const TamanoTexto = this.props.TamanoTexto || 150;
                        const TextoExibido = 
                            relato.textoRelato.length > TamanoTexto 
                            ? `${relato.textoRelato.substring(0, TamanoTexto)}...`
                            : relato.textoRelato;
                            
                        //console.log(TextoExibido);
                        return(<div key={id} style={this.state.STYLE_TEXT}>
                            <Relato TextoExibido={TextoExibido} />
                        </div>);
                    }
                    )
                }
            </div>
        );
    }
}


export default Relatos;