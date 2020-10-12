const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const dotenv = require('dotenv');
dotenv.config();

const RelatoModel = require('../models/RelatoModel');

const URL_CONNECTION = process.env.DB_CONNECTION;


const client = mongoose.connect(URL_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

//A partir daqui imprimo as coisas
let Buscas = 0;
const todosRelatos = async () => {
    const data = await RelatoModel.find({});
    console.log('Realizaou a busca: ', Buscas++);

    return data;
}

const CadastrarRelato = async (Relato) =>{
    console.log('Chegou aqui');
    console.log(Relato)
    try {
        if(!Relato) {
            console.log('Chegou vazio')
            return {message: 'Dados Vazios'}
        }
        const relatoCadastro = new RelatoModel(Relato);
        const data = await relatoCadastro.save();
        console.log('Realizaou o cadastro: ', data);
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }


}

module.exports = { todosRelatos, CadastrarRelato };


