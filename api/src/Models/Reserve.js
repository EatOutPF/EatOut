const mongoose = require('mongoose')
const { Schema } = mongoose


const reserveSchema = new Schema({
  active: Boolean,
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  restaurant: [{
    type: Schema.Types.ObjectId,
    ref: 'Restaurant'
  }],
  date: {
    type: Date,
    default: Date.now
  }

})

const Reserve = mongoose.model('Reserve', reserveSchema)

module.exports = Reserve