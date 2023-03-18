const { PaymentMethod } = require('../../server');

async function postPaymentMethod({name}) {

  if (!name ) throw new Error('El título es requerido');

  const newPaymentMethod = new PaymentMethod({
    name,
  });

  const resultado = await newPaymentMethod.save();
  return `El medio de pago ${resultado.name} ha sido creado`
}

module.exports = postPaymentMethod;
