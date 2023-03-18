const mongoose = require("mongoose");
const { Schema } = mongoose;

const dietSchema = new Schema({
  name: String,
});

const Diet = mongoose.model("Diet", dietSchema);

module.exports = Diet;
