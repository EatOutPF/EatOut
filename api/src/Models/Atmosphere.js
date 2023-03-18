const mongoose = require('mongoose')
const { Schema } = mongoose


const atmosphereSchema = new Schema({
name: String
})

const Atmosphere = mongoose.model('Atmosphere', atmosphereSchema)

module.exports = Atmosphere