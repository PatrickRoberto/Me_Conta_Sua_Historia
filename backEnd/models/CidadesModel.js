const mongoose = require('mongoose');


let schema = mongoose.Schema({
    nome: String,
    capital: Boolean,
    codigo_uf: Number,
    sigla_uf: String, 
    nome_uf: String,
});

const CidadeModel = mongoose.model('CIDADE', schema, 'CIDADES');

module.exports = CidadeModel;