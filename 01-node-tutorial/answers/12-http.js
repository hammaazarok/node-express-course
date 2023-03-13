const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to our page');
  } else if (req.url === '/about') {
    res.write('About page');
  } else {
    res.write(`
      <h1>Oops, Page Not Found!!!</h1>
      <a href="/">Back Home</a>
    `);
  }
  res.end();
});

server.listen(5000);
