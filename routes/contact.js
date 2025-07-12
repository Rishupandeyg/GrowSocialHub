const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Ensure this path is correct

// POST /api/contact – Submit contact form
router.post('/', async (req, res) => {
  const { user_name, user_email, user_phone, message } = req.body;

  if (!user_name || !user_email || !user_phone || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newContact = new Contact({
      user_name,
      user_email,
      user_phone,
      message,
    });

    await newContact.save();

    console.log('Contact saved:', newContact);

    res.status(200).json({ success: true, message: 'Message received!' });
  } catch (err) {
    console.error('Error saving contact:', err);
    res.status(500).json({ error: 'Failed to save message' });
  }
});

// GET /api/contact – Get all messages (for admin dashboard)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json(messages);
  } catch (err) {
    console.error('Error fetching messages:', err);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

module.exports = router;
