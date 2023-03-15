const mongoose = require('mongoose')
const { Schema } = mongoose

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const restaurantSchema = new Schema({
  name: String,
  address: Object,
  images: Array,
  contact: Object,
  tables: Number,
  menu: [{
    type: Schema.Types.ObjectId,
    ref: 'Menu'
  }],
  diets: [{
    type: Schema.Types.ObjectId,
    ref: 'Diet'
  }],
  paymentMethods: [{
    type: Schema.Types.ObjectId,
    ref: 'PaymentMethod'
  }],
  atmosphere: [{
    type: Schema.Types.ObjectId,
    ref: 'Atmosphere'
  }],
  schedule: Array,
  extras: [{
    type: Schema.Types.ObjectId,
    ref: 'Extra'
  }],
  room: [{
    type: Schema.Types.ObjectId,
    ref: 'Room'
  }]

})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant