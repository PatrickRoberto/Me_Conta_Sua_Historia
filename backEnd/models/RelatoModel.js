const mongoose = require('mongoose');

let schema = mongoose.Schema({
  Nome_Denunciante: String,
  Idade_Denunciante: Number,
  Raca_Denunciante: String,
  Genero_Denunciante: String,
  Relato: String,
  Data_Relato: Date,
  Agressor_Relato: String,
});

const RelatoModel = mongoose.model('relato', schema);

module.exports = RelatoModel;
