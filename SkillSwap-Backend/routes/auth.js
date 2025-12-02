const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const passport = require('passport');

const router = express.Router();

// Debug log to confirm file is loaded
console.log("Auth routes file loaded");

// Register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields required' });
  }
  const exists = await User.findOne({ email });
  if (exists) return res.status(409).json({ message: 'Email already registered' });

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hash });
  res.status(201).json({ id: user._id, name: user.name, email: user.email });
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign(
    { uid: user._id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  res.json({ token, name: user.name, email: user.email });
});

// POST /reset-password
router.post('/reset-password', async (req, res) => {
  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    return res.status(400).json({ message: 'Email and new password required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.json({ message: 'Password reset successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error resetting password' });
  }
});

// Google login start
router.get('/google', (req, res, next) => {
  console.log("Google login route hit");
  next();
}, passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google callback
router.get('/google/callback',
  (req, res, next) => {
    console.log("Google callback route hit");
    next();
  },
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    console.log("Google login successful, redirecting to frontend");
    res.redirect('https://skillswapfrontend.vercel.app');
  }
);

// GitHub login start
router.get('/github', (req, res, next) => {
  console.log("GitHub login route hit");
  next();
}, passport.authenticate('github', { scope: ['user:email'] }));

// GitHub callback
router.get('/github/callback',
  (req, res, next) => {
    console.log("GitHub callback route hit");
    next();
  },
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    console.log("GitHub login successful, redirecting to frontend");
    res.redirect('https://skillswapfrontend.vercel.app');
  }
);

// Discord login start
router.get('/discord', (req, res, next) => {
  console.log("Discord login route hit");
  next();
}, passport.authenticate('discord'));

// Discord callback
router.get('/discord/callback',
  (req, res, next) => {
    console.log("Discord callback route hit");
    next();
  },
  passport.authenticate('discord', { failureRedirect: '/login' }),
  (req, res) => {
    console.log("Discord login successful, redirecting to frontend");
    res.redirect('https://skillswapfrontend.vercel.app');
  }
);

module.exports = router;
