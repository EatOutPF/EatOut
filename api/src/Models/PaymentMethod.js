const mongoose = require('mongoose')
const { Schema } = mongoose


const paymentMethodSchema = new Schema({
name: String
})

const PaymentMethod = mongoose.model('PaymentMethod', paymentMethodSchema)

module.exports = PaymentMethod