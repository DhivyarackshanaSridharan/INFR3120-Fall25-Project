const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
// Import authentication routes
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/authMiddleware');
const Session = require('./models/sessions');
const session = require('express-session');
const passport = require('passport');

// Load environment variables
dotenv.config();
console.log("Mongo URI:", process.env.MONGODB_URI);

const app = express();

// Middleware
app.use(cors());              // Allow frontend requests
app.use(express.json());      // Parse JSON bodies
// Mount authentication routes
console.log("Mounted /api/auth routes");
app.use('/api/auth', authRoutes);


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

// Minimal serialize/deserialize (upgrade later to use DB user IDs)
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Load OAuth strategies
require('./auth/google');
require('./auth/github');
require('./auth/discord');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Basic route to test server
app.get('/', (req, res) => {
  res.send('SkillSwap Backend is running!');
});

// Create a new session
app.post('/sessions', authMiddleware, async (req, res) => {
  console.log("Received body:", req.body);  // Debug log
  try {
    const { title, description, date, duration } = req.body;

    // Simple validation
    if (!title || !description || !date || !duration) {
      return res.status(400).json({
        error: 'All fields are required: title, description, date, duration'
      });
    }

    // Explicitly map fields to avoid saving unwanted data
    const session = new Session({
      title,
      description,
      date,
      duration
    });

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
app.put('/sessions/:id', authMiddleware, async (req, res) => {
  try {
    const session = await Session.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!session) return res.status(404).json({ error: 'Session not found' });
    res.json(session);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a session
app.delete('/sessions/:id', authMiddleware, async (req, res) => {
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
  console.log(`Server running on port ${PORT}`);
});
