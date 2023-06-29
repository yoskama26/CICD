const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Salut');
});

app.listen(3000, () => {
  console.log('Serveur en cours d\'exécution sur le port 3000');
});
