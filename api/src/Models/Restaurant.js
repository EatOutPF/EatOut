const mongoose = require('mongoose')
const { Schema } = mongoose


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
  }],
  active: Boolean,

})

const Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant