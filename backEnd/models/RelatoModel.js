const mongoose = require('mongoose');


let schema = mongoose.Schema({
  nomePessoa: String,
  idadePessoa: Number,
  racaPessoa: String,
  generoPessoa: String,
  textoRelato: String,
  dataRelato: Date,
  localRelato: String,
  ufRelato: String,
  cidadeRelato: String,

});

const RelatoModel = mongoose.model('RELATO', schema, 'RELATOS');

module.exports = RelatoModel;
