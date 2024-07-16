const { Schema, model } = require('mongoose');

const dishSchema = new Schema({
  name: String,
  imageUrl: String,
  description: String
});

const dishesSchema = new Schema({
  dishes: [dishSchema]
});

module.exports = model('Dish', dishesSchema);
