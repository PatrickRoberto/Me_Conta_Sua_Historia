import axios from 'axios'

const api = axios.create({ baseURL: 'api/Relato' });

const CadastroRelato = async (relato) => {

    const data = await api.post('/cadastro', relato)
    return data;
}

const RecuperarRelatos = async () => { 
    const retorno = await api.get('/relatos');
    const { data: Relatos } = retorno.data;
    return Relatos;
}

const RecuperarRelatosParaGraficoGenero = async () => { 
    const retorno = await api.get('/relatosporgenero');
    const { data: ResumoPorGenero } = retorno.data;


    return ResumoPorGenero;
}

export { CadastroRelato, RecuperarRelatos, RecuperarRelatosParaGraficoGenero };