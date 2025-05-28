const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json({ mensaje: 'Hola desde la API!' });
});

app.listen(4000, () => {
  console.log('API escuchando en puerto 4000');
});
