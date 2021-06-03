
const mongoose = require('mongoose');


let schema = mongoose.Schema({
  Name: String,
  Genero: String,
});

const NomeModel = mongoose.model('NOME', schema, 'NOMES');

module.exports = NomeModel;