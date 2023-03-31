const http = require('http');

const server = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/') {
    res.writeHead(200, {
      'content-type': 'text/html',
    });
    res.end('<h1>Homepage</h1>');
  } else if (url === '/about') {
    res.writeHead(200, {
      'content-type': 'text/html',
    });
    res.end('<h1>About</h1>');
  } else {
    res.writeHead(404, {
      'content-type': 'text/html',
    });
    res.end('<h1>Not found</h1>');
  }
});

server.listen(5000);
