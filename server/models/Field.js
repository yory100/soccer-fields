const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creat Schema
const FieldSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  openFrom: {
    type: String,
    required: true
  },
  openTo: {
    type: String,
    required: true
  },
  photos: {
    type: Array
  },
  players: {
    type: Array
  },
  address: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true
  }
});

module.exports = Field = mongoose.model("Field", FieldSchema);
