const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  duration: { type: Number, required: true }
});

module.exports = mongoose.model('Session', sessionSchema);

