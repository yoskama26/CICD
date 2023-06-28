const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('slt cv');
  });
  const port = 3000; // Port sur lequel le serveur écoutera les requêtes

  app.listen(port, () => {
    console.log(`Le serveur est en écoute sur le port ${port}`);
  });
  