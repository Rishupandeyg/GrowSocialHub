const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');

const app = express();

app.use(cors());
app.use(express.json());

// Connect the contact route
app.use('/api/contact', contactRoutes);

// Default test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;
