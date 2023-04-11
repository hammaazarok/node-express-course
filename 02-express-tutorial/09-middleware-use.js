const express = require('express');
const authorize = require('./authorize');
const logger = require('./logger');

const app = express();

app.use([logger, authorize]);

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/items', (req, res) => {
  console.log(req.user);
  res.send('Items');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
