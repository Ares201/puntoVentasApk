require('dotenv').config();
const mongoose = require('mongoose');

const URI = "mongodb+srv://jcerveracobenas:ESilKIMPkL4NlwbZ@cluster0.k9gqh.mongodb.net/puntoVenta?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log('Conexión exitosa a la base de datos.');
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
