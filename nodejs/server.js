const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

process.on('SIGTERM', () => {
  console.log('Shutting down gracefully...');

  db.end((err) => {
      if (err) {
          console.error('Error closing database connection:', err);
      }
      console.log('Database connection closed.');
      process.exit(0);
  });
});