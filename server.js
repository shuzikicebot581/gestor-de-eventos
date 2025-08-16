const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Conectar a Mongoose
mongoose.connect('mongodb://localhost/gestor-de-eventos', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB...'))
  .catch(err => console.log(err));

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});

app.get('/', (req, res) => {
  res.send('Bienvenido al Gestor de Eventos.');
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});