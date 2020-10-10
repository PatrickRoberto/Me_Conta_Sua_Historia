const mongoose = require('mongoose');

let schema = mongoose.Schema({
    //Dados de Pessoa
});

const PessoaModel = mongoose.model('pessoa', schema);

module.exports = PessoaModel;
