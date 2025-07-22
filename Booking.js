const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  eventName: String,
  seatType: String,
  quantity: Number,
  ticketId: String,
  approved: { type: Boolean, default: false },
});

module.exports = mongoose.model('Booking', bookingSchema);