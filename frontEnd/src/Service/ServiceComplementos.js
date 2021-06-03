import axios from 'axios'

const api = axios.create({ baseURL: 'api/complemento' });

const RecuperaGeneros = async () => {
    const retorno = await api.get('/genero')
    const {data} = retorno;
    
    return data.data.LISTA;
}

const RecuperaEtnia = async () => {
    const retorno = await api.get('/etnia')
    const { data: Etnias } = retorno.data;
    return Etnias.LISTA;
}

const RecuperaLocal = async () => {
    const retorno = await api.get('/local')
    const { data: Local } = retorno.data;
    return Local;
}

const RecuperaCidades = async (uf) => {
    if(!uf)
        return []
    const retorno = await api.get(`/cidade?uf=${uf}`)
    const { data: Cidades } = retorno.data;
    return Cidades;
}


export { RecuperaGeneros, RecuperaEtnia,  RecuperaLocal, RecuperaCidades};