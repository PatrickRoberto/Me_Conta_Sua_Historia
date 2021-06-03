const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const dotenv = require('dotenv');

const { Parser } = require('json2csv');

dotenv.config();

const ListaModel = require('../models/ListaModel');
const LocalModel = require('../models/LocalModel');
const CidadeModel = require('../models/CidadesModel');
const NomesModel = require('../models/NomesModel');

const URL_CONNECTION = process.env.DB_CONNECTION;


const client = mongoose.connect(URL_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });


const BuscaDominios = async () => {
    const data = await ListaModel.find({}, {'_id': 0, 'ID_LISTA': 1, 'Descricao': 1});
    return data;
}

const BuscaLista = async (req, resp) => {
    const {ID_LISTA} = req
    const data = await ListaModel.findOne({'ID_LISTA': ID_LISTA});

    return data;
}

const BuscaLocais = async (req, resp) => {
    const data = await LocalModel.find();

    return data;
}

const BuscaCidade = async (req, resp) => {
    const {uf} = req;
    const data = await CidadeModel.find({sigla_uf: req})
    return data
}

const BuscaNomes = async (req, resp) => {
    const data = await NomesModel.find({}, {Name: 1})
    return data
}

module.exports = { BuscaDominios, BuscaLista, BuscaLocais, BuscaCidade, BuscaNomes};

