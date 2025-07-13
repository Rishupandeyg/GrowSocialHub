// controllers/userController.js

const Contact = require('../models/Contact')
const getAllUsers = async (req, res) => {
     try {
    const messages = await Contact.find().sort({ createdAt: -1 }); // newest first
    res.status(200).json(messages);
  } catch (err) {
    console.error('Error fetching messages:', err);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
 
};

const createUser =async (req, res) => {
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
};

module.exports = {
    getAllUsers,
    createUser

};