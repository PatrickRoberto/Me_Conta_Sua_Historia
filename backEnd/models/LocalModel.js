
const mongoose = require('mongoose');


let schema = mongoose.Schema({
  ID: Number,
  Texto: String,
});

const LocalModel = mongoose.model('LOCAL', schema, 'LOCAIS');

module.exports = LocalModel;