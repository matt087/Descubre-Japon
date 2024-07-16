const { Schema, model } = require('mongoose');

const resultadoSchema = new Schema({
  nombreUsuario: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  respuestasCorrectas: { type: Number, required: true }
});

module.exports = model('Resultados', resultadoSchema); //exportar