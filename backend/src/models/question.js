const { Schema, model }= require('mongoose');

const questionSchema = new Schema({
    pregunta: String,
    opcion1: String, 
    opcion2: String, 
    opcion3: String, 
    opcion4: String, 
    respuesta: String
 });

module.exports = model('question', questionSchema); 