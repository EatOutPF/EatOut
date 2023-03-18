const Menu = require("../../Models/Menu");


async function postMenu(name) {

  if (!name ) throw new Error('El título es requerido');

  const newMenu = new Menu(
    name,
  );

  const resultado = await newMenu.save();
  
  return `El menu ${resultado.name} ha sido creado`
}

module.exports = postMenu;
