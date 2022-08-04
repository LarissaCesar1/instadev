const express = require('express');
const UsuariosController = require('../controllers/UsuariosController');
const router = express.Router();
router.get('/create', UsuariosController.create);
router.post('/create', UsuariosController.store);


module.exports = router