const mongoose = require('mongoose')
const { Schema } = mongoose


const userSchema = new Schema({
  name: String,
  contact: Object,
  email: String,
  password: String,
  favorite: [{
    type: Schema.Types.ObjectId,
    ref: 'Favorite'
  }],
  role: String,
  reserve: [{
    type: Schema.Types.ObjectId,
    ref: 'Reserve'
  }],
  active: Boolean,

})

const User = mongoose.model('User', userSchema)

module.exports = User