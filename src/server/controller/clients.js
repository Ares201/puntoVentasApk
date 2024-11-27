const Cliente = require('../models/clients');

const obtenerClientes = async (req, res) => {
  try {
    const Clientes = await Cliente.find();
    if (Clientes.length === 0) {
      console.log('No se encontraron clientes.');
    }
    res.status(200).json(Clientes);  // Enviar la respuesta con los clientes obtenidos
  } catch (error) {
    console.error('Error al obtener clientes:', error);
    res.status(500).json({ mensaje: 'Error al obtener los clientes', error });
  }
};

// Obtener cliente por ID
const obtenerClientePorId = async (req, res) => {
  try {
    const clienteId = req.params.id;
    const cliente = await Cliente.findById(clienteId);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado.' });
    }
    return res.status(200).json({ data: cliente });
  } catch (error) {
    console.error(`Error al obtener el cliente por ID: ${error}`);
    return res.status(500).json({ message: `Error al hacer la solicitud: ${error.message}.` });
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

const actualizarCliente = async (req, res) => {
  try {
    const { id } = req.params; // ID del cliente a actualizar
    const datosActualizados = req.body; // Datos enviados en el cuerpo de la solicitud
    // Actualizar cliente por ID y devolver el cliente actualizado
    const clienteActualizado = await Cliente.findByIdAndUpdate(id, datosActualizados, { new: true });
    if (!clienteActualizado) {
      return res.status(404).json({ mensaje: 'Cliente no encontrado' });
    }
    res.status(200).json({ mensaje: 'Cliente actualizado exitosamente', cliente: clienteActualizado });
  } catch (error) {
    console.error('Error al actualizar el cliente:', error);
    res.status(500).json({ mensaje: 'Error al actualizar el cliente', error });
  }
};

module.exports = {
  obtenerClientes,
  obtenerClientePorId,
  crearCliente,
  actualizarCliente,
};