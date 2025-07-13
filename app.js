const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contact');

const app = express();

// Allow only your frontend
app.use(cors({
  origin: 'https://maroon-crane-431544.hostingersite.com',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.options('*', cors()); // Optional for preflight

app.use(express.json());

// Connect the contact route
app.use('/api/contact', contactRoutes);

// Default test route
app.get('/', (req, res) => {

  res.send('API is running...');
});

module.exports = app;
