const Cliente = require('../models/clients');

const obtenerClientes = async (req, res) => {
  try {
    const Clientes = await Cliente.find();
    console.log('Clientes obtenidos:', Clientes);
    if (Clientes.length === 0) {
      console.log('No se encontraron clientes.');
    }
    res.status(200).json(Clientes);  // Enviar la respuesta con los clientes obtenidos
  } catch (error) {
    console.error('Error al obtener clientes:', error);
    res.status(500).json({ mensaje: 'Error al obtener los clientes', error });
  }
};

const crearCliente = async (req, res) => {
  try {
    const { id, fullName, email, phone, creditAmount, referenceContact, showCreditModal } = req.body;
    // Crear una nueva instancia del modelo Cliente
    const nuevoCliente = new Cliente({
      id,
      fullName,
      email,
      phone,
      creditAmount,
      referenceContact,
      showCreditModal,
    });
    await nuevoCliente.save();
    res.status(201).json({ mensaje: 'Cliente creado exitosamente', cliente: nuevoCliente });
  } catch (error) {
    console.error('Error al crear el cliente:', error);
    res.status(500).json({ mensaje: 'Error al crear el cliente', error });
  }
};

module.exports = {
  obtenerClientes,
  crearCliente,
};
