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

export { CadastroRelato, RecuperarRelatos };