const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  dni: String,
  nombres: String,
  apellidos: String,
  fechaNacimiento: Date,
  rol: String,
  telefono: String,
  correo: String,
  contrasena: String,
  nombreUsuario: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;

const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Ruta para registrar un usuario
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Otras rutas para CRUD de usuarios

module.exports = router;
