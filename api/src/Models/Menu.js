const mongoose = require('mongoose')
const { Schema } = mongoose


const menuSchema = new Schema({
name: String
})

const Menu = mongoose.model('Menu', menuSchema)

module.exports = Menu