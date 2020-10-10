import React, {useEffect, useState} from 'react';
import estados from '../Help/Ufs';

import M from "materialize-css";




export default function DenunciaPage() {
    

        const [values, setValues] = useState({ });
        const [loading, setLoading] = useState(false);
      
        const handleChange = (event) => {
          const auxValues = { ...values };
          auxValues[event.target.name] = event.target.value;
          setValues(auxValues);
        };
      
        const handleSubmit = callback => event => {
          event.preventDefault();
          setLoading(true);
          callback();
          setLoading(false);
        };
    
        const enviarContato = () => {
            // faça o que for preciso :)
            console.log(values);
          };
    
    useEffect(() => {
        M.AutoInit();
    }, []);

   
    return (
        <div className="container">
            <h4>Realize aqui o seu relato</h4>

            <div style={{padding:'15px'}}>
                <form onSubmit={handleSubmit(enviarContato)}>
                    <div style={STYLE}>
                    <h5>Informações Pessoais</h5>
                        <label>
                            Nome:
                            <input type="text" name="name" onChange={handleChange}/>
                        </label>
                        <label>
                            Idade:
                            <input type="number" min="1" name="age" onChange={handleChange}/>
                        </label>
                        <label>
                            Raça:
                            <input type="text" name="race" onChange={handleChange}/>
                        </label>
                        <label>
                            Genêro:
                            <input type="text" name="gender" onChange={handleChange}/>
                        </label>
                    </div>
                    
                    <div style={STYLE}>
                        <h5>Relato</h5>
                        <label>
                            Escreva aqui seu relato:
                            <input type="text" name="story" rows="5" onChange={handleChange}/>
                        </label>
                                              
                    </div>
                   
                    <div style={STYLE}>
                        <h5>Detalhes do Relato</h5>
                        <label>
                            Local:
                            <input type="text" name="local" onChange={handleChange}/>
                        </label>
                        <label>
                            UF:
                            <select onChange={handleChange} name="uf">
                                {estados.map(item => {
                                    return (
                                        <option key={item.sigla} value={item.sigla}>{item.nome}</option>
                                    )
                                })}
                            </select>
                        </label>
                        <label>
                            Cidade:
                            <input type="text" name="city" onChange={handleChange}/>
                        </label>
                        <label>
                            Data Ocorrido:
                            <input type="date" name="city" onChange={handleChange}/>
                        </label>
                        <label>
                            Sobre o agressor:
                            <input type="text" name="aggressor" onChange={handleChange}/>
                        </label>
                    </div>

                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    )
    
}


const STYLE = {
    border: '1px solid lightgray',
    margin: '5px',
    padding: '15px'
}