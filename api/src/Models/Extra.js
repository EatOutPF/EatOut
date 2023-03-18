const mongoose = require('mongoose')
const { Schema } = mongoose


const extraSchema = new Schema({
name: String
})

const Extra = mongoose.model('Extra', extraSchema)

module.exports = Extra