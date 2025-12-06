const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

//const passport

const multer = require('multer');
const path = require('path');



const router = express.Router();

// Debug log to confirm file is loaded
console.log("Auth routes file loaded");

// Configure storage: save files in /uploads folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage });

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

router.post('/update-profile-pic', upload.single('profilePic'), async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.uid);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    user.profilePic = `/uploads/${req.file.filename}`;
    await user.save();

    res.json({ message: "Profile picture updated", profilePic: user.profilePic });

  } catch (err) {
    console.error("Upload error in /update-profile-pic:", err);   
    res.status(500).json({ message: "Error updating profile picture" });
  }
});


router.get('/me', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.uid).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ user });
  } catch (err) {
    res.status(500).json({ message: "Error fetching user", error: err.message });
  }
});


module.exports = router;
