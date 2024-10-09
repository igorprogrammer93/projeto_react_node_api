// src/routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/', userController.createUser); // POST /users
// Outras rotas de usuários, se houver
router.delete('/:id', userController.deleteUser); // DELETE /users/:id

module.exports = router;
