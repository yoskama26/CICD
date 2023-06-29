const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Salut !');
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
