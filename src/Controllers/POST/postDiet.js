const { Diet } = require('../../server');

async function postDiet({name}) {

  if (!name ) throw new Error('El título es requerido');

  const newDiet = new Diet({
    name,
  });

  const resultado = await newDiet.save();
  return `El tipo de dieta ${resultado.name} ha sido creado`
}

module.exports = postDiet;
