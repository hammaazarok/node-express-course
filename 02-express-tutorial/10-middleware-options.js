const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));

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
