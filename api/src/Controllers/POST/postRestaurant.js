const {
  Restaurant,
  Menu,
  Diet,
  PaymentMethod,
  Atmosphere,
  Extra,
  Room,
} = require("../../../server");

async function postRestaurant({
  name,
  address,
  images,
  contact,
  tables,
  menu,
  diets,
  paymentMethod,
  atmosphere,
  schedule,
  extras,
  room,
}) {
  if (!name || !address || !contact || !tables || !schedule)
    throw new Error("Hay datos obligatorios sin completar");

  const menuOjects = await Menu.find({ title: { $in: menu } });
  const dietObjects = await Diet.find({ title: { $in: diets } });
  const paymentMethodObjects = await PaymentMethod.find({
    title: { $in: paymentMethod },
  });
  const atmosphereObjects = await Atmosphere.find({
    title: { $in: atmosphere },
  });
  const extraObjects = await Extra.find({ title: { $in: extras } });
  const roomObjects = await Room.find({ title: { $in: room } });

  // Crear un nuevo objeto de receta con los campos especificados
  const newRestaurant = new Restaurant({
    name,
    address,
    images,
    contact,
    tables,
    menu: menuOjects,
    diets: dietObjects,
    paymentMethod: paymentMethodObjects,
    atmosphere: atmosphereObjects,
    schedule,
    extras: extraObjects,
    room: roomObjects,
  });

  // Guardar la receta en la base de datos
  const resultado = await newRestaurant.save();

  return `El restaurant ${resultado.name} fue creado`;
}

module.exports = postRestaurant;
