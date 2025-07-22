const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

router.post('/', async (req, res) => {
  const booking = new Booking(req.body);
  await booking.save();
  res.json(booking);
});

router.get('/:userId', async (req, res) => {
  const bookings = await Booking.find({ user: req.params.userId });
  res.json(bookings);
});

router.get('/', async (req, res) => {
  const all = await Booking.find();
  res.json(all);
});

module.exports = router;