const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Field Schema
const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  games: {
    type: Number,
    required: true
  },
  goals: {
    type: Number,
    required: true
  },
  assists: {
    type: Number,
    required: true
  },
  picture: {
    type: String
  }
});

module.exports = Player = mongoose.model("Player", PlayerSchema);
