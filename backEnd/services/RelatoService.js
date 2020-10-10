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
    console.log('Entrou no controller')
    const data = await RelatoModel.find({});
    console.log('Realizaou a busca: ', Buscas++);

    return data;
}

module.exports = { todosRelatos };