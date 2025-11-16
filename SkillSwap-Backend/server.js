const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


// Load environment variables
dotenv.config();
console.log("Mongo URI:", process.env.MONGODB_URI);


const app = express();


// Middleware
app.use(cors());              // Allow frontend requests
app.use(express.json());      // Parse JSON bodies


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));


// Basic route to test server
app.get('/', (req, res) => {
  res.send('SkillSwap Backend is running!');
});


// Import Session model
const Session = require('./models/sessions');


// Create a new session
app.post('/sessions', async (req, res) => {
  console.log("Received body:", req.body);  // Debug log
  try {
    const { title, description, date, duration } = req.body;


    // Simple validation
    if (!title || !description || !date || !duration) {
      return res.status(400).json({ error: 'All fields are required: title, description, date, duration' });
    }


    const session = new Session(req.body);
    await session.save();
    res.status(201).json(session);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Get all sessions
app.get('/sessions', async (req, res) => {
  try {
    const sessions = await Session.find();
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Get one session by ID
app.get('/sessions/:id', async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) return res.status(404).json({ error: 'Session not found' });
    res.json(session);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Update a session
app.put('/sessions/:id', async (req, res) => {
  try {
    const session = await Session.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!session) return res.status(404).json({ error: 'Session not found' });
    res.json(session);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Delete a session
app.delete('/sessions/:id', async (req, res) => {
  try {
    const session = await Session.findByIdAndDelete(req.params.id);
    if (!session) return res.status(404).json({ error: 'Session not found' });
    res.json({ message: 'Session deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
