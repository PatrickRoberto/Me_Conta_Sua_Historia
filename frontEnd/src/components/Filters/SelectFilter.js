import React, { useEffect } from 'react'
import M from "materialize-css";

export default function SelectFilter(props) {
   
    useEffect(() => {
        M.AutoInit();

    }, []);

    const handleChangeSelect = (e) => {
        const nameFilter = e.target.name;
        const valueFilter = e.target.value;
        props.changeSelectFilter(nameFilter, valueFilter);
    }

        const {titulo, opcoes, name } = props;
        return (
            <div className='col s12 m6'>
                <label >
                {titulo}
                <select 
                    onChange={handleChangeSelect}
                    name={name}>
                    <option value=""></option>
                        {opcoes.map((opcao) => {
                            return (
                                <option key={opcao} value={opcao}>{opcao}</option>
                            )
                        })}
                </select>
                </label>
            </div>
        )
    
}