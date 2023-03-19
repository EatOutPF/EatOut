const Menu = require("../../Models/Menu");


async function getMenu(name) {
  if (name) {
    let buscar = await Menu.find(
      { name: { $in: name } },
      { name: 1, _id: 0 }
    );

    if (buscar.length === 0) {
      return `No existe el menu ${name}`;
    }
    return buscar;
  } 
  let buscar = await Menu.find({}, { name: 1, _id: 0 })
  if (buscar.length === 0) {
    return `No existen menus`;
  }
  return buscar;
}

module.exports = getMenu;
