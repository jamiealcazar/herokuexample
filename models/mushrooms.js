const mongoose = require('mongoose');

const mushroomSchema = new mongoose.Schema({
  name: String,
  img: String,
  description: String,
  location: String
})

const Mushrooms = mongoose.model('Mushrooms', mushroomSchema)

module.exports = Mushrooms;
