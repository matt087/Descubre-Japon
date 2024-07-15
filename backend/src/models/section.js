const { Schema, model }= require('mongoose');

const sectionSchema = new Schema({
    title: String,
    description: String,
    image: String,
    subsections: [
      {
        subtitle: String,
        image: String
      }
    ]
  });
  
  module.exports = model('section', sectionSchema); //exportar
