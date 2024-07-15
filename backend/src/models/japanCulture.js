const { Schema, model }= require('mongoose');

const festivalSchema = new Schema({
    name: String,
    imageUrl: String,
    description: String
  });
const traditionalClothingSchema = new Schema({
    name: String,
    imageUrl: String,
    description: String
});

const japanCultureSchema = new Schema({
    festivals: [festivalSchema],
    traditionalClothing: [traditionalClothingSchema]
  });

module.exports = model('japanCulture', japanCultureSchema); 