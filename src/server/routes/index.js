const express = require('express');
const clientCtrl = require('../controller/clients');

const router = express.Router();

// Rutas
router.get('/clientes', clientCtrl.obtenerClientes);
router.get('/clientes/:id', clientCtrl.obtenerClientePorId);
router.post('/clientes', clientCtrl.crearCliente);
router.put('/clientes/:id', clientCtrl.actualizarCliente);

module.exports = router;
