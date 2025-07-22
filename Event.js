const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  venue: String,
  category: String,
  seatsAvailable: Number
});

module.exports = mongoose.model('Event', eventSchema);
