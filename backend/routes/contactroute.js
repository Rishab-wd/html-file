const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.get('/', async (req, res) => {
  console.log("You are on the backend");
  res.send("✅ You reached the backend successfully!");
});

// POST route — add a new contact
router.post('/contact', async (req, res) => {
  try {
    const { name, email, phoneNumber } = req.body;

    if (!name || !email || !phoneNumber) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the email already exists
    const existing = await Contact.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    const newContact = new Contact({ name, email, phoneNumber });
    await newContact.save();

    res.status(201).json({ message: 'Contact saved successfully', data: newContact });
  } catch (error) {
    console.error('Error saving contact:', error);

    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }

    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
