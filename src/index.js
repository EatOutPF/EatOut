require("dotenv").config();
const Restaurant = require("./Models/Restaurant");
const Menu = require("./Models/Menu");
const Diet = require("./Models/Diet");
const PaymentMethod = require("./Models/PaymentMethod");
const Atmosphere = require("./Models/Atmosphere");
const Extra = require("./Models/Extra");
const Room = require("./Models/Room");
const { ATLAS_URI, PORT } = process.env;
const mongoose = require("mongoose");


mongoose
  .connect(ATLAS_URI, {
    maxPoolSize: 50,
    waitQueueTimeoutMS: 2500,
    useNewUrlParser: true,
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
//   .then(async (client) => {
//     server.listeners(PORTDB, () => {
//       console.log(`lintening on port ${PORT}`);
//     });
//   });

module.exports = {
  Restaurant,
  Menu,
  Diet,
  PaymentMethod,
  Atmosphere,
  Extra,
  Room,
};
