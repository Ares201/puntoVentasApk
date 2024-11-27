const express = require('express');
const cors = require('cors')
const connectDB = require('./dataBase');
const clientRoutes = require('./routes/index');

const app = express();
const PORT = 5000;

connectDB();
app.use(cors()); // Esto permite solicitudes desde cualquier origen
// Middleware
app.use(express.json())
// Rutas
app.use('/api', clientRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
