const { Extra } = require('../../server');

async function postExtra({name}) {

  if (!name ) throw new Error('El título es requerido');

  const newExtra = new Extra({
    name,
  });

  const resultado = await newExtra.save();
  return `El extra ${resultado.name} ha sido creado`
}

module.exports = postExtra;
