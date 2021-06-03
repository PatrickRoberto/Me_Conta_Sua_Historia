const mongoose = require('mongoose');


let schema = mongoose.Schema({
  nomePessoa: String,
  idadePessoa: Number,
  racaPessoa: String,
  generoPessoa: String,
  textoRelato: String,
  textoRelatoTratado: String,
  dataRelato: Date,
  localRelato: Number,
  ufRelato: String,
  cidadeRelato: String,
  agressaoFisica: Boolean,
  aconteceuComigo: Boolean,
  casoPolicial: Boolean,

});

const RelatoModel = mongoose.model('RELATO', schema, 'RELATOS');

module.exports = RelatoModel;
