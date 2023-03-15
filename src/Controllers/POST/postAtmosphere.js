const { Atmosphere } = require('../../../server');

async function postAtmosphere({name}) {

  if (!name ) throw new Error('El título es requerido');

  const newAtmosphere = new Atmosphere({
    name,
  });

  const resultado = await newAtmosphere.save();
  return `La atmósfera ${resultado.name} ha sido creada`
}

module.exports = postAtmosphere;
