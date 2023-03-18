const mongoose = require('mongoose')
const { Schema } = mongoose


const roomSchema = new Schema({
name: String
})

const Room = mongoose.model('Room', roomSchema)

module.exports = Room