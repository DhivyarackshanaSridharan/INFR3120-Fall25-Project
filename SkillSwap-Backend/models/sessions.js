const mongoose = require('mongoose');

// Define the structure of a SkillSwap session
const sessionSchema = new mongoose.Schema({
  title: { type: String, required: true },          // Name of the skill session
  tutorName: { type: String, required: true },      // Who is teaching
  skill: { type: String, required: true },          // What skill is being taught
  description: { type: String, required: true },    // Details about the session
  date: { type: Date, required: true },             // When the session happens
  duration: { type: Number, required: true },       // Duration in minutes
}, { timestamps: true }); // adds createdAt + updatedAt automatically

// Export the model so it can be used in routes
module.exports = mongoose.model('Session', sessionSchema);
