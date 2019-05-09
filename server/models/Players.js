const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Field Schema
const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  games: {
    type: String,
    required: true
  },
  goals: {
    type: String,
    required: true
  },
  assists: {
    type: String,
    required: true
  }
});

module.exports = Player = mongoose.model("Player", PlayerSchema);
