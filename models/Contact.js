const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    user_email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    user_phone: {
    type: String,
     required: [true, 'Phone number is required'],
     trim: true,
     Amatch: [/^[0-9]{10,15}$/, 'Please enter a valid phone number'],
},

    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

module.exports = mongoose.model('Contact', contactSchema);
