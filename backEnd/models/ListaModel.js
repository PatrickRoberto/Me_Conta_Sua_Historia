const mongoose = require('mongoose');


let schema = mongoose.Schema({
  ID_LISTA: String,
  Descricao: String,
  lista: Array,
});

const ListaModel = mongoose.model('LISTA', schema, 'LISTAS');

module.exports = ListaModel;
