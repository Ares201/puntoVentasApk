const express = require('express');
const itemsCtrl = require('../controller/clients');

const router = express.Router();

// Rutas
router.get('/clientes', itemsCtrl.obtenerClientes)
router.post('/clientes', itemsCtrl.crearCliente)

module.exports = router;
