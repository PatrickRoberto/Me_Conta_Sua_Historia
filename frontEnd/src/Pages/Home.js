import React from 'react';
import Conteudo from '../components/Conteudo/Conteudo';
import Graficos from '../components/Conteudo/Graficos';
import Relatos from '../components/Conteudo/Relatos';
import relatosText from '../Help/Relatos';

export default function Home() {

    return (
      <div>
        <div className='container' >


          <Conteudo>
            <Relatos relatos={relatosText} />
            <Graficos />
          </Conteudo>
        </div>
      </div>
     
    );
  
}
