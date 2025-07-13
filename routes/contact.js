// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/ContactControler');

router.get('/getAll', userController.getAllUsers);
router.post('/create', userController.createUser);

module.exports = router;