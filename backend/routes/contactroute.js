const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// POST route — add a new contact
router.post('/', async (req, res) => {
  try {
    const { name, email, phoneNumber } = req.body;

    if (!name || !email || !phoneNumber) {
      return res.status(400).json({ message: 'All fields are required' });
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
