const { Room } = require('../../server');

async function postRoom({name}) {

  if (!name ) throw new Error('El título es requerido');

  const newRoom = new Room({
    name,
  });

  const resultado = await newRoom.save();
  return `El espacio ${resultado.name} ha sido creado`
}

module.exports = postRoom;
